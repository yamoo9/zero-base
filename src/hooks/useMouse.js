import { useState, useEffect } from 'react';

export function useMouse() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const update = (e) => setMouse({ x: e.pageX, y: e.pageY });
    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  });

  return mouse;
}
