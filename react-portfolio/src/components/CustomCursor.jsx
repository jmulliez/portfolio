import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const [hasMoved, setHasMoved] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isF1, setIsF1] = useState(false);
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const hasMovedRef = useRef(false);

  useEffect(() => {
    let animationFrameId;
    
    const moveCursor = (e) => {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
            const transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;

            if (cursorRef.current) {
              cursorRef.current.style.transform = transform;
            }

            if (trailRef.current) {
              trailRef.current.style.transform = transform;
            }

            if (!hasMovedRef.current) {
              hasMovedRef.current = true;
              setHasMoved(true);
            }
        });
    };
    
    const handleMouseOver = (e) => {
        const target = e.target.closest('a, button, .group\\/stat, .group\\/card, .group\\/timeline, [data-cursor="f1"]');
        if(target) {
            setIsHovering(true);
            if(target.getAttribute('data-cursor') === 'f1' || target.closest('[data-cursor="f1"]')) {
                setIsF1(true);
            } else {
                setIsF1(false);
            }
        }
    };
    
    const handleMouseOut = (e) => {
        const target = e.target.closest('a, button, .group\\/stat, .group\\/card, .group\\/timeline, [data-cursor="f1"]');
        if(target) {
            setIsHovering(false);
            setIsF1(false);
        }
    };

    document.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!hasMoved) return null;

  return (
    <>
      <div 
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] rounded-full mix-blend-exclusion transition-[width,height,background-color,border-color,box-shadow,opacity] duration-150 ease-out flex items-center justify-center ${
            isHovering ? 'w-12 h-12 bg-transparent border border-white/50' : 'w-4 h-4 bg-white shadow-[0_0_10px_white]'
        } ${isF1 ? '!w-16 !h-16 !border-red-500 !bg-red-500/10 !mix-blend-normal' : ''}`} 
        style={{ left: 0, top: 0, willChange: 'transform' }}
      >
        {isF1 && <span className="text-xl animate-bounce leading-none" style={{textShadow: '0 0 10px red'}}>🏎️</span>}
      </div>
      
      <div 
        ref={trailRef}
        className={`fixed pointer-events-none z-[9998] rounded-full transition-[width,height,background-color,filter,opacity] duration-200 ease-out ${
            isHovering ? 'w-24 h-24 bg-white/10 blur-xl' : 'w-10 h-10 bg-white/30 blur-md'
        } ${isF1 ? '!w-32 !h-32 !bg-red-600/30 !blur-2xl' : ''}`} 
        style={{ left: 0, top: 0, willChange: 'transform' }}
      ></div>
    </>
  );
};

export default CustomCursor;
