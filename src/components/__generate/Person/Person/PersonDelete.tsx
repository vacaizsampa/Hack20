
import React, { FC, useEffect, useState } from 'react';

import { Button, Space, Spin } from 'antd';

import ErrorModal from '../../../basic/ErrorModal';
import { useDeletePersonMutation } from '../../../../__generate/graphql-frontend'
import { useNavigate, useParams } from 'react-router'

export const PersonDelete: FC = () => {

    const navigate = useNavigate();

    const { personId } = useParams()

    const [deletePersonMutation, { error: errorDelete, data: dataDelete, loading: loadingDelete }] = useDeletePersonMutation()

    const [error, setError] = useState<Error | null>(null)
    useEffect(() => {
        const err = [errorDelete].find(e => e)
        if (err) {
            setError(err)
        }

    }, [errorDelete])

    if (loadingDelete) return (<Spin>Loading...</Spin>)
    if (errorDelete) return (<ErrorModal error={errorDelete} setError={setError} />)

    return (
        <>
            <Space direction='vertical'>
                <>{`Delete Person with ID:${personId}?`}</>
                <Space>
                    <Button type="primary" htmlType="submit"
                        onClick={() => {
                            if (personId)
                                deletePersonMutation({ variables: { id: personId } }).then(() => {
                                    navigate("/PersonAgg/Person/List")
                                })
                        }}
                    >
                        OK
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/PersonAgg/Person/List")
                        }}
                    >
                        Cancel
                    </Button>
                </Space>
            </Space>
        </>
    )
}