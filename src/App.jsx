import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

// Layout Components
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Page Components
import All from '@/pages/Home/All'
import Curriculo from '@/pages/Resume/All'
import Project from '@/pages/Projects/All'
import ProjectDetails from './pages/Projects/ProjectDetails'
import Developing from './components/template/developing'

// ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // ou 'smooth' para um scroll suave
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/projetos" element={<Project />} />
        <Route path="/projetos/:slug" element={<ProjectDetails />} />
        <Route path="/servicos/criacao-de-sites" element={<Developing />} />
        <Route path="/servicos/automacao" element={<Developing />} />
        <Route path="/servicos/trafego-pago" element={<Developing />} />
        <Route path="/servicos/design" element={<Developing />} />
        <Route path="/servicos/copywriter" element={<Developing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
