import React from "react";
import IUser from "../../../../store/slices/interfaces/IUser";
import {Typography} from "antd";
import {Link, useParams} from "react-router-dom";

export const ProfileHeading: React.FC<{ profile: IUser }> = ({profile}) => {
    const {profileId} = useParams()
    return <Typography.Title level={5}>
        <Link to={
            !!profileId
                ? '#'
                : '/change-name'
        }>
            {profile.name}
        </Link>, кол-во подписок: <Link to={`info?type=subscribes`}>
        {profile.subscribes.length}
    </Link>, кол-во подписчиков: <Link to={`info?type=subscribers`}>{profile.subscribers.length}</Link>
    </Typography.Title>
}