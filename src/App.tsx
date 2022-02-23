import React from 'react';
import {Route, Routes} from "react-router-dom";
import routes from "./utils/routes/routes";
import BaseLayout from "./layouts/BaseLayout/BaseLayout";

function App() {
    return (
        <Routes>
            <Route element={<BaseLayout/>}>
                {
                    routes.map(({path, element}) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))
                }
            </Route>
        </Routes>
    );
}

export default App;
