
import React, { FC, useEffect, useState } from 'react';

import { Button, Space, Spin } from 'antd';

import ErrorModal from '../../../basic/ErrorModal';
import { useDeleteVolonteerEventRequestMutation } from '../../../../__generate/graphql-frontend'
import { useNavigate, useParams } from 'react-router'

export const VolonteerEventRequestDelete: FC = () => {

    const navigate = useNavigate();

    const { volonteerEventRequestId } = useParams()

    const [deleteVolonteerEventRequestMutation, { error: errorDelete, data: dataDelete, loading: loadingDelete }] = useDeleteVolonteerEventRequestMutation()

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
                <>{`Delete VolonteerEventRequest with ID:${volonteerEventRequestId}?`}</>
                <Space>
                    <Button type="primary" htmlType="submit"
                        onClick={() => {
                            if (volonteerEventRequestId)
                                deleteVolonteerEventRequestMutation({ variables: { id: volonteerEventRequestId } }).then(() => {
                                    navigate("/VolonteerAgg/VolonteerEventRequest/List")
                                })
                        }}
                    >
                        OK
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/VolonteerAgg/VolonteerEventRequest/List")
                        }}
                    >
                        Cancel
                    </Button>
                </Space>
            </Space>
        </>
    )
}