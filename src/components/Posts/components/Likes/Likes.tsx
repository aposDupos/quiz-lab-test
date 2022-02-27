import React from "react";
import {Space, Typography} from "antd";
import {ILikesProps} from "./ILikesProps";
import useGetLikes from "./useGetLikes";

export const Likes: React.FC<ILikesProps> = ({likes}) => {
    const names = useGetLikes(likes)
    return (
        <Space>
            <Typography.Text>
                Понравилось: {names}
            </Typography.Text>
        </Space>
    )
}