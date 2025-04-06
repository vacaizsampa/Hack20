
import React, { FC, useEffect, useState } from 'react';

import { Button, Space, Spin } from 'antd';

import ErrorModal from '../../../basic/ErrorModal';

import { _CreatePersonInput, useCreatePersonMutation } from '../../../../__generate/graphql-frontend'
import { PersonCreateForm } from './PersonCreateForm';

import { useNavigate, useParams } from 'react-router'
import { extractParamName, extractParamValue } from '../../../../basic/Utils';

export type InputParameters = Partial<_CreatePersonInput>

export const PersonCreate: FC = () => {

    const navigate = useNavigate();

    const { filterStr } = useParams()

    const [createPersonMutation, { error: errorCreate, data: dataCreate, loading: loadingCreate }] = useCreatePersonMutation()

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
                <PersonCreateForm 
                    inputParameters={filterStr ? Object.assign(inputParameters, { [extractParamName(filterStr)]: extractParamValue(filterStr) }) : inputParameters}
                    changeInputParameters={changeInputParameters}
                ></PersonCreateForm>
                <Space>
                    <Button type="primary" htmlType="submit"
                        onClick={() => {
                            createPersonMutation({ variables: { input: Object.assign(inputParameters) as _CreatePersonInput } }).then(() => {
                                navigate("/PersonAgg/Person/List/" + (filterStr === 'undefined' ? "" : filterStr))
                            })
                        }}
                    >
                        OK
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/PersonAgg/Person/List/" + (filterStr === 'undefined' ? "" : filterStr))
                        }}
                    >
                        Cancel
                    </Button>
                </Space>
            </Space>
        </>
    )
}

