import React from "react";
import {Card, Col, List, Row} from "antd";
import './Posts.scss'
import RadioFilter from "./RadioFilter";
import useSelectPosts from "./useSelectPosts";
import Post from "./Post";

export const Posts: React.FC = () => {
    const posts = useSelectPosts()
    return (
        <Row justify={'center'}>
            <Col span={12}>
                <Card>
                    <RadioFilter/>
                    <List
                        itemLayout={'vertical'}
                        size={'large'}
                        dataSource={posts}
                        renderItem={post => <Post key={post.id} id={post.id}/>}
                    />
                </Card>
            </Col>
        </Row>
    )
}