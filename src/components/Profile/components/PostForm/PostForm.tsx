import React from "react";
import {Form, Input} from "antd";
import {useModalForm} from "sunflower-antd";
import Dialog from "../../../Dialog";
import useFormSubmit from "./useFormSubmit";

export const PostForm: React.FC = () => {
    const [form] = Form.useForm();
    const submitHandler = useFormSubmit()
    const {
        modalProps,
        formProps,
        show,
        formLoading,
        formValues,
        formResult,
    } = useModalForm({
        defaultVisible: false,
        autoSubmitClose: true,
        autoResetForm: true,
        submit({text}) {
            submitHandler(text)
        },
        form,
    });
    return (
        <Dialog
            modalTitle={'Добавить новость'}
            buttonText={'Добавить новость'}
            showModal={show}
            {...modalProps}
        >
            <Form
                {...formProps}
            >
                <Form.Item
                    label={'Описание'}
                    name={'text'}
                    rules={[
                        {
                            required: true,
                            message: 'Введите описание новости!'
                        },
                        {
                            min: 10,
                            message: 'Минимальная длина описания 10 символов!'
                        }
                    ]}
                >
                    <Input.TextArea rows={4}/>
                </Form.Item>
            </Form>
        </Dialog>

    )
}