
import React, { FC, useEffect, useState } from 'react';

import { Button, Space, Spin } from 'antd';

import ErrorModal from '../../../basic/ErrorModal';
import { useDeleteEventMutation } from '../../../../__generate/graphql-frontend'
import { useNavigate, useParams } from 'react-router'

export const EventDelete: FC = () => {

    const navigate = useNavigate();

    const { eventId } = useParams()

    const [deleteEventMutation, { error: errorDelete, data: dataDelete, loading: loadingDelete }] = useDeleteEventMutation()

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
                <>{`Delete Event with ID:${eventId}?`}</>
                <Space>
                    <Button type="primary" htmlType="submit"
                        onClick={() => {
                            if (eventId)
                                deleteEventMutation({ variables: { id: eventId } }).then(() => {
                                    navigate("/OrganizationAgg/Event/List")
                                })
                        }}
                    >
                        OK
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/OrganizationAgg/Event/List")
                        }}
                    >
                        Cancel
                    </Button>
                </Space>
            </Space>
        </>
    )
}