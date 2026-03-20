import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isF1, setIsF1] = useState(false);

  useEffect(() => {
    let animationFrameId;
    
    const moveCursor = (e) => {
        // Use requestAnimationFrame for smoother cursor
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
            setPosition({ x: e.clientX, y: e.clientY });
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

  // Avoid rendering cursor if it hasn't moved yet (e.g. mobile or initial load)
  if (position.x === -100 && position.y === -100) return null;

  return (
    <>
      <div 
        className={`fixed pointer-events-none z-[9999] rounded-full mix-blend-exclusion transition-all duration-300 ease-out flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ${
            isHovering ? 'w-12 h-12 bg-transparent border border-white/50' : 'w-4 h-4 bg-white shadow-[0_0_10px_white]'
        } ${isF1 ? '!w-16 !h-16 !border-red-500 !bg-red-500/10 !mix-blend-normal' : ''}`} 
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        {isF1 && <span className="text-xl animate-bounce leading-none" style={{textShadow: '0 0 10px red'}}>🏎️</span>}
      </div>
      
      <div 
        className={`fixed pointer-events-none z-[9998] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2 ${
            isHovering ? 'w-24 h-24 bg-white/10 blur-xl' : 'w-10 h-10 bg-white/30 blur-md'
        } ${isF1 ? '!w-32 !h-32 !bg-red-600/30 !blur-2xl' : ''}`} 
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </>
  );
};

export default CustomCursor;
