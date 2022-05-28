import React from 'react';
import Header from "../../src/components/Header";
import ContactPage from "../components/ContactPage";

const Contact = () => {

    return (
        <div className="Contact">
                <Header/>
                <div className="container">
                    <ContactPage/>
                </div>

        </div>
    );
};

export default Contact;
