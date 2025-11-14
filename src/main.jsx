import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from 'styled-components';
import { SupabaseDataProvider } from './contexts/SupabaseDataContext.jsx';
import { HelmetProvider } from 'react-helmet-async';

// Importe seu tema e os estilos globais
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Inicializar AOS com configurações suaves
AOS.init({
  duration: 800, // duração suave
  easing: 'ease-in-out', // easing suave
  once: true, // anima apenas uma vez
  offset: 0, // offset 0 como solicitado
  delay: 0, // sem delay adicional
  disable: false,
  mirror: false, // não anima ao rolar para trás
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <SupabaseDataProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </SupabaseDataProvider>
    </HelmetProvider>
  </React.StrictMode>,
);