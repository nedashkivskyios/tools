import React from 'react';
import {Route, Routes} from "react-router-dom";
import TemporaryMain from "../TemporaryMain";

const Root = () => {
    return (
        <Routes>
            <Route path="*" element={<TemporaryMain />}/>
        </Routes>
    );
};

export default Root;