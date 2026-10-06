function AdminLeader() {
    return(<aside class="sidebar-admin">
      <div class="logo-admin">
        <a href="index.html">NUTRIVIDA</a>
      </div>
      <nav class="nav-admin">
        <a href="#" class="item-admin activo">Dashboard</a>
        <a href="#" class="item-admin">Citas y Horarios</a>
        <a href="#" class="item-admin">Pacientes</a>
        <a href="#" class="item-admin">Especialistas</a>
        <a href="#" class="item-admin">Reportes y Pagos</a>
      </nav>
      <div class="admin-logout">
        <a href="login.html" class="link-logout">Cerrar Sesión</a>
      </div>
    </aside>)
}
export default AdminLeader;