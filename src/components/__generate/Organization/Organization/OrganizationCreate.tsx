
import React, { FC, useEffect, useState } from 'react';

import { Button, Space, Spin } from 'antd';

import ErrorModal from '../../../basic/ErrorModal';

import { _CreateOrganizationInput, useCreateOrganizationMutation } from '../../../../__generate/graphql-frontend'
import { OrganizationCreateForm } from './OrganizationCreateForm';

import { useNavigate, useParams } from 'react-router'
import { extractParamName, extractParamValue } from '../../../../basic/Utils';

export type InputParameters = Partial<_CreateOrganizationInput>

export const OrganizationCreate: FC = () => {

    const navigate = useNavigate();

    const { filterStr } = useParams()

    const [createOrganizationMutation, { error: errorCreate, data: dataCreate, loading: loadingCreate }] = useCreateOrganizationMutation()

    const [inputParameters, setInputParameters] = useState<InputParameters>({})
    const changeInputParameters = (params: InputParameters) => {
        var input = { ...inputParameters }
        setInputParameters(Object.assign(input, params))
    }

    const [error, setError] = useState<Error | null>(null)
    useEffect(() => {
        const err = [errorCreate].find(e => e)
        if (err) {
            setError(err)
        }

    }, [errorCreate])


    if (loadingCreate) return (<Spin>Loading...</Spin>)
    if (error) return (<ErrorModal error={error} setError={setError} />)

    return (
        <>
            <Space direction='vertical'>
                <OrganizationCreateForm 
                    inputParameters={filterStr ? Object.assign(inputParameters, { [extractParamName(filterStr)]: extractParamValue(filterStr) }) : inputParameters}
                    changeInputParameters={changeInputParameters}
                ></OrganizationCreateForm>
                <Space>
                    <Button type="primary" htmlType="submit"
                        onClick={() => {
                            createOrganizationMutation({ variables: { input: Object.assign(inputParameters) as _CreateOrganizationInput } }).then(() => {
                                navigate("/OrganizationAgg/Organization/List/" + (filterStr === 'undefined' ? "" : filterStr))
                            })
                        }}
                    >
                        OK
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/OrganizationAgg/Organization/List/" + (filterStr === 'undefined' ? "" : filterStr))
                        }}
                    >
                        Cancel
                    </Button>
                </Space>
            </Space>
        </>
    )
}

