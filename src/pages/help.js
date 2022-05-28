import React from 'react';
import Header from "../../src/components/Header";
import ComponentRender from "../../src/components/ComponentRender";
import HelpComponent from "../components/HelpComponent";

const Help = () => {

    return (
        <>
            <Header/>
        <div className="Help container">
        <HelpComponent/>
        </div>
            </>
    );
};

export default Help;
