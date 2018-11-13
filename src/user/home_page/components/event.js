import React from 'react';
import './event.scss'

const MyEvent = () => {
    return (
        <section id="myEvent">
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="icon_myevent"></div>
                        <h4 className="text-center mt-4 title_event">Refer a friend & Cyber for free</h4>
                        <p className="content_event text-center mt-4">
                        Share your personal promo code directly through the "Free Rides" section of the app! When your friend signs up with your code, they'll start off with $10 of Ride Credit, and you'll get $10 too, once they take their first ride.
                        </p>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="icon_myevent2"></div>
                        <h4 className="text-center mt-4 title_event">Interested in partnering with Via for your business?</h4>
                        <p className="content_event text-center mt-4">
                        Share your personal promo code directly through the "Free Rides" section of the app! When your friend signs up with your code, they'll start off with $10 of Ride Credit, and you'll get $10 too, once they take their first ride.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyEvent;