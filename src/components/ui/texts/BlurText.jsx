import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'motion/react';

const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);
  const keyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

/*
  BlurText - animação progressiva (blur -> foco) palavra ou caractere
  Props principais:
  - text (string)
  - animateBy: 'words' | 'chars'
  - direction: 'top' | 'bottom'
  - highlight: array de palavras que devem receber <b>
*/
export default function BlurText({
  as: Tag = 'p',
  text = '',
  children,
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.55,
  highlight = [],
  fullWidth = true,
  collapseToPlain = false,
}) {
  // Se children fornecido, ignorar prop text para construção de segmentos.
  const rawContent = children ? children : text;

  const buildSegmentsFromChildren = (node) => {
    const segs = [];
    const pushWord = (w, isElement = false) => {
      if (w === '') return;
      segs.push({ type: 'word', node: w, isElement });
    };
    const recurse = (n) => {
      if (n === null || n === undefined) return;
      if (typeof n === 'string') {
        const parts = n.split(/(\s+)/); // mantém espaços
        parts.forEach(p => {
          if (/^\s+$/.test(p)) segs.push({ type: 'space', node: p });
          else pushWord(p);
        });
        return;
      }
      if (Array.isArray(n)) { n.forEach(recurse); return; }
      if (n.type === 'br') { segs.push({ type: 'br' }); return; }
      // elemento (ex: <b>) tratado como uma palavra única com seu conteúdo textual
      if (typeof n === 'object') {
        if (n.props && n.props.children) {
          const textChildren = React.Children.toArray(n.props.children).map(c => typeof c === 'string' ? c : '').join(' ').trim();
          pushWord(React.cloneElement(n, { key: segs.length }), true);
          // adicionar espaço após se próximo não for br automaticamente via espaço segment
          segs.push({ type: 'space', node: ' ' });
        } else {
          pushWord(n, true);
        }
        return;
      }
    };
    recurse(node);
    // Remover espaço final se houver
    while (segs.length && segs[segs.length - 1].type === 'space') segs.pop();
    return segs;
  };

  const elements = useMemo(() => {
    if (children) return buildSegmentsFromChildren(children);
    if (animateBy === 'words') {
      const words = text.split(' ');
      const segs = [];
      words.forEach((w, i) => {
        segs.push({ type: 'word', node: w });
        if (i < words.length - 1) segs.push({ type: 'space', node: ' ' });
      });
      return segs;
    }
    return text.split('').map(c => (c === ' ' ? { type: 'space', node: ' ' } : { type: 'word', node: c }));
  }, [children, text, animateBy]);

  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () => (direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, y: -50 }
      : { filter: 'blur(10px)', opacity: 0, y: 50 }),
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      { filter: 'blur(5px)', opacity: 0.5, y: direction === 'top' ? 5 : -5 },
      { filter: 'blur(0px)', opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;
  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

  const rootStyle = { lineHeight: 1 };
  if (fullWidth) {
    // Mantém comportamento anterior (bloco largo) quando desejado
    rootStyle.display = 'block';
  }
  return (
    <Tag
      ref={ref}
      className={className}
      style={rootStyle}
    >
      {elements.map((segment, index) => {
        if (segment.type === 'br') return <br key={`br-${index}`} />;
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
        const spanTransition = { duration: totalDuration, times, delay: (index * delay) / 1000 };
        spanTransition.ease = easing;
        if (segment.type === 'space') return <span key={`s-${index}`} style={{ whiteSpace: 'pre' }}> </span>;
        const handleEnd = () => {
          if (index === elements.length - 1) {
            if (collapseToPlain && ref.current) {
              // Substitui por texto plano preservando texto original
              ref.current.textContent = text || (children ? (Array.isArray(children) ? children.join(' ') : children) : '');
            }
            onAnimationComplete && onAnimationComplete();
          }
        };
        return (
          <motion.span
            key={index}
            className="btw"
            style={{ display: 'inline-block', willChange: 'transform,filter,opacity', lineHeight: 1, whiteSpace: 'pre' }}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={handleEnd}
          >
            {segment.node}
          </motion.span>
        );
      })}
    </Tag>
  );
}
