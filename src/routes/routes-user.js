import React from 'react';

// Components
import HomePage from '../user/home_page/home_page';
import IntroducePage from '../user/introduce_page/introduce_page';
import TripsPage from '../user/trips_page/trips_page';
import LoginPage from '../user/login_page/login_page';
import SupportPage from '../user/support_page/support_page';
import RegisterPage from '../user/register_page/register_page';


const routesUser = [
    {
        path: '/', exact: true, main: () => <HomePage/>
    },
    {
        path: '/introduce', exact: true, main: () => <IntroducePage/>
    },
    {
        path: '/trips', exact: true, main: () => <TripsPage/>
    },
    {
        path: '/login', exact: true, main: () => <LoginPage/>
    },
    {
        path: '/register', exact: true, main: () => <RegisterPage/>
    },
    {
        path: '/support', exact: true, main: () => <SupportPage/>
    },
]

export default routesUser;