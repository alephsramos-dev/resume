import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '@/components/Header'
import '@/styles/reset.css'
import Footer from '@/components/Footer'
import All from '@/pages/Home/All'
import Curriculo from '@/pages/Curriculo/All'
import Site from '@/pages/Site/All'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/criar-meu-site" element={<Site />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
