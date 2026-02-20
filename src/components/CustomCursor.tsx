import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 450 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Handle hover states for interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        !!target.closest('a') || 
        !!target.closest('button') ||
        target.classList.contains('cursor-pointer');
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleElementHover);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleElementHover);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkMobile);
    };
  }, [cursorX, cursorY]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Apple-style Black Pointer (Medium Size) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: -2,
          translateY: -2,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.2 : 1,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          {/* High-quality SVG recreation of the macOS cursor */}
          <svg 
            width="28" 
            height="36" 
            viewBox="0 0 17 22" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ 
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
              transform: 'rotate(-5deg)' 
            }}
          >
            <path 
              d="M0.5 0.5V20.5L5.5 15.5L8.5 21.5L11.5 20.5L8.5 14.5L15.5 14L0.5 0.5Z" 
              fill="black" 
              stroke="white" 
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Subtle hover effect ring for interactive elements */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.8 : 0,
          opacity: isHovering ? 0.2 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-10 h-10 rounded-full bg-black" />
      </motion.div>

      {/* Hide default cursor globally */}
      <style>{`
        * {
          cursor: none !important;
        }
        a, button, input, textarea, [role="button"], .cursor-pointer {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
