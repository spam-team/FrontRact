import React from 'react';
import "./Contact.scss"
const ContactPage = () => {
    return (
        <div className="ContactPage">
            <div className="col-12"><h2 className="title">Contact Information</h2></div>
                <div className="row justify-content-md-center">
                    <div className="col-12 col-lg-4">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <p>e-mail </p>
                                <p>phone</p>
                                <p>telegram</p>
                            </div>
                            <div className="col-6 col-lg">
                                <p className="mail">stress-service@ss.ru</p>
                                <p className="phone">+7 (000) 11-22-33</p>
                                <p className="tg">@stress-service</p>
                        </div>
                        </div>
                    </div>

                    <div className="col col-lg-2">
                        <img className="MePng" src="./image/MePng.png"/>
                    </div>
                </div>
        </div>
    );
};

export default ContactPage;
