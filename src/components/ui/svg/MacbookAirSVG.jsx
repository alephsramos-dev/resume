import React from "react";

// SVG de Macbook Air reto, tela centralizada, responsivo
export default function MacbookAirSVG({ className = "", style = {}, ...props }) {
  return (
    <svg
      viewBox="0 0 900 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...props}
    >
      {/* Corpo do notebook */}
      <rect x="60" y="80" width="780" height="400" rx="36" fill="#EDEDED" stroke="#B0B0B0" strokeWidth="6"/>
      {/* Tela (área de recorte) */}
      <rect x="120" y="120" width="660" height="320" rx="16" fill="#222" stroke="#888" strokeWidth="2"/>
      {/* Borda inferior (base) */}
      <ellipse cx="450" cy="540" rx="340" ry="30" fill="#D1D1D1" stroke="#B0B0B0" strokeWidth="4"/>
      {/* Detalhe da câmera */}
      <circle cx="450" cy="110" r="5" fill="#444" />
      {/* Detalhe do logo */}
      <ellipse cx="450" cy="500" rx="18" ry="6" fill="#bbb" />
    </svg>
  );
}
