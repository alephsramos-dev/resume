import { useEffect, useRef, useState } from 'react';
import { getSvgPath } from 'figma-squircle';

// Hook to get a clip-path path() string for a squircle matching the element size
export function useSquircle({ radius = 16, smoothness = 0.8 } = {}) {
  const ref = useRef(null);
  const [path, setPath] = useState('');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const width = Math.max(1, Math.round(rect.width));
      const height = Math.max(1, Math.round(rect.height));

      const d = getSvgPath({
        width,
        height,
        cornerRadius: radius,
        cornerSmoothing: Math.min(1, Math.max(0, smoothness)),
      });
      setPath(`path('${d}')`);
    };

    update();
    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    window.addEventListener('resize', update);

    return () => {
      try { ro.disconnect(); } catch {}
      window.removeEventListener('resize', update);
    };
  }, [radius, smoothness]);

  return { ref, path };
}
