import {useState} from 'react';

export const useHover = () => {
  const [hovering, setHovering] = useState(false);

  const mouseOver = () => setHovering(true);
  const mouseOut = () => setHovering(false);
  

  return {hovering, mouseOver, mouseOut}
}
