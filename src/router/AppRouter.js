import React from 'react';
import {Routes, Route} from 'react-router'
import Main from "../pages/main";
import Card from "../pages/card";
import Help from "../pages/help";
const AppRouter = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/:id" element={<Card/>} />
            <Route path="/help" element={<Help/>} />
        </Routes>
            </>
    );
}
export default AppRouter;
