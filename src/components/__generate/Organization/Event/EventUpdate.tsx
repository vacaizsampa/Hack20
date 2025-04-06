
import React, { FC, useEffect, useState } from 'react';

import { Button, Space, Spin } from 'antd';

import ErrorModal from '../../../basic/ErrorModal';

import { EventAttributesFragment, _UpdateEventInput, useGetForUpdateEventMutation, useUpdateEventMutation } from '../../../../__generate/graphql-frontend'
import { EventUpdateForm } from './EventUpdateForm';

import { useParams, useNavigate, Outlet } from 'react-router'


export type InputParameters = Partial<_UpdateEventInput>

function mapToInput(data: EventAttributesFragment): InputParameters {
    return {

        description: data.description,
        id: data.id,
        organization: data.organization?.id,
    }
}

export const EventUpdate: FC = () => {

    const navigate = useNavigate();

    const { eventId } = useParams()

    const [getEventMutation, { data: dataGet, loading: loadingGet, error: errorGet }] = useGetForUpdateEventMutation()
    useEffect(() => {
        if (eventId)
            getEventMutation({ variables: { id: eventId } })
    }, [])

    const eventData = dataGet?.packet?.getEvent
    useEffect(() => {
        if (eventData)
            setInputParameters(mapToInput(eventData))
    }, [eventData])

    const [updateEventMutation, { error: errorUpdate, data: dataUpdate, loading: loadingUpdate }] = useUpdateEventMutation()

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
                <EventUpdateForm inputParameters={inputParameters} changeInputParameters={changeInputParameters}></EventUpdateForm>
                <Space>
                    <Button type="primary" htmlType="submit"
                        onClick={() => {
                            updateEventMutation({ variables: { input: Object.assign(inputParameters) as _UpdateEventInput } }).then(() => {
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