import React from "react";
import {Space, Typography} from "antd";
import useAppSelector from "../../../hooks/useAppSelector";
import {selectAllUsers} from "../../../store/slices/usersSlice";
import {Link} from 'react-router-dom'
export const Likes: React.FC<{ likes: number[] }> = ({likes}) => {
    const users = useAppSelector(selectAllUsers)
    return (
        <Space>
            <Typography.Text>
                Понравилось:
                {
                    users
                        .filter(user => likes.includes(user.id))
                        .map(user => <Link to={`/profile/${user.id}`}>{user.name}</Link>)
                }
            </Typography.Text>
        </Space>
    )
}