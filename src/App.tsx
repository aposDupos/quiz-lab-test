import React from 'react';
import {Route, Routes} from "react-router-dom";
import routes from "./utils/routes/routes";
import BaseLayout from "./layouts/BaseLayout/BaseLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import AuthPage from "./pages/AuthPage";

function App() {
    return (
        <Routes>
            <Route element={<BaseLayout/>}>
                <Route index element={<AuthPage/>}/>
                <Route element={<AuthLayout/>}>
                    {
                        routes
                            .filter(({path}) => path !== '/')
                            .map(({path, element}) => (
                                <Route
                                    key={path}
                                    path={path}
                                    element={element}
                                />
                            ))
                    }
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
