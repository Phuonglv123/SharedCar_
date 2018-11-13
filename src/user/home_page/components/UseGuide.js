import React from 'react';
import './UseGuide.scss';

const UseGuide = () => {
    return (
        <section id="UseGuide">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1 className="title_WhyChooseUs">
                            Easy to
                            <span className="nameMyApp ml-2">Use</span>
                        </h1>

                        <div className="content_useguide">
                            <div className="step1 d-flex align-items-center">
                                <i className="fas fa-download"></i>
                                <div className="ml-3">
                                    <p className="step_content">Step 1: Download App</p>
                                    <p className="m-0">
                                        Get the FastGo app for free from the App Store or Google Play on your
                                        smartphone. Open the app to get started.
                                    </p>
                                </div>

                            </div>
                            <div className="step1 d-flex align-items-center mt-5">
                                <i class="fas fa-car"></i>
                                <div className="ml-3">
                                    <p className="step_content">Step 2: Book Car</p>
                                    <p className="m-0">
                                        Enter your destination and select a vehicle type option. You will always see the
                                        price up front and the driver's time to pick you up.
                                    </p>
                                </div>
                            </div>
                            <div className="step1 d-flex align-items-center mt-5">
                                <i class="fas fa-location-arrow"></i>
                                <div className="ml-3">
                                    <p className="step_content">Step 3: GO!</p>
                                    <p className="m-0">
                                        You will see pictures and details of the driver's car and can track the
                                        appearance of the car you are traveling on the map.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 pt-4">
                        <div className="img_useguide"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseGuide;