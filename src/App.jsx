import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import './global.css'
import Success from './pages/Success'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/success' element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
