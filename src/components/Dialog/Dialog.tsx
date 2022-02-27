import React from "react";
import {Button, Modal} from "antd";

interface IModalProps {
    buttonText: string
    modalTitle: string
    showModal: () => void
    children: React.ReactNode
    onOk: () => void;
    visible: boolean;
    onCancel: () => void;
}

export const Dialog: React.FC<IModalProps> = (props) => {
    const {
        buttonText,
        modalTitle,
        showModal,
        children,
        ...rest
    } = props
    return (
        <>
            <Button
                type={'primary'}
                onClick={showModal}
            >
                {buttonText}
            </Button>
            <Modal
                title={modalTitle}
                okText={'Создать'}
                {...rest}
            >
                {children}
            </Modal>
        </>
    )
}