import React from "react";
import SignOut from "./SignOut";
import SignIn from "./SignIn";
import useAuth from "../../hooks/useAuth";

export const Auth = () => {
    const isAuthed = useAuth()
    return (
        <>
            {isAuthed ? <SignOut/> : <SignIn/>}
        </>
    )
}