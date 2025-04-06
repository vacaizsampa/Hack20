import React, { FC, useState } from 'react';
import { Button, Space, Spin, Table } from 'antd';
import { Link, useNavigate, useParams } from 'react-router';
import { useApolloClient } from '@apollo/client';

import { extractParamName, extractParamValue } from '../../../../basic/Utils';
import ErrorModal from '../../../basic/ErrorModal';
import { useSearchPersonQuery } from '../../../../__generate/graphql-frontend'

export const PersonList: FC<{ selectedPerson?: string | null, setSelectedPerson?: (value: string) => void }> = ({ selectedPerson, setSelectedPerson }) => {

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
    "title": "birthDate",
    "key": "birthDate",
    "dataIndex": "birthDate"
  },
  {
    "title": "firstName",
    "key": "firstName",
    "dataIndex": "firstName"
  },
  {
    "title": "lastName",
    "key": "lastName",
    "dataIndex": "lastName"
  }
].concat((selectedPerson === null) ? [] : [
        {
            "title": "actions",
            "key": "actions",
            "dataIndex": "actions"
        }])

    const [error, setError] = useState<Error | null>(null)

    const { data, loading, error: queryError } = useSearchPersonQuery(
        {
            variables: {
                cond: (filterStr && filterStr !== 'undefined' && selectedPerson !== null ) ? `it.${extractParamName(filterStr)}.id=='${extractParamValue(filterStr)}'` : null
            }
        })

    const elemList = data?.searchPerson.elems

    const mapToView = (list: typeof elemList) => {
        return (
            list?.map(elem => {
                return {
                    key: elem.id ?? "",
          actions: <Space>
            <Link to={`/PersonAgg/Person/Update/${elem.id}`}>Update</Link>
            <Link to={`/PersonAgg/Person/Delete/${elem.id}`}>Delete</Link>
          </Space>,
          id: elem.id,
                    birthDate: elem.birthDate,
                    firstName: elem.firstName,
                    lastName: elem.lastName,

                }
            })
        )
    }

    if (loading) return (<Spin tip="Loading..." />);
    if (queryError) {
        return (<ErrorModal error={queryError} setError={setError} />)
    } else {
    
        client.refetchQueries({include:["searchPerson"]})
        return (
            <Space direction='vertical'>
                {selectedPerson === undefined && <Button
                    onClick={() => {
                        navigate(`/PersonAgg/Person/Create/${filterStr}`)
                    }}
                >
                    Create
                </Button>}
        
                <Table
                    columns={columns}
                    dataSource={mapToView(elemList)}
                    onRow={(record) => ({ onClick: event => { if (setSelectedPerson) setSelectedPerson(record.id) } })}
                />
            </Space>
        )
    }
}
