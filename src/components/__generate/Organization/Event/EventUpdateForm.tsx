
import React, { FC, useState } from 'react';

import { DatePicker, Checkbox, Form, Input, Select, Space, Button, Modal  } from 'antd';
const { Option } = Select

import { InputParameters } from './EventUpdate';
import moment from 'moment';
import { OrganizationList } from '../../Organization/Organization/OrganizationList';

interface FormProps{
    inputParameters: InputParameters
    changeInputParameters: (input: InputParameters) => void
}

export const EventUpdateForm: FC<FormProps> = ({ inputParameters, changeInputParameters }) => {


    const [selectedOrganizationId, setSelectedOrganizationId] = useState<string | undefined | null>()
    if (selectedOrganizationId) {
        changeInputParameters({ organization: selectedOrganizationId })
        setSelectedOrganizationId(undefined)
    }

    return (
        <>
            <Form>

            <Form.Item label="description">
                <Input
                    value={inputParameters.description!}
                    onChange={e => changeInputParameters({ description: e.target.value })}
                />
            </Form.Item>
            <Form.Item label="endDateTime">
                <DatePicker
                    showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                    value={inputParameters.endDateTime ? moment(inputParameters.endDateTime, "YYYY-MM-DD HH:mm:ss") : null}
                    onChange={moment => changeInputParameters({ endDateTime: moment?.format("YYYY-MM-DDTHH:mm:ss") })}
                    format="YYYY-MM-DD HH:mm:ss"
                />
            </Form.Item>
            <Form.Item label="id">
                <Input
                    value={inputParameters.id!}
                    onChange={e => changeInputParameters({ id: e.target.value })}
                />
            </Form.Item>
            <Form.Item label="organization">
                <Space>
                    <Input
                        value={inputParameters.organization}
                        onChange={e => changeInputParameters({ organization: e.target.value})}
                    />
                    <Button onClick={() => setSelectedOrganizationId(null)}>{"..."}</Button>
                </Space>
            </Form.Item>
            <Form.Item label="startDateTime">
                <DatePicker
                    showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                    value={inputParameters.startDateTime ? moment(inputParameters.startDateTime, "YYYY-MM-DD HH:mm:ss") : null}
                    onChange={moment => changeInputParameters({ startDateTime: moment?.format("YYYY-MM-DDTHH:mm:ss") })}
                    format="YYYY-MM-DD HH:mm:ss"
                />
            </Form.Item>
            </Form>

    <Modal
        visible = { selectedOrganizationId === null}
        footer = { null}
        width = "90%"
        onCancel = {() => setSelectedOrganizationId(undefined)}
    >
        <OrganizationList selectedOrganization={selectedOrganizationId } setSelectedOrganization={setSelectedOrganizationId }> </OrganizationList>
    </Modal>
        </>
    )
}