import React from "react";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AuthLayout: React.FC = () => {
    const location = useLocation()
    const isAuthed = useAuth()
    if (!isAuthed) {
        return <Navigate to={'/'} state={{from: location}} replace/>
    }
    return <Outlet/>
}

export default AuthLayout