import React from "react";
import {Button, Card, Col, Row} from "antd";
import PostsList from "../PostsList";
import useSelectProfileInfo from "./useSelectProfileInfo";
import PostForm from "./components/PostForm";
import Subscribe from "./components/Subscribe";
import SignOut from "../Auth/SignOut";
import {useNavigate} from "react-router-dom";
import ProfileHeading from "./components/ProfileHeading";

export const Profile: React.FC = () => {
    const [posts, profile, isLoggedUser] = useSelectProfileInfo()
    const navigate = useNavigate()
    return (
        <Card title={<ProfileHeading profile={profile}/>}>
            <Row justify={"center"}>
                {isLoggedUser && (
                    <Row gutter={16}>
                        <Col span={12}><PostForm/></Col>
                        <Col span={12}><SignOut/></Col>
                    </Row>
                )}
                {!isLoggedUser && <Subscribe/>}
            </Row>
            <PostsList posts={posts}/>
            <Row justify={"center"}>
                <Button onClick={() => navigate('/posts')}>В ленту</Button>
            </Row>
        </Card>
    )
}