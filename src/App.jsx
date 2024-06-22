import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import EstudiantesRegulares from './screens/ModuloEstudiantesRegulares'
import Home from './screens/Home'
import Layout from './screens/Layout'

import EstudiantesNuevos from './screens/ModuloEstudiantesNuevos'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <Layout><Home/></Layout> }/>
      <Route path="/estudiantes-regulares" element={<Layout><EstudiantesRegulares/></Layout>} />
      <Route path="/estudiantes-nuevos" element={<Layout><EstudiantesNuevos/></Layout>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
