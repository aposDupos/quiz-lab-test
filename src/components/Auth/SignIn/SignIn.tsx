import React from "react";
import useSignIn from "./useSignIn";
import InputNameContainer from "../../InputNameContainer";

export const SignIn: React.FC = () => {

    const onFinish = useSignIn()
    return <InputNameContainer onFinish={onFinish}/>
}