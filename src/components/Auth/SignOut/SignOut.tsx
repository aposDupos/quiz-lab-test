import React from "react";
import useSignOut from "./useSignOut";
import {Button, Col, Row, Typography} from 'antd';
import useSelectUser from "../../../hooks/useSelectUser";

const {Title} = Typography

export const SignOut: React.FC = () => {
    const onClick = useSignOut()
    const {name} = useSelectUser()
    return (
        <Row justify={'center'} gutter={10}>
            <Col>
            <Title level={2}>Привет, {name}</Title>
            <Button onClick={onClick}>Выйти из аккаунта</Button>
            </Col>
        </Row>
    )
}