
import React, { FC, useEffect, useState } from 'react';

import { Button, Space, Spin } from 'antd';

import ErrorModal from '../../../basic/ErrorModal';

import { VolonteerAttributesFragment, _UpdateVolonteerInput, useGetForUpdateVolonteerMutation, useUpdateVolonteerMutation } from '../../../../__generate/graphql-frontend'
import { VolonteerUpdateForm } from './VolonteerUpdateForm';

import { useParams, useNavigate, Outlet } from 'react-router'


export type InputParameters = Partial<_UpdateVolonteerInput>

function mapToInput(data: VolonteerAttributesFragment): InputParameters {
    return {

        id: data.id,
        nickName: data.nickName,
        person: {entityId: data.person.entityId!},
    }
}

export const VolonteerUpdate: FC = () => {

    const navigate = useNavigate();

    const { volonteerId } = useParams()

    const [getVolonteerMutation, { data: dataGet, loading: loadingGet, error: errorGet }] = useGetForUpdateVolonteerMutation()
    useEffect(() => {
        if (volonteerId)
            getVolonteerMutation({ variables: { id: volonteerId } })
    }, [])

    const volonteerData = dataGet?.packet?.getVolonteer
    useEffect(() => {
        if (volonteerData)
            setInputParameters(mapToInput(volonteerData))
    }, [volonteerData])

    const [updateVolonteerMutation, { error: errorUpdate, data: dataUpdate, loading: loadingUpdate }] = useUpdateVolonteerMutation()

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
                <VolonteerUpdateForm inputParameters={inputParameters} changeInputParameters={changeInputParameters}></VolonteerUpdateForm>
                <Space>
                    <Button type="primary" htmlType="submit"
                        onClick={() => {
                            updateVolonteerMutation({ variables: { input: Object.assign(inputParameters) as _UpdateVolonteerInput } }).then(() => {
                                navigate("/VolonteerAgg/Volonteer/List")
                            })
                        }}
                    >
                        OK
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/VolonteerAgg/Volonteer/List")
                        }}
                    >
                        Cancel
                    </Button>
                </Space>
            </Space>
        </>
    )
}