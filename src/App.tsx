import React from 'react';
import {Route, Routes} from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import AuthLayout from "./layouts/AuthLayout";
import {AuthPage, ChangeNamePage, InfoPage} from "./pages";
import routes from "./utils/routes";

const App: React.FC = () => {
    return (
        <Routes>
            <Route element={<BaseLayout/>}>
                <Route index element={<AuthPage/>}/>
                <Route element={<AuthLayout/>}>
                    <Route element={routes.posts.element} path={routes.posts.path}/>
                    <Route path={routes.profile.path}>
                        <Route index element={routes.profile.element}/>
                        <Route element={<InfoPage/>} path={'info'}/>
                        <Route path={':profileId'}>
                            <Route index element={routes.profile.element}/>
                            <Route element={<InfoPage/>} path={'info'}/>
                        </Route>
                    </Route>
                    <Route element={<ChangeNamePage/>} path={'change-name'}/>
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
