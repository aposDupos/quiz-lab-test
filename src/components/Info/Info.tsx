import React from "react";
import {Badge, List} from "antd";
import useSelectInfo from "./useSelectInfo";
import {Link} from "react-router-dom";
import {useGoBack} from "../../hooks";

export const Info: React.FC = () => {
    const [type, users] = useSelectInfo()
    const goBack = useGoBack()
    return (
        <Badge.Ribbon text={type === 'subscribes' ? 'Подписки' : 'Подписчики'}>
            <List
                header={<Link to={'#'} onClick={goBack}>Назад</Link>}
                bordered
                dataSource={users}
                renderItem={item => (
                    <List.Item key={item.id}>
                        <Link to={`/profile/${item.id}`}>{item.name}</Link>
                    </List.Item>
                )}
            />
        </Badge.Ribbon>
    )
}