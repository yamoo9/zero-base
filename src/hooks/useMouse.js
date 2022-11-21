import { useState, useEffect } from 'react';

export function useMouse() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function update(event) {
      setMouse({ x: event.pageX, y: event.pageY });
    }
    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  });

  return { ...mouse };
}
