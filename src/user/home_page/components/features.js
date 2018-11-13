import React from 'react';
import './features.scss';

const Features = () => {
    return (
        <section id="Features">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="icon_feature_1"></div>
                        <h2 className="text-center mt-4 title_icon">Fast Car</h2>
                        <p className="text-center mt-4">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <div className="icon_feature_2"></div>
                        <h2 className="text-center mt-4 title_icon">Fast Pay</h2>
                        <p className="text-center mt-4">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <div className="icon_feature_3"></div>
                        <h2 className="text-center mt-4 title_icon">Fast Protection</h2>
                        <p className="text-center mt-4">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;