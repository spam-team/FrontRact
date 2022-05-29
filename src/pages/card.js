import React from 'react';
import Header from "../../src/components/Header";
import MainPhotoRender from "../components/MainPhotoRender";

const Card = () => {

    return (
        <div className="fonS">
        <div className="CardFon">
        <div className="container">
            <Header/>
            <MainPhotoRender/>
        </div>
            </div>

        </div>
    );
};

export default Card;
