import React, { FC, useState } from 'react';
import { Button, Space, Spin, Table } from 'antd';
import { Link, useNavigate, useParams } from 'react-router';
import { useApolloClient } from '@apollo/client';

import { extractParamName, extractParamValue } from '../../../../basic/Utils';
import ErrorModal from '../../../basic/ErrorModal';
import { useSearchVolonteerEventRequestQuery } from '../../../../__generate/graphql-frontend'

export const VolonteerEventRequestList: FC<{ selectedVolonteerEventRequest?: string | null, setSelectedVolonteerEventRequest?: (value: string) => void }> = ({ selectedVolonteerEventRequest, setSelectedVolonteerEventRequest }) => {

    const client = useApolloClient()

    const navigate = useNavigate();

    const { filterStr } = useParams()

    const columns = [
  {
    "title": "id",
    "key": "id",
    "dataIndex": "id"
  },
  {
    "title": "description",
    "key": "description",
    "dataIndex": "description"
  }
].concat((selectedVolonteerEventRequest === null) ? [] : [
        {
            "title": "actions",
            "key": "actions",
            "dataIndex": "actions"
        }])

    const [error, setError] = useState<Error | null>(null)

    const { data, loading, error: queryError } = useSearchVolonteerEventRequestQuery(
        {
            variables: {
                cond: (filterStr && filterStr !== 'undefined' && selectedVolonteerEventRequest !== null ) ? `it.${extractParamName(filterStr)}.id=='${extractParamValue(filterStr)}'` : null
            }
        })

    const elemList = data?.searchVolonteerEventRequest.elems

    const mapToView = (list: typeof elemList) => {
        return (
            list?.map(elem => {
                return {
                    key: elem.id ?? "",
          actions: <Space>
            <Link to={`/VolonteerAgg/VolonteerEventRequest/Update/${elem.id}`}>Update</Link>
            <Link to={`/VolonteerAgg/VolonteerEventRequest/Delete/${elem.id}`}>Delete</Link>
          </Space>,
          id: elem.id,
                    description: elem.description,

                }
            })
        )
    }

    if (loading) return (<Spin tip="Loading..." />);
    if (queryError) {
        return (<ErrorModal error={queryError} setError={setError} />)
    } else {
    
        client.refetchQueries({include:["searchVolonteerEventRequest"]})
        return (
            <Space direction='vertical'>
                {selectedVolonteerEventRequest === undefined && <Button
                    onClick={() => {
                        navigate(`/VolonteerAgg/VolonteerEventRequest/Create/${filterStr}`)
                    }}
                >
                    Create
                </Button>}
        
                <Table
                    columns={columns}
                    dataSource={mapToView(elemList)}
                    onRow={(record) => ({ onClick: event => { if (setSelectedVolonteerEventRequest) setSelectedVolonteerEventRequest(record.id) } })}
                />
            </Space>
        )
    }
}
