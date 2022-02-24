import React from "react";
import SignIn from "../components/Auth/SignIn";
import SignOut from "../components/Auth/SignOut";
import useAuth from "../hooks/useAuth";
import {Col, Row} from "antd";

const AuthPage: React.FC = () => {
    const isAuthed = useAuth()

    return (
        <Row justify={'center'}>
            <Col span={12}>
                {isAuthed ? <SignOut/> : <SignIn/>}
            </Col>
        </Row>
    )
}
export default AuthPage