
import React, { FC, useState } from 'react';

import { DatePicker, Checkbox, Form, Input, Select, Space, Button, Modal  } from 'antd';
const { Option } = Select

import { InputParameters } from './VolonteerEventRequestCreate';
import moment from 'moment';
import { EventList } from '../../Organization/Event/EventList';import { VolonteerList } from '../../Volonteer/Volonteer/VolonteerList';

interface FormProps{
    inputParameters: InputParameters
    changeInputParameters: (input: InputParameters) => void
}

export const VolonteerEventRequestCreateForm: FC<FormProps> = ({ inputParameters, changeInputParameters }) => {


    const [selectedEventId, setSelectedEventId] = useState<string | undefined | null>()
    if (selectedEventId) {
        changeInputParameters({ event: { entityId: selectedEventId } })
        setSelectedEventId(undefined)
    }
    const [selectedVolonteerId, setSelectedVolonteerId] = useState<string | undefined | null>()
    if (selectedVolonteerId) {
        changeInputParameters({ volonteer: selectedVolonteerId })
        setSelectedVolonteerId(undefined)
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
            <Form.Item label="event">
                <Space>
                    <Input
                        value={inputParameters.event?.entityId!}
                        onChange={e => changeInputParameters({ event: { entityId: e.target.value }})}
                    />
                    <Button onClick={() => setSelectedEventId(null)}>{"..."}</Button>
                </Space>
            </Form.Item>
            <Form.Item label="volonteer">
                <Space>
                    <Input
                        value={inputParameters.volonteer}
                        onChange={e => changeInputParameters({ volonteer: e.target.value})}
                    />
                    <Button onClick={() => setSelectedVolonteerId(null)}>{"..."}</Button>
                </Space>
            </Form.Item>
            </Form>

    <Modal
        visible = { selectedEventId === null}
        footer = { null}
        width = "90%"
        onCancel = {() => setSelectedEventId(undefined)}
    >
        <EventList selectedEvent={selectedEventId } setSelectedEvent={setSelectedEventId }> </EventList>
    </Modal>
    <Modal
        visible = { selectedVolonteerId === null}
        footer = { null}
        width = "90%"
        onCancel = {() => setSelectedVolonteerId(undefined)}
    >
        <VolonteerList selectedVolonteer={selectedVolonteerId } setSelectedVolonteer={setSelectedVolonteerId }> </VolonteerList>
    </Modal>
        </>
    )
}