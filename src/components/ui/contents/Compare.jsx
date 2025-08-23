import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; // 1. Importe o hook
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Code from "@/assets/compare/compare-code.png";
import Result from "@/assets/compare/compare-result.png";

export const CompareSlider = () => {
  // 2. Configure o hook para observar o componente
  //    - ref: deve ser anexado ao elemento que você quer observar
  //    - inView: um booleano que se torna 'true' quando o elemento está visível
  //    - triggerOnce: true -> garante que a animação rode apenas na primeira vez que for visível
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // A animação começa quando 50% do slider estiver visível
  });

  // 3. Estado para controlar a posição, começando em 50
  const [position, setPosition] = useState(50);

  // 4. Efeito que dispara a animação
  //    Ele depende de 'inView'. Só será executado quando 'inView' se tornar true.
  useEffect(() => {
    // Só executa a lógica se o componente estiver visível
    if (inView) {
      const timeouts = []; // Array para guardar os IDs dos timeouts

      // Animação para 75%
      timeouts.push(setTimeout(() => {
        setPosition(75);
      }, 500)); // Começa após 0.5s

      // Animação para 25% (após a primeira animação terminar)
      timeouts.push(setTimeout(() => {
        setPosition(25);
      }, 1500)); // 0.5s de espera + 0.75s da transição + 0.25s de pausa

      // Animação de volta para 50% (após a segunda animação terminar)
      timeouts.push(setTimeout(() => {
        setPosition(50);
      }, 2500)); // 1.5s de espera + 0.75s da transição + 0.25s de pausa

      // 5. Função de limpeza: cancela todos os timeouts se o componente for desmontado
      //    no meio da animação. Isso evita erros e memory leaks.
      return () => {
        timeouts.forEach(clearTimeout);
      };
    }
  }, [inView]); // A dependência do efeito é 'inView'

  return (
    // 6. Anexe o 'ref' a um container em volta do slider
    <div ref={ref} style={{ height: '100%', width: '100%' }}>
      <ReactCompareSlider
        boundsPadding={0}
        itemOne={
          <ReactCompareSliderImage 
            alt="Imagem um" 
            src={Code} 
          />
        }
        itemTwo={
          <ReactCompareSliderImage 
            alt="Imagem dois" 
            src={Result} 
            style={{ 
              filter: 'saturate(1.25) contrast(1.1) drop-shadow(2px 4px 6px black)' 
            }}
          />
        }
        keyboardIncrement="5%"
        position={position} // Posição controlada pelo estado
        style={{
          height: '100%',
          width: '100%',
          flexGrow: 1,
        }}
        transition=".75s ease-in-out"
      />
    </div>
  );
};