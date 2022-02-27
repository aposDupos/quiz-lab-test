import React from "react";
import {Card} from "antd";
import RadioFilter from "./components/RadioFilter";
import useSelectPosts from "./useSelectPosts";
import PostsList from "../PostsList";
import './Posts.scss'

export const Posts: React.FC = () => {
    const posts = useSelectPosts()
    return (
        <Card>
            <RadioFilter/>
            <PostsList posts={posts}/>
        </Card>
    )
}