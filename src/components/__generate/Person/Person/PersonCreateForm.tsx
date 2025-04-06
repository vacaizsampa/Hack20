
import React, { FC, useState } from 'react';

import { DatePicker, Checkbox, Form, Input, Select, Space, Button, Modal  } from 'antd';
const { Option } = Select

import { InputParameters } from './PersonCreate';
import moment from 'moment';


interface FormProps{
    inputParameters: InputParameters
    changeInputParameters: (input: InputParameters) => void
}

export const PersonCreateForm: FC<FormProps> = ({ inputParameters, changeInputParameters }) => {



    return (
        <>
            <Form>

            <Form.Item label="birthDate">
                <DatePicker
                    value={inputParameters.birthDate ? moment(inputParameters.birthDate, "YYYY-MM-DD") : null}
                    onChange={moment => changeInputParameters({ birthDate: moment?.format("YYYY-MM-DD") })}
                    format="YYYY-MM-DD"
                />
            </Form.Item>
            <Form.Item label="firstName">
                <Input
                    value={inputParameters.firstName!}
                    onChange={e => changeInputParameters({ firstName: e.target.value })}
                />
            </Form.Item>
            <Form.Item label="lastName">
                <Input
                    value={inputParameters.lastName!}
                    onChange={e => changeInputParameters({ lastName: e.target.value })}
                />
            </Form.Item>
            </Form>

        </>
    )
}