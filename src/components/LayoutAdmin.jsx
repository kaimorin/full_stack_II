import { Outlet } from 'react-router'
import AdminLeader from './AdminLeader';

function Layout(){
    return (
        <div>
            <AdminLeader />
            <Outlet />
            
        </div>
    )
}

export default Layout;