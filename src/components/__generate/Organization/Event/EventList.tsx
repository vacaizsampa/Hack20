import React, { FC, useState } from 'react';
import { Button, Space, Spin, Table } from 'antd';
import { Link, useNavigate, useParams } from 'react-router';
import { useApolloClient } from '@apollo/client';

import { extractParamName, extractParamValue } from '../../../../basic/Utils';
import ErrorModal from '../../../basic/ErrorModal';
import { useSearchEventQuery } from '../../../../__generate/graphql-frontend'

export const EventList: FC<{ selectedEvent?: string | null, setSelectedEvent?: (value: string) => void }> = ({ selectedEvent, setSelectedEvent }) => {

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
  },
  {
    "title": "endDateTime",
    "key": "endDateTime",
    "dataIndex": "endDateTime"
  },
  {
    "title": "startDateTime",
    "key": "startDateTime",
    "dataIndex": "startDateTime"
  }
].concat((selectedEvent === null) ? [] : [
        {
            "title": "actions",
            "key": "actions",
            "dataIndex": "actions"
        }])

    const [error, setError] = useState<Error | null>(null)

    const { data, loading, error: queryError } = useSearchEventQuery(
        {
            variables: {
                cond: (filterStr && filterStr !== 'undefined' && selectedEvent !== null ) ? `it.${extractParamName(filterStr)}.id=='${extractParamValue(filterStr)}'` : null
            }
        })

    const elemList = data?.searchEvent.elems

    const mapToView = (list: typeof elemList) => {
        return (
            list?.map(elem => {
                return {
                    key: elem.id ?? "",
          actions: <Space>
            <Link to={`/OrganizationAgg/Event/Update/${elem.id}`}>Update</Link>
            <Link to={`/OrganizationAgg/Event/Delete/${elem.id}`}>Delete</Link>
          </Space>,
          id: elem.id,
                    description: elem.description,
                    endDateTime: elem.endDateTime,
                    startDateTime: elem.startDateTime,

                }
            })
        )
    }

    if (loading) return (<Spin tip="Loading..." />);
    if (queryError) {
        return (<ErrorModal error={queryError} setError={setError} />)
    } else {
    
        client.refetchQueries({include:["searchEvent"]})
        return (
            <Space direction='vertical'>
                {selectedEvent === undefined && <Button
                    onClick={() => {
                        navigate(`/OrganizationAgg/Event/Create/${filterStr}`)
                    }}
                >
                    Create
                </Button>}
        
                <Table
                    columns={columns}
                    dataSource={mapToView(elemList)}
                    onRow={(record) => ({ onClick: event => { if (setSelectedEvent) setSelectedEvent(record.id) } })}
                />
            </Space>
        )
    }
}
