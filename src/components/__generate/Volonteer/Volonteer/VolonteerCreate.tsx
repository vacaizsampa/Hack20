
import React, { FC, useEffect, useState } from 'react';

import { Button, Space, Spin } from 'antd';

import ErrorModal from '../../../basic/ErrorModal';

import { _CreateVolonteerInput, useCreateVolonteerMutation } from '../../../../__generate/graphql-frontend'
import { VolonteerCreateForm } from './VolonteerCreateForm';

import { useNavigate, useParams } from 'react-router'
import { extractParamName, extractParamValue } from '../../../../basic/Utils';

export type InputParameters = Partial<_CreateVolonteerInput>

export const VolonteerCreate: FC = () => {

    const navigate = useNavigate();

    const { filterStr } = useParams()

    const [createVolonteerMutation, { error: errorCreate, data: dataCreate, loading: loadingCreate }] = useCreateVolonteerMutation()

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
                <VolonteerCreateForm 
                    inputParameters={filterStr ? Object.assign(inputParameters, { [extractParamName(filterStr)]: extractParamValue(filterStr) }) : inputParameters}
                    changeInputParameters={changeInputParameters}
                ></VolonteerCreateForm>
                <Space>
                    <Button type="primary" htmlType="submit"
                        onClick={() => {
                            createVolonteerMutation({ variables: { input: Object.assign(inputParameters) as _CreateVolonteerInput } }).then(() => {
                                navigate("/VolonteerAgg/Volonteer/List/" + (filterStr === 'undefined' ? "" : filterStr))
                            })
                        }}
                    >
                        OK
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/VolonteerAgg/Volonteer/List/" + (filterStr === 'undefined' ? "" : filterStr))
                        }}
                    >
                        Cancel
                    </Button>
                </Space>
            </Space>
        </>
    )
}

