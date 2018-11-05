import React from 'react';

// Components
import AdminPage from '../admin/admin_home_page/admin_home_page'


const routesAdmin = [
    {
        path: '/admin', exact: true, main: () => <AdminPage/>
    },
]

export default routesAdmin;