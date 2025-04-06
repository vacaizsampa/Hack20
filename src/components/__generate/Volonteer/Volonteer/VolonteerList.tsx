import React, { FC, useState } from 'react';
import { Button, Space, Spin, Table } from 'antd';
import { Link, useNavigate, useParams } from 'react-router';
import { useApolloClient } from '@apollo/client';

import { extractParamName, extractParamValue } from '../../../../basic/Utils';
import ErrorModal from '../../../basic/ErrorModal';
import { useSearchVolonteerQuery } from '../../../../__generate/graphql-frontend'

export const VolonteerList: FC<{ selectedVolonteer?: string | null, setSelectedVolonteer?: (value: string) => void }> = ({ selectedVolonteer, setSelectedVolonteer }) => {

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
    "title": "nickName",
    "key": "nickName",
    "dataIndex": "nickName"
  },
  {
    "title": "eventBookingList",
    "key": "eventBookingList",
    "dataIndex": "eventBookingList"
  }
].concat((selectedVolonteer === null) ? [] : [
        {
            "title": "actions",
            "key": "actions",
            "dataIndex": "actions"
        }])

    const [error, setError] = useState<Error | null>(null)

    const { data, loading, error: queryError } = useSearchVolonteerQuery(
        {
            variables: {
                cond: (filterStr && filterStr !== 'undefined' && selectedVolonteer !== null ) ? `it.${extractParamName(filterStr)}.id=='${extractParamValue(filterStr)}'` : null
            }
        })

    const elemList = data?.searchVolonteer.elems

    const mapToView = (list: typeof elemList) => {
        return (
            list?.map(elem => {
                return {
                    key: elem.id ?? "",
          actions: <Space>
            <Link to={`/VolonteerAgg/Volonteer/Update/${elem.id}`}>Update</Link>
            <Link to={`/VolonteerAgg/Volonteer/Delete/${elem.id}`}>Delete</Link>
          </Space>,
          id: elem.id,
                    nickName: elem.nickName,
                    eventBookingList: <Link to={`/VolonteerAgg/VolonteerEventRequest/List/volonteer=${elem.id}`}>{"{***}"}</Link>,
                }
            })
        )
    }

    if (loading) return (<Spin tip="Loading..." />);
    if (queryError) {
        return (<ErrorModal error={queryError} setError={setError} />)
    } else {
    
        client.refetchQueries({include:["searchVolonteer"]})
        return (
            <Space direction='vertical'>
                {selectedVolonteer === undefined && <Button
                    onClick={() => {
                        navigate(`/VolonteerAgg/Volonteer/Create/${filterStr}`)
                    }}
                >
                    Create
                </Button>}
        
                <Table
                    columns={columns}
                    dataSource={mapToView(elemList)}
                    onRow={(record) => ({ onClick: event => { if (setSelectedVolonteer) setSelectedVolonteer(record.id) } })}
                />
            </Space>
        )
    }
}
