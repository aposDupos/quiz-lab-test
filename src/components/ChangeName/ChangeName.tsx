import React from "react";
import InputNameContainer from "../InputNameContainer";
import useChangeName from "./useChangeName";

export const ChangeName: React.FC = () => {
    const onFinish = useChangeName()
    return <InputNameContainer onFinish={onFinish}/>
}