import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layout Components
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Page Components
import All from '@/pages/Home/All'
import Curriculo from '@/pages/Resume/All'
import Project from '@/pages/Projects/All'
import ProjectDetails from './pages/Projects/ProjectDetails'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/projetos" element={<Project />} />
        <Route path="/projetos/:slug" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
