import React from 'react';
import './WhyChooseUs.scss'

const WhyChooseUs = () => {
    return (
        <section id="WhyChooseUs">
            <div className="container">
                <h1 className="title_WhyChooseUs">
                    Why
                    <span className="nameMyApp pr-1 pl-1">Choose</span>
                    Us ?
                </h1>
                <div className="row div2_whychooseus">
        
                    <div className="col-md-5">
                        <p className="content_WhyChooseUs">
                            Need to call for a trip? Instead of having to memorize the phone numbers of taxi
                            companies or worry about price changes, just use CyberGo to book your car and
                            enjoy the journey after a few minutes.
                        </p>
                        <p className="content_WhyChooseUs">
                            Get together with millions of people who choose CyberGo as the primary means for
                            your outings or attending events. Next time you need to ride, skip the bus
                            service, traditional taxi and just use CyberGo.
                        </p>
                    </div>
                    <div className="col-md-7 divImg_whychooseus">
                        <div className="img_WhyChooseUs"></div>
                    </div>
                </div>
            </div>
        

        </section>
    );
};

export default WhyChooseUs;