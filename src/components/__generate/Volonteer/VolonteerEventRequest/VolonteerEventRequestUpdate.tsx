
import React, { FC, useEffect, useState } from 'react';

import { Button, Space, Spin } from 'antd';

import ErrorModal from '../../../basic/ErrorModal';

import { VolonteerEventRequestAttributesFragment, _UpdateVolonteerEventRequestInput, useGetForUpdateVolonteerEventRequestMutation, useUpdateVolonteerEventRequestMutation } from '../../../../__generate/graphql-frontend'
import { VolonteerEventRequestUpdateForm } from './VolonteerEventRequestUpdateForm';

import { useParams, useNavigate, Outlet } from 'react-router'


export type InputParameters = Partial<_UpdateVolonteerEventRequestInput>

function mapToInput(data: VolonteerEventRequestAttributesFragment): InputParameters {
    return {

        description: data.description,
        event: {entityId: data.event.entityId!},
        id: data.id,
        volonteer: data.volonteer?.id,
    }
}

export const VolonteerEventRequestUpdate: FC = () => {

    const navigate = useNavigate();

    const { volonteerEventRequestId } = useParams()

    const [getVolonteerEventRequestMutation, { data: dataGet, loading: loadingGet, error: errorGet }] = useGetForUpdateVolonteerEventRequestMutation()
    useEffect(() => {
        if (volonteerEventRequestId)
            getVolonteerEventRequestMutation({ variables: { id: volonteerEventRequestId } })
    }, [])

    const volonteerEventRequestData = dataGet?.packet?.getVolonteerEventRequest
    useEffect(() => {
        if (volonteerEventRequestData)
            setInputParameters(mapToInput(volonteerEventRequestData))
    }, [volonteerEventRequestData])

    const [updateVolonteerEventRequestMutation, { error: errorUpdate, data: dataUpdate, loading: loadingUpdate }] = useUpdateVolonteerEventRequestMutation()

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
                <VolonteerEventRequestUpdateForm inputParameters={inputParameters} changeInputParameters={changeInputParameters}></VolonteerEventRequestUpdateForm>
                <Space>
                    <Button type="primary" htmlType="submit"
                        onClick={() => {
                            updateVolonteerEventRequestMutation({ variables: { input: Object.assign(inputParameters) as _UpdateVolonteerEventRequestInput } }).then(() => {
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