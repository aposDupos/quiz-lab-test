import React from 'react';
import {Route, Routes} from "react-router-dom";
import routes from "./utils/routes/routes";
import BaseLayout from "./layouts/BaseLayout/BaseLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import AuthPage from "./pages/AuthPage";

const App: React.FC = () => {
    return (
        <Routes>
            <Route element={<BaseLayout/>}>
                <Route index element={<AuthPage/>}/>
                <Route element={<AuthLayout/>}>
                    <Route element={routes.posts.element} path={routes.posts.path}/>
                    <Route element={routes.profile.element} path={routes.profile.path}>
                        <Route element={routes.profile.element} path={':profileId'}/>
                    </Route>
                    <Route element={routes.subscribes.element} path={routes.subscribes.path}/>
                </Route>
                <Route
                    path={"*"}
                    element={
                        <p>Здесь ничего нет</p>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
