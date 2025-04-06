import React, { FC, useState } from 'react';
import { Button, Space, Spin, Table } from 'antd';
import { Link, useNavigate, useParams } from 'react-router';
import { useApolloClient } from '@apollo/client';

import { extractParamName, extractParamValue } from '../../../../basic/Utils';
import ErrorModal from '../../../basic/ErrorModal';
import { useSearchOrganizationQuery } from '../../../../__generate/graphql-frontend'

export const OrganizationList: FC<{ selectedOrganization?: string | null, setSelectedOrganization?: (value: string) => void }> = ({ selectedOrganization, setSelectedOrganization }) => {

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
    "title": "name",
    "key": "name",
    "dataIndex": "name"
  },
  {
    "title": "eventList",
    "key": "eventList",
    "dataIndex": "eventList"
  }
].concat((selectedOrganization === null) ? [] : [
        {
            "title": "actions",
            "key": "actions",
            "dataIndex": "actions"
        }])

    const [error, setError] = useState<Error | null>(null)

    const { data, loading, error: queryError } = useSearchOrganizationQuery(
        {
            variables: {
                cond: (filterStr && filterStr !== 'undefined' && selectedOrganization !== null ) ? `it.${extractParamName(filterStr)}.id=='${extractParamValue(filterStr)}'` : null
            }
        })

    const elemList = data?.searchOrganization.elems

    const mapToView = (list: typeof elemList) => {
        return (
            list?.map(elem => {
                return {
                    key: elem.id ?? "",
          actions: <Space>
            <Link to={`/OrganizationAgg/Organization/Update/${elem.id}`}>Update</Link>
            <Link to={`/OrganizationAgg/Organization/Delete/${elem.id}`}>Delete</Link>
          </Space>,
          id: elem.id,
                    name: elem.name,
                    eventList: <Link to={`/OrganizationAgg/Event/List/organization=${elem.id}`}>{"{***}"}</Link>,
                }
            })
        )
    }

    if (loading) return (<Spin tip="Loading..." />);
    if (queryError) {
        return (<ErrorModal error={queryError} setError={setError} />)
    } else {
    
        client.refetchQueries({include:["searchOrganization"]})
        return (
            <Space direction='vertical'>
                {selectedOrganization === undefined && <Button
                    onClick={() => {
                        navigate(`/OrganizationAgg/Organization/Create/${filterStr}`)
                    }}
                >
                    Create
                </Button>}
        
                <Table
                    columns={columns}
                    dataSource={mapToView(elemList)}
                    onRow={(record) => ({ onClick: event => { if (setSelectedOrganization) setSelectedOrganization(record.id) } })}
                />
            </Space>
        )
    }
}
