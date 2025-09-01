import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  /* 2. Reset CSS Moderno e Abrangente */
  *,    
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit; /* Garante que elementos como botões herdem a fonte */
    vertical-align: baseline;
    box-sizing: border-box;
  }

  /* Garante que elementos HTML5 semânticos sejam renderizados como blocos em navegadores antigos */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  /* Melhora a rolagem da página */
  html {
    scroll-behavior: smooth;
  }

  /* 3. Estilos Globais do Body */
  body {
    -webkit-font-smoothing: antialiased; /* Suaviza as fontes em navegadores WebKit */
    -moz-osx-font-smoothing: grayscale; /* Suaviza as fontes no Firefox */
    
    /* Acessando o tema para definir estilos base */
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.urbanist};
  }

  /* Resets para listas e citações */
  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  /* Reset para tabelas */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Comportamento padrão para mídias e links */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Reset para elementos de formulário, garantindo que herdem os estilos */
  button, input, select, textarea {
    font: inherit;
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
  }
  
  /* Definição de fontes para títulos */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.urbanist};
    font-weight: 700;
  }
`;
