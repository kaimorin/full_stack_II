// dependencies
import { Route, Routes } from 'react-router'
// layouts
import Layout from './components/Layout.jsx'
import LayoutAdmin from './components/LayoutAdmin.jsx'
// pages públicas
import Home from './pages/Home.jsx'
import Agenda from './pages/Agenda.jsx'
import Datos from './pages/Datos.jsx'
import Pago from './pages/Pago.jsx'
import Login from './pages/Login.jsx'
import Registro from './pages/Registro.jsx'
import Perfil from './pages/Perfil.jsx'
import NotFound from './pages/NotFound.jsx'
// pages admin
import Dashboard from './pages/Dashboard.jsx'
import CitasHorario from './pages/CitasHorario.jsx'
import Pacientes from './pages/Pacientes.jsx'
import Especialistas from './pages/Especialistas.jsx'
import Reportes from './pages/Reportes.jsx'
import './App.css'

export default function App() {
  return (
    <Routes>
      {/* sitio público */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="datos" element={<Datos />} />
        <Route path="pago" element={<Pago />} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Registro />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* panel admin */}
      <Route path="admin" element={<LayoutAdmin />}>
        <Route index element={<Dashboard />} />
        <Route path="citas" element={<CitasHorario />} />
        <Route path="pacientes" element={<Pacientes />} />
        <Route path="especialistas" element={<Especialistas />} />
        <Route path="reportes" element={<Reportes />} />
      </Route>
<<<<<<< HEAD
      {/* panel agenda */}
=======
      
>>>>>>> 40026566f24d0f2f581cdddb8155efb0d1c1ded8
    </Routes>
  )
}