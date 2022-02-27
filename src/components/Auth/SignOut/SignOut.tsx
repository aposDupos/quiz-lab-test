import React from "react";
import useSignOut from "./useSignOut";
import {Button} from 'antd';


export const SignOut: React.FC = () => {
    const onClick = useSignOut()
    return (
        <Button onClick={onClick}>Выйти из аккаунта</Button>
    )
}