import React from 'react';

// Components
import AdminPage from '../admin/admin_page';
import HomePage from '../user/home_page/home_page';
import IntroducePage from '../user/introduce_page/introduce_page';
import TripsPage from '../user/trips_page/trips_page';
import LoginPage from '../user/login_page/login_page';
import SupportPage from '../user/support_page/support_page';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/admin',
        exact: true,
        main: () => <AdminPage/>
    },
    {
        path: '/introduce',
        exact: true,
        main: () => <IntroducePage/>
    },
    {
        path: '/trips',
        exact: true,
        main: () => <TripsPage/>
    },
    {
        path: '/login',
        exact: true,
        main: () => <LoginPage/>
    },
    {
        path: '/support',
        exact: true,
        main: () => <SupportPage/>
    },

]

export default routes;