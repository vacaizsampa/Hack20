
import React, { FC, useState } from 'react';

import { DatePicker, Checkbox, Form, Input, Select, Space, Button, Modal  } from 'antd';
const { Option } = Select

import { InputParameters } from './VolonteerCreate';
import moment from 'moment';
import { PersonList } from '../../Person/Person/PersonList';

interface FormProps{
    inputParameters: InputParameters
    changeInputParameters: (input: InputParameters) => void
}

export const VolonteerCreateForm: FC<FormProps> = ({ inputParameters, changeInputParameters }) => {


    const [selectedPersonId, setSelectedPersonId] = useState<string | undefined | null>()
    if (selectedPersonId) {
        changeInputParameters({ person: { entityId: selectedPersonId } })
        setSelectedPersonId(undefined)
    }

    return (
        <>
            <Form>

            <Form.Item label="nickName">
                <Input
                    value={inputParameters.nickName!}
                    onChange={e => changeInputParameters({ nickName: e.target.value })}
                />
            </Form.Item>
            <Form.Item label="person">
                <Space>
                    <Input
                        value={inputParameters.person?.entityId!}
                        onChange={e => changeInputParameters({ person: { entityId: e.target.value }})}
                    />
                    <Button onClick={() => setSelectedPersonId(null)}>{"..."}</Button>
                </Space>
            </Form.Item>
            </Form>

    <Modal
        visible = { selectedPersonId === null}
        footer = { null}
        width = "90%"
        onCancel = {() => setSelectedPersonId(undefined)}
    >
        <PersonList selectedPerson={selectedPersonId } setSelectedPerson={setSelectedPersonId }> </PersonList>
    </Modal>
        </>
    )
}