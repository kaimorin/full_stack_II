// dependencies
import { Route, Routes } from 'react-router'
// layout general 
import Layout from './components/Layout.jsx'
// pages
import Home from './pages/Home.jsx'
import Agenda from './pages/Agenda.jsx'
// not found page - 404
import NotFound from './pages/NotFound.jsx'
import './App.css'
<<<<<<< Updated upstream

=======
import Datos from './pages/Datos.jsx'
import LayoutAdmin from './components/LayoutAdmin.jsx'
// pages admin
import Dashboard from './pages/Dashboard.jsx'
import CitasHorario from './pages/CitasHorario.jsx'
import Pacientes from './pages/Pacientes.jsx'
import Especialistas from './pages/Especialistas.jsx'
import Reportes from './pages/Reportes.jsx'
>>>>>>> Stashed changes

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="*" element={<NotFound />} />
<<<<<<< Updated upstream
=======
        <Route path="datos" element={<Datos />} />
      </Route>
      {/* panel admin */}
      <Route path="admin" element={<LayoutAdmin />}>
        <Route index element={<Dashboard />} />
        <Route path="citas" element={<CitasHorario />} />
        <Route path="pacientes" element={<Pacientes />} />
        <Route path="especialistas" element={<Especialistas />} />
        <Route path="reportes" element={<Reportes />} />
>>>>>>> Stashed changes
      </Route>
    </Routes>
  )
}