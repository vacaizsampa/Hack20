
import React, { FC, useEffect, useState } from 'react';

import { Button, Space, Spin } from 'antd';

import ErrorModal from '../../../basic/ErrorModal';
import { useDeleteVolonteerMutation } from '../../../../__generate/graphql-frontend'
import { useNavigate, useParams } from 'react-router'

export const VolonteerDelete: FC = () => {

    const navigate = useNavigate();

    const { volonteerId } = useParams()

    const [deleteVolonteerMutation, { error: errorDelete, data: dataDelete, loading: loadingDelete }] = useDeleteVolonteerMutation()

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
                <>{`Delete Volonteer with ID:${volonteerId}?`}</>
                <Space>
                    <Button type="primary" htmlType="submit"
                        onClick={() => {
                            if (volonteerId)
                                deleteVolonteerMutation({ variables: { id: volonteerId } }).then(() => {
                                    navigate("/VolonteerAgg/Volonteer/List")
                                })
                        }}
                    >
                        OK
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/VolonteerAgg/Volonteer/List")
                        }}
                    >
                        Cancel
                    </Button>
                </Space>
            </Space>
        </>
    )
}