import React from "react";
import {Button, Form, Input} from "antd";
import {UserOutlined} from "@ant-design/icons";
import useSignIn from "./useSignIn";

export const SignIn: React.FC = () => {
    const [form] = Form.useForm();
    const onFinish = useSignIn()
    return (
        <Form
            form={form}
            labelCol={{span: 6}}
            wrapperCol={{span: 14}}
            onFinish={onFinish}
        >
            <Form.Item
                label={'Имя'}
                name={'name'}
                required
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите имя',
                    },
                    {
                        min: 3,
                        message: 'Длина имени должна быть минимум 3 символа'
                    },
                    {
                        max: 12,
                        message: 'Длина имени должна быть максимум 12 символов'
                    },
                ]}
            >
                <Input
                    size={"large"}
                    type={'text'}
                    placeholder={'Пример: Ivan'}
                    prefix={<UserOutlined/>}
                />
            </Form.Item>
            <Form.Item wrapperCol={{
                span: 16,
                offset: 9,
            }}>
                <Button
                    type={'primary'}
                    htmlType={'submit'}
                >
                    Продолжить
                </Button>
            </Form.Item>
        </Form>
    )
}