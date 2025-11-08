import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Layout Components
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/layout/PageTransition'

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
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><All /></PageTransition>} />
        <Route path="/curriculo" element={<PageTransition><Curriculo /></PageTransition>} />
        <Route path="/projetos" element={<PageTransition><Project /></PageTransition>} />
        <Route path="/projetos/:slug" element={<PageTransition><ProjectDetails /></PageTransition>} />
        <Route path="/servicos/criacao-de-sites" element={<PageTransition><Developing /></PageTransition>} />
        <Route path="/servicos/automacao" element={<PageTransition><Developing /></PageTransition>} />
        <Route path="/servicos/trafego-pago" element={<PageTransition><Developing /></PageTransition>} />
        <Route path="/servicos/design" element={<PageTransition><Developing /></PageTransition>} />
        <Route path="/servicos/copywriter" element={<PageTransition><Developing /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  )
}
