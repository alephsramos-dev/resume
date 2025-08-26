import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from 'styled-components';

// Importe seu tema e os estilos globais
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle /> {/* Renderize os estilos globais aqui */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);