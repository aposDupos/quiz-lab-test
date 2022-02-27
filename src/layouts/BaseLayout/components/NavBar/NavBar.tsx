import React from "react";
import {Col, Layout, Menu, Row} from "antd";
import {Link, useLocation} from "react-router-dom";
import routes from "../../../../utils/routes";

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
                        style={{justifyContent: "center"}}
                    >
                        {
                            Object.keys(routes).map((key) => {
                                const route = routes[key]
                                return <Menu.Item
                                    key={route.path}
                                    icon={route.icon}
                                >
                                    <Link to={route.path}>
                                        {route.name}
                                    </Link>
                                </Menu.Item>
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </Header>
    )
}