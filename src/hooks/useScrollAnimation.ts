import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { RefObject, useMemo } from 'react';

interface ScrollAnimationOptions {
  offset?: [string, string];
  smoothness?: number;
}

interface ScrollAnimationReturn {
  scrollYProgress: MotionValue<number>;
  opacity: MotionValue<number>;
  y: MotionValue<number>;
  scale: MotionValue<number>;
  parallaxY: MotionValue<number>;
}

export function useScrollAnimation(
  ref: RefObject<HTMLElement>,
  options: ScrollAnimationOptions = {}
): ScrollAnimationReturn {
  const { offset = ['start end', 'end start'], smoothness = 0.5 } = options;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });

  // Smooth spring config for Apple-like feel
  const springConfig = useMemo(() => ({
    stiffness: 100 * smoothness,
    damping: 30,
    restDelta: 0.001,
  }), [smoothness]);

  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Common transforms
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.95]);
  const parallaxY = useTransform(smoothProgress, [0, 1], [100, -100]);

  return {
    scrollYProgress: smoothProgress,
    opacity,
    y,
    scale,
    parallaxY,
  };
}

export function useParallax(value: MotionValue<number>, distance: number): MotionValue<number> {
  return useTransform(value, [0, 1], [-distance, distance]);
}
