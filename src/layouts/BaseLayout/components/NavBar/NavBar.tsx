import React from "react";
import {Col, Layout, Menu, Row} from "antd";
import routes from "../../../../utils/routes/routes";
import {Link, useLocation} from "react-router-dom";

const {Header} = Layout

export const NavBar: React.FC = () => {
    const location = useLocation()
    return (
        <Header style={{background: "white"}}>
            <Row justify={'center'}>
                <Col span={16}>
                    <Menu
                        selectedKeys={[location.pathname]}
                        mode={"horizontal"}
                        style={{
                            justifyContent: "center"
                        }}
                    >
                        {
                            Object.keys(routes).map((key) => (
                                <Menu.Item
                                    key={key}
                                    icon={routes[key].icon}
                                >
                                    <Link to={routes[key].path}>{routes[key].name}</Link>
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </Col>
            </Row>
        </Header>
    )
}