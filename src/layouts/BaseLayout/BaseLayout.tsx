import React from "react";
import {Layout, Row, Col} from "antd";
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar";

const {Content, Footer} = Layout
const BaseLayout: React.FC = () => {
    return (
        <Layout style={{height: '100vh'}}>
            <NavBar/>
            <Content style={{
                padding: '64px',
                width: '100%', height: '100%'
            }}>
                <Row style={{height: '100%'}} align={'middle'} justify={'center'}>
                    <Col span={24}>
                        <Outlet/>
                    </Col>
                </Row>
            </Content>
            <Footer>
                2022
            </Footer>
        </Layout>
    )
}
export default BaseLayout