import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '@/components/partials/Header'
import '@/styles/reset.css'
import Footer from '@/components/partials/Footer'
import All from '@/pages/Home/All'
import Curriculo from '@/pages/Resume/All'
import Site from '@/pages/Site/All'
import Project from '@/pages/Projects/All'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/criar-meu-site" element={<Site />} />
        <Route path="/projetos" element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
