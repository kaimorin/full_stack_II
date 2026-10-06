import { Outlet } from 'react-router'
import AdminLeader from './AdminLeader'

function LayoutAdmin() {
  return (
    <div className="layout-dashboard">
      <AdminLeader />
      <Outlet />
    </div>
  )
}

export default LayoutAdmin