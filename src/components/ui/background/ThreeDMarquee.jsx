import React, { useMemo, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Auto-import all site images (sorted) so they are processed by Vite and can render
const autoImages = Object.entries(
  import.meta.glob('/src/assets/sites/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })
)
  .sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true }))
  .map(([, mod]) => mod);

// --- Keyframes para colunas pares / ímpares ---
const floatDown = (distance) => keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(${distance}px); }
  100% { transform: translateY(0); }
`;
const floatUp = (distance) => keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-${distance}px); }
  100% { transform: translateY(0); }
`;

// Container externo
const Outer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  perspective: 1800px;
  display: block;
  pointer-events: ${({ $interactive }) => ($interactive ? 'auto' : 'none')};
`;

// Wrapper central para controlar escala responsiva
const Center = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 2200px; /* maior para cobrir diagonal em telas largas */
  height: 2200px;
  transform: scale(.48);
  transform-origin: top left;
  @media (min-width: 640px) { transform: scale(.65); }
  @media (min-width: 900px) { transform: scale(.8); }
  @media (min-width: 1200px) { transform: scale(.95); }
  @media (min-width: 1536px) { transform: scale(1.05); }
`;

// Grid 3D rotacionado
const Grid = styled.div`
  position: absolute;
  top: 24rem; /* 384px */
  right: 50%;
  transform: rotateX(55deg) rotateY(0deg) rotateZ(-45deg);
  transform-origin: top left;
  transform-style: preserve-3d;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem; /* gap-8 */
  pointer-events: none; /* grid estrutural não captura */
`;

// Coluna com animação alternada
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  position: relative;
  pointer-events: none; /* default */
  ${({ $index }) => $index % 2 === 0 ? css`
    animation: ${floatDown(100)} 10s ease-in-out infinite;
  ` : css`
    animation: ${floatUp(100)} 15s ease-in-out infinite;
  `}
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

// Linha horizontal decorativa
const GridLineH = styled.div`
  position: absolute;
  left: calc(var(--offset, 200px) / -2);
  height: 1px;
  width: calc(100% + var(--offset, 200px));
  background: linear-gradient(to right, var(--line-color, rgba(0,0,0,.2)), var(--line-color, rgba(0,0,0,.2)) 50%, transparent 0, transparent);
  background-size: 5px 1px;
  mask: linear-gradient(to left, #fff var(--fade-stop, 90%), transparent),
        linear-gradient(to right, #fff var(--fade-stop, 90%), transparent),
        linear-gradient(#000, #000);
  mask-composite: exclude, add; /* navegadores baseados em WebKit podem ignorar */
  z-index: 30;
  pointer-events: none;
  &.light { --line-color: rgba(255,255,255,0.2); }
`;

// Linha vertical decorativa
const GridLineV = styled.div`
  position: absolute;
  top: calc(var(--offset, 150px) / -2);
  width: 1px;
  height: calc(100% + var(--offset, 150px));
  background: linear-gradient(to bottom, var(--line-color, rgba(0,0,0,.2)), var(--line-color, rgba(0,0,0,.2)) 50%, transparent 0, transparent);
  background-size: 1px 5px;
  mask: linear-gradient(to top, #fff var(--fade-stop, 90%), transparent),
        linear-gradient(to bottom, #fff var(--fade-stop, 90%), transparent),
        linear-gradient(#000, #000);
  mask-composite: exclude, add;
  z-index: 30;
  pointer-events: none;
  &.light { --line-color: rgba(255,255,255,0.2); }
`;

// Wrapper para cada imagem (permite hover independente)
const ImgWrap = styled.div`
  position: relative;
  pointer-events: auto; /* permite hover/drag nas imagens quando interativo */
  &:hover img { transform: translateY(-10px); box-shadow: 0 20px 40px -10px rgba(0,0,0,0.6); }
`;

// Estilo da imagem
const Img = styled.img`
  width: 100%;
  aspect-ratio: 970 / 700;
  object-fit: cover;
  border-radius: 14px;
  display: block;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.04), 0 8px 20px -6px rgba(0,0,0,0.6);
  transition: transform .45s cubic-bezier(.22,.68,.26,1), box-shadow .6s ease, filter .6s ease;
  will-change: transform;
  backface-visibility: hidden;
  ${({ $active }) => $active && css`
    transform: translateY(-14px) scale(1.04);
    box-shadow: 0 10px 35px -8px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.08);
    filter: brightness(1.08) saturate(1.15);
  `}
`;

// Componente principal
const ThreeDMarquee = forwardRef(function ThreeDMarquee({ images = [], className, theme = 'dark', interactive = false, synthetic = false }, ref) {
  // Substitui fallback de strings por imports reais para garantir renderização
  const fallbackImages = autoImages;

  const baseImages = images.length ? images : fallbackImages;
  const [activeIdx, setActiveIdx] = useState(null);
  const imgRefs = useRef([]);
  imgRefs.current = [];

  const columns = useMemo(() => {
    const chunkSize = Math.ceil(baseImages.length / 4) || 1;
    const rawCols = Array.from({ length: 4 }, (_, i) => baseImages.slice(i * chunkSize, (i + 1) * chunkSize));
    const desiredPerColumn = 7;
    return rawCols.map(col => {
      if (col.length === 0) return baseImages.slice(0, desiredPerColumn);
      if (col.length >= desiredPerColumn) return col;
      const reps = Math.ceil(desiredPerColumn / col.length);
      return Array.from({ length: reps }, () => col).flat().slice(0, desiredPerColumn);
    });
  }, [baseImages]);

  // Mapeia índice linear para col/row
  const flatImages = useMemo(() => columns.flat(), [columns]);

  useImperativeHandle(ref, () => ({
    highlightAt(x, y) {
      if (!synthetic) return;
      // Encontrar primeiro img que contenha o ponto
      let found = null;
      for (let i = 0; i < imgRefs.current.length; i++) {
        const el = imgRefs.current[i];
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) { found = i; break; }
      }
      setActiveIdx(found);
    },
    clearHighlight() { setActiveIdx(null); }
  }), [synthetic]);

  const lineClass = theme === 'dark' ? 'light' : '';

  let runningIndex = 0;

  return (
    <Outer className={className} aria-hidden={!interactive && !synthetic} $interactive={interactive} style={synthetic ? { pointerEvents: 'none' } : undefined}>
      <Center>
        <Grid>
          {columns.map((col, ci) => (
            <Column key={ci} $index={ci} style={{ pointerEvents: 'none' }}>
              <GridLineV className={lineClass} style={{ '--offset': '80px' }} />
              {col.map((src, ii) => {
                const idx = runningIndex++;
                return (
                  <ImgWrap key={ci + '-' + ii} style={{ pointerEvents: 'none' }}>
                    <GridLineH className={lineClass} style={{ '--offset': '20px', top: '-16px' }} />
                    <Img
                      ref={el => { imgRefs.current[idx] = el; }}
                      src={src}
                      alt={`site preview ${ci}-${ii}`}
                      loading="lazy"
                      draggable={interactive}
                      $active={activeIdx === idx}
                    />
                  </ImgWrap>
                );
              })}
            </Column>
          ))}
        </Grid>
      </Center>
    </Outer>
  );
});

export default ThreeDMarquee;
