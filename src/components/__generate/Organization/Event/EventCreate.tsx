
import React, { FC, useEffect, useState } from 'react';

import { Button, Space, Spin } from 'antd';

import ErrorModal from '../../../basic/ErrorModal';

import { _CreateEventInput, useCreateEventMutation } from '../../../../__generate/graphql-frontend'
import { EventCreateForm } from './EventCreateForm';

import { useNavigate, useParams } from 'react-router'
import { extractParamName, extractParamValue } from '../../../../basic/Utils';

export type InputParameters = Partial<_CreateEventInput>

export const EventCreate: FC = () => {

    const navigate = useNavigate();

    const { filterStr } = useParams()

    const [createEventMutation, { error: errorCreate, data: dataCreate, loading: loadingCreate }] = useCreateEventMutation()

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
                <EventCreateForm 
                    inputParameters={filterStr ? Object.assign(inputParameters, { [extractParamName(filterStr)]: extractParamValue(filterStr) }) : inputParameters}
                    changeInputParameters={changeInputParameters}
                ></EventCreateForm>
                <Space>
                    <Button type="primary" htmlType="submit"
                        onClick={() => {
                            createEventMutation({ variables: { input: Object.assign(inputParameters) as _CreateEventInput } }).then(() => {
                                navigate("/OrganizationAgg/Event/List/" + (filterStr === 'undefined' ? "" : filterStr))
                            })
                        }}
                    >
                        OK
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/OrganizationAgg/Event/List/" + (filterStr === 'undefined' ? "" : filterStr))
                        }}
                    >
                        Cancel
                    </Button>
                </Space>
            </Space>
        </>
    )
}

