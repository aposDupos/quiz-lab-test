import React from "react";
import {Button, List} from "antd";
import {LikeOutlined} from "@ant-design/icons";
import useGetPostInfo from "./useGetPostInfo";
import Likes from "../Likes";
import PostRemove from "../PostRemove";
import {Link} from "react-router-dom";
import {IPostProps} from "./IPostProps";

export const Post: React.FC<IPostProps> = ({id}) => {
    const [post, postAuthor, onClick] = useGetPostInfo(id)
    return (
        <List.Item
            actions={[
                <Likes key={'likes'} likes={post.likes}/>,
            ]}
            extra={[
                <Button
                    key={'likeButton'}
                    icon={<LikeOutlined/>}
                    shape={'circle'}
                    onClick={onClick}
                />,
                <PostRemove
                    key={'removeButton'}
                    postAuthor={post.author}
                    postId={post.id}
                />
            ]}
        >
            <List.Item.Meta
                title={<Link to={`/profile/${postAuthor.id}`}>{postAuthor?.name || 'Пользователь'}</Link>}
            />
            {post.text}

        </List.Item>
    )
}