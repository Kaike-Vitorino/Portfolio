import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import GojoDomain from './components/GojoDomain/GojoDomain';

import Home from "./Pages/Home"
import Cursos1 from "./Pages/Cursos"

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/" exact component={Cursos1} />
                <Route path="/gojo" element={<GojoDomain />} />
            </Switch>
        </BrowserRouter>
    );
};
