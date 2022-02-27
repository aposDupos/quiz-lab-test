import React from "react";
import {Layout, Row, Col} from "antd";
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar";

const {Content, Footer} = Layout

export const BaseLayout: React.FC = () => {
    return (
        <Layout style={{minHeight: '100vh'}}>
            <NavBar/>
            <Content style={{
                padding: '64px',
                width: '100%',
            }}>
                <Row justify={'center'}>
                    <Col span={16} lg={12} sm={24}>
                        <Outlet/>
                    </Col>
                </Row>
            </Content>
            <Footer>
                <Row justify={'center'}>
                2022
                </Row>
            </Footer>
        </Layout>
    )
}