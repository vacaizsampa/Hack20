
import React, { FC, useEffect, useState } from 'react';

import { Button, Space, Spin } from 'antd';

import ErrorModal from '../../../basic/ErrorModal';

import { OrganizationAttributesFragment, _UpdateOrganizationInput, useGetForUpdateOrganizationMutation, useUpdateOrganizationMutation } from '../../../../__generate/graphql-frontend'
import { OrganizationUpdateForm } from './OrganizationUpdateForm';

import { useParams, useNavigate, Outlet } from 'react-router'


export type InputParameters = Partial<_UpdateOrganizationInput>

function mapToInput(data: OrganizationAttributesFragment): InputParameters {
    return {

        id: data.id,
        name: data.name,
    }
}

export const OrganizationUpdate: FC = () => {

    const navigate = useNavigate();

    const { organizationId } = useParams()

    const [getOrganizationMutation, { data: dataGet, loading: loadingGet, error: errorGet }] = useGetForUpdateOrganizationMutation()
    useEffect(() => {
        if (organizationId)
            getOrganizationMutation({ variables: { id: organizationId } })
    }, [])

    const organizationData = dataGet?.packet?.getOrganization
    useEffect(() => {
        if (organizationData)
            setInputParameters(mapToInput(organizationData))
    }, [organizationData])

    const [updateOrganizationMutation, { error: errorUpdate, data: dataUpdate, loading: loadingUpdate }] = useUpdateOrganizationMutation()

    const [inputParameters, setInputParameters] = useState<InputParameters>({})
    const changeInputParameters = (params: InputParameters) => {
        var input = { ...inputParameters }
        setInputParameters(Object.assign(input, params))
    }

    const [error, setError] = useState<Error | null>(null)
    useEffect(() => {
        const err = [errorGet, errorUpdate].find(e => e)
        if (err) {
            setError(err)
        }

    }, [errorGet, errorUpdate])


    if (loadingGet || loadingUpdate) return (<Spin tip="Loading..." />);
    if (error) return (<ErrorModal error={error} setError={setError} />)

    return (
        <>
            <Space direction='vertical'>
                <OrganizationUpdateForm inputParameters={inputParameters} changeInputParameters={changeInputParameters}></OrganizationUpdateForm>
                <Space>
                    <Button type="primary" htmlType="submit"
                        onClick={() => {
                            updateOrganizationMutation({ variables: { input: Object.assign(inputParameters) as _UpdateOrganizationInput } }).then(() => {
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