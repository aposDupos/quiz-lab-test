import React from "react";
import {Button, List} from "antd";
import {LikeOutlined} from "@ant-design/icons";
import useGetPostInfo from "../Like/useGetPostInfo";
import Likes from "../Like";

interface IPostProps {
    id: number
}

export const Post: React.FC<IPostProps> = ({id}) => {
    const [post, postAuthor, onClick] = useGetPostInfo(id)

    return (
        <List.Item
            actions={[
                <Likes likes={post.likes}/>
            ]}
            extra={
                <Button
                    icon={<LikeOutlined/>}
                    shape={'circle'}
                    onClick={onClick}
                />
            }
        >
            <List.Item.Meta
                title={postAuthor?.name || 'Пользователь'}
            />
            {post.text}

        </List.Item>
    )
}