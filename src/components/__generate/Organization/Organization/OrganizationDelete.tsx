
import React, { FC, useEffect, useState } from 'react';

import { Button, Space, Spin } from 'antd';

import ErrorModal from '../../../basic/ErrorModal';
import { useDeleteOrganizationMutation } from '../../../../__generate/graphql-frontend'
import { useNavigate, useParams } from 'react-router'

export const OrganizationDelete: FC = () => {

    const navigate = useNavigate();

    const { organizationId } = useParams()

    const [deleteOrganizationMutation, { error: errorDelete, data: dataDelete, loading: loadingDelete }] = useDeleteOrganizationMutation()

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
                <>{`Delete Organization with ID:${organizationId}?`}</>
                <Space>
                    <Button type="primary" htmlType="submit"
                        onClick={() => {
                            if (organizationId)
                                deleteOrganizationMutation({ variables: { id: organizationId } }).then(() => {
                                    navigate("/OrganizationAgg/Organization/List")
                                })
                        }}
                    >
                        OK
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/OrganizationAgg/Organization/List")
                        }}
                    >
                        Cancel
                    </Button>
                </Space>
            </Space>
        </>
    )
}