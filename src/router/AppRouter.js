import React from 'react';
import {Routes, Route} from 'react-router'
import Main from "../pages/main";
import Card from "../pages/card";
import Help from "../pages/help";
import Contact from "../pages/contact";
const AppRouter = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/:id" element={<Card/>} />
            <Route path="/help" element={<Help/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
            </>
    );
}
export default AppRouter;
