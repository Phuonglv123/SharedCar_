import React from 'react';
import './dowloadApp.scss';

const DowloadApp = () => {
    return (
        <section id="DowloadApp">
            <div className="container">
                <h1 className="text-center titleSection">Download <span className="nameMyApp">CyberGo</span> App </h1>

                <div className="mt-5 text-center">
                    <button className="buttonDowload">
                        <i className="fab fa-app-store"></i>
                    </button>
                    <button className="buttonDowload">
                        <i className="fab fa-android"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DowloadApp;