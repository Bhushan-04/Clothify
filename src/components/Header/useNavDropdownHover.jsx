import { useState, useEffect, useRef } from 'react';

const useNavDropdownHover = (delay = 0) => {
  const [show, setShow] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const ref = useRef();

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setShow(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setShow(false);
    }, delay);
    setTimeoutId(id);
  };

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [delay]);

  return [show, ref];
};

export default useNavDropdownHover;
