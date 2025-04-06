
import React, { FC, useEffect, useState } from 'react';

import { Button, Space, Spin } from 'antd';

import ErrorModal from '../../../basic/ErrorModal';

import { PersonAttributesFragment, _UpdatePersonInput, useGetForUpdatePersonMutation, useUpdatePersonMutation } from '../../../../__generate/graphql-frontend'
import { PersonUpdateForm } from './PersonUpdateForm';

import { useParams, useNavigate, Outlet } from 'react-router'


export type InputParameters = Partial<_UpdatePersonInput>

function mapToInput(data: PersonAttributesFragment): InputParameters {
    return {

        birthDate: data.birthDate,
        firstName: data.firstName,
        id: data.id,
        lastName: data.lastName,
    }
}

export const PersonUpdate: FC = () => {

    const navigate = useNavigate();

    const { personId } = useParams()

    const [getPersonMutation, { data: dataGet, loading: loadingGet, error: errorGet }] = useGetForUpdatePersonMutation()
    useEffect(() => {
        if (personId)
            getPersonMutation({ variables: { id: personId } })
    }, [])

    const personData = dataGet?.packet?.getPerson
    useEffect(() => {
        if (personData)
            setInputParameters(mapToInput(personData))
    }, [personData])

    const [updatePersonMutation, { error: errorUpdate, data: dataUpdate, loading: loadingUpdate }] = useUpdatePersonMutation()

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
                <PersonUpdateForm inputParameters={inputParameters} changeInputParameters={changeInputParameters}></PersonUpdateForm>
                <Space>
                    <Button type="primary" htmlType="submit"
                        onClick={() => {
                            updatePersonMutation({ variables: { input: Object.assign(inputParameters) as _UpdatePersonInput } }).then(() => {
                                navigate("/PersonAgg/Person/List")
                            })
                        }}
                    >
                        OK
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/PersonAgg/Person/List")
                        }}
                    >
                        Cancel
                    </Button>
                </Space>
            </Space>
        </>
    )
}