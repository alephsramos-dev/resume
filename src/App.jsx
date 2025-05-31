import React from 'react'
import Header from '@/components/Header'
import '@/styles/reset.css'
import Footer from '@/components/Footer'
import styled from 'styled-components'

const Content = styled.main`
    width: 100%;
    height: 100vh;
`

export default function App() {
  return (
    <>
      <Header />
        <Content>

        </Content>
      <Footer />
    </>
  )
}
