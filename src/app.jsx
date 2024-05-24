import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Apropos from './pages/a-propos'
import Error from './pages/404'
import Logement from './pages/logement'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
        {/* <Route path="/logement" element={<Logement />} />
        <Route path="*" element={<Error />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
