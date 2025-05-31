import React from 'react'
import Header from '@/components/Header'
import '@/styles/reset.css'
import Footer from '@/components/Footer'
import styled from 'styled-components'
import All from './pages/Home/All'


export default function App() {
  return (
    <>
      <Header />
          <All />
      <Footer />
    </>
  )
}
