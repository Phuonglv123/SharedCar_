import React, {Component} from 'react';
import NavigationStep from './components/navigationStep';
import './trips_page.scss';

class TripsPage extends Component {
    render() {
        return (
            <div className="">
                <NavigationStep/>
                <div id="content_naviga">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                a
                            </div>
                            <div className="col-md-3">
                                b
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TripsPage;