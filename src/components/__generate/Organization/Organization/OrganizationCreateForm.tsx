
import React, { FC, useState } from 'react';

import { DatePicker, Checkbox, Form, Input, Select, Space, Button, Modal  } from 'antd';
const { Option } = Select

import { InputParameters } from './OrganizationCreate';
import moment from 'moment';


interface FormProps{
    inputParameters: InputParameters
    changeInputParameters: (input: InputParameters) => void
}

export const OrganizationCreateForm: FC<FormProps> = ({ inputParameters, changeInputParameters }) => {



    return (
        <>
            <Form>

            <Form.Item label="name">
                <Input
                    value={inputParameters.name!}
                    onChange={e => changeInputParameters({ name: e.target.value })}
                />
            </Form.Item>
            </Form>

        </>
    )
}