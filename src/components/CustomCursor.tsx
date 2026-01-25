import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const rotation = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const rotationSpring = useSpring(rotation, { damping: 30, stiffness: 200 });

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
      // Subtle rotation based on movement
      rotation.set(rotation.get() + (e.movementX * 0.5));
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
  }, [cursorX, cursorY, rotation]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Main cursor - Wine bottle top design */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Outer ring - Wine bottle cap edge */}
        <motion.div
          className="relative flex items-center justify-center"
          style={{ rotate: rotationSpring }}
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {/* Cork top pattern - Circular with texture */}
          <div className="w-8 h-8 rounded-full bg-secondary/90 border-2 border-secondary flex items-center justify-center">
            {/* Inner cork texture - concentric circles */}
            <div className="w-5 h-5 rounded-full border border-secondary-foreground/30 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full border border-secondary-foreground/20 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-secondary-foreground/40" />
              </div>
            </div>
          </div>
          
          {/* Bottle cap ridges - decorative notches around edge */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-1.5 bg-secondary-foreground/30"
              style={{
                transformOrigin: 'center 16px',
                rotate: `${i * 30}deg`,
                top: '-2px',
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Trailing dot for smooth feel */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 0.5 : 0,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-1 h-1 rounded-full bg-secondary" />
      </motion.div>

      {/* Hide default cursor globally */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
