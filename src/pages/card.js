import React from 'react';
import Header from "../../src/components/Header";
import MainPhotoRender from "../components/MainPhotoRender";

const Card = () => {

    return (
        <div className="fonS">
        <div className="CardFon">
        <Header/>
        <div className="container">
            <MainPhotoRender/>
        </div>
            </div>

        </div>
    );
};

export default Card;
