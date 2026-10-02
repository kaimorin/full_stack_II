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
import Datos from './pages/Datos.jsx'


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="*" element={<NotFound />} />
        <Route path="datos" element={<Datos />} />
      </Route>
    </Routes>
  )
}