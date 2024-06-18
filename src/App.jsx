import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import EstudiantesRegulares from './screens/ModuloEstudiantesRegulares'
import Home from './screens/Home'
import Layout from './screens/Layout'

function App() {
  return (
<<<<<<< HEAD
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={indes.html}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
=======
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <Layout><Home/></Layout> }/>
      <Route path="/estudiantes-regulares" element={<Layout><EstudiantesRegulares/></Layout>} />
    </Routes>
    </BrowserRouter>
>>>>>>> a2db1b41d130c100e9689fb28f9f4da95f64ea80
  )
}

export default App
