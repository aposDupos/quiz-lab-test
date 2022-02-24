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
                            routes.map(({path, name, icon}) => (
                                <Menu.Item
                                    key={path}
                                    icon={icon}
                                >
                                    <Link to={path}>{name}</Link>
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </Col>
            </Row>
        </Header>
    )
}