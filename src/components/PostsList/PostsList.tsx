import React from "react";
import Post from "../Posts/components/Post";
import {List} from "antd";
import {IPostsList} from "./IPostsList";

export const PostsList: React.FC<IPostsList> = ({posts}) => {
    return (
        <List
            itemLayout={'vertical'}
            size={'large'}
            dataSource={posts}
            renderItem={post => <Post key={post.createdAt} id={post.id}/>}
        />
    )
}