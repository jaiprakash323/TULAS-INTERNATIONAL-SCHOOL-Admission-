import { useState, useEffect } from 'react';

export interface MousePosition {
  x: number;
  y: number;
  isHoveringInteractive: boolean;
  isTouchDevice: boolean;
}

export function useMousePosition(): MousePosition {
  const [mousePos, setMousePos] = useState<MousePosition>({
    x: -100,
    y: -100,
    isHoveringInteractive: false,
    isTouchDevice: false,
  });

  useEffect(() => {
    // Check touch capabilities
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    const isTouch = checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch) return;

      const target = e.target as HTMLElement | null;
      const isInteractive = Boolean(
        target &&
          (target.tagName === 'BUTTON' ||
            target.tagName === 'A' ||
            target.tagName === 'INPUT' ||
            target.tagName === 'SELECT' ||
            target.tagName === 'TEXTAREA' ||
            target.closest('button') ||
            target.closest('a') ||
            target.closest('[data-interactive="true"]') ||
            target.getAttribute('role') === 'button')
      );

      setMousePos({
        x: e.clientX,
        y: e.clientY,
        isHoveringInteractive: isInteractive,
        isTouchDevice: false,
      });
    };

    if (!isTouch) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    } else {
      setMousePos((prev) => ({ ...prev, isTouchDevice: true }));
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePos;
}
