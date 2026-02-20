import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import coupleDining from '@/assets/couple-dining.jpg';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Apple-style smooth transforms
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '30%']);
  const backgroundScale = useTransform(smoothProgress, [0, 1], [1, 1.15]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(smoothProgress, [0, 0.4], [0, -50]);
  const overlayOpacity = useTransform(smoothProgress, [0, 0.5], [0.6, 0.9]);

  return (
    <section 
      ref={ref}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        <img
          src={coupleDining}
          alt="Couple enjoying romantic dinner at Thissa Village"
          className="w-full h-[120%] object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-background"
          style={{ opacity: overlayOpacity }}
        />
        <div 
          className="absolute inset-0" 
          style={{ background: 'var(--gradient-hero)' }}
        />
      </motion.div>

      {/* Subtle ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-[100px]"
        />
        <motion.div
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/15 blur-[80px]"
        />
      </div>

      {/* Content with scroll-linked fade */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 text-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <span className="inline-block px-6 py-2.5 border border-secondary/30 rounded-full text-secondary text-xs uppercase tracking-[0.4em] font-body backdrop-blur-sm">
            Restaurant & Bar
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="heading-display text-foreground mb-4 leading-[1.1]"
        >
          Best <span className="text-gradient-gold">Restaurant in Tissamaharama</span>
          <br />
          Near Yala National Park
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-xl md:text-3xl text-foreground/80 mb-8 italic"
        >
          Luxury Dining & Premium Bar Experience in Tissa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-body max-w-2xl mx-auto mb-12 text-lg text-muted-foreground"
        >
          Discover Tissa Village Restaurant, the top-rated dining destination for tourists in Tissamaharama, Hambantota and Weerawila. The perfect stop for fresh seafood and fine dining after your Yala safari.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a href="#menu" className="btn-gold group relative overflow-hidden">
            <span className="relative z-10">View Menu</span>
            <motion.div
              className="absolute inset-0 bg-secondary-foreground/10"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </a>
          <a href="#contact" className="btn-outline-gold">
            Visit Us
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border border-foreground/20 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1.5 bg-secondary rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
