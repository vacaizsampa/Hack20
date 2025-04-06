
import React, { FC, useEffect, useState } from 'react';

import { Button, Space, Spin } from 'antd';

import ErrorModal from '../../../basic/ErrorModal';

import { _CreateVolonteerEventRequestInput, useCreateVolonteerEventRequestMutation } from '../../../../__generate/graphql-frontend'
import { VolonteerEventRequestCreateForm } from './VolonteerEventRequestCreateForm';

import { useNavigate, useParams } from 'react-router'
import { extractParamName, extractParamValue } from '../../../../basic/Utils';

export type InputParameters = Partial<_CreateVolonteerEventRequestInput>

export const VolonteerEventRequestCreate: FC = () => {

    const navigate = useNavigate();

    const { filterStr } = useParams()

    const [createVolonteerEventRequestMutation, { error: errorCreate, data: dataCreate, loading: loadingCreate }] = useCreateVolonteerEventRequestMutation()

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
                <VolonteerEventRequestCreateForm 
                    inputParameters={filterStr ? Object.assign(inputParameters, { [extractParamName(filterStr)]: extractParamValue(filterStr) }) : inputParameters}
                    changeInputParameters={changeInputParameters}
                ></VolonteerEventRequestCreateForm>
                <Space>
                    <Button type="primary" htmlType="submit"
                        onClick={() => {
                            createVolonteerEventRequestMutation({ variables: { input: Object.assign(inputParameters) as _CreateVolonteerEventRequestInput } }).then(() => {
                                navigate("/VolonteerAgg/VolonteerEventRequest/List/" + (filterStr === 'undefined' ? "" : filterStr))
                            })
                        }}
                    >
                        OK
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/VolonteerAgg/VolonteerEventRequest/List/" + (filterStr === 'undefined' ? "" : filterStr))
                        }}
                    >
                        Cancel
                    </Button>
                </Space>
            </Space>
        </>
    )
}

