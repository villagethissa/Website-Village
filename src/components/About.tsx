import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import soloTraveler from '@/assets/solo-traveler.jpg';
import friendsCocktails from '@/assets/friends-cocktails.jpg';

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const teamRef = useRef(null);

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: imageProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const springConfig = { stiffness: 100, damping: 30 };
  const smoothSection = useSpring(sectionProgress, springConfig);
  const smoothImage = useSpring(imageProgress, springConfig);

  // Apple-style scroll transforms
  const headerY = useTransform(smoothSection, [0, 0.3], [80, 0]);
  const headerOpacity = useTransform(smoothSection, [0, 0.3], [0, 1]);
  const imageY = useTransform(smoothImage, [0, 1], [60, -60]);
  const imageScale = useTransform(smoothImage, [0, 0.5, 1], [0.9, 1, 1]);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="section-padding bg-card relative overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header with scroll animation */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-20"
        >
          <span className="text-secondary uppercase tracking-[0.4em] text-xs font-body mb-4 block">
            Our Story
          </span>
          <h2 className="heading-section text-foreground mb-6">
            About <span className="text-gradient-gold">Thissa Village</span>
          </h2>
          <div className="divider-gold" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3 className="font-display text-3xl md:text-4xl text-foreground mb-8 leading-tight">
              A Taste of Sri Lankan Heritage
            </h3>
            <p className="text-body mb-6">
              Nestled in the heart of Tissamaharama, Thissa Village Restaurant & Bar brings you 
              an authentic culinary experience that celebrates the rich tapestry of Sri Lankan 
              cuisine. Our kitchen blends time-honored family recipes with contemporary 
              presentation, creating dishes that honor tradition while delighting modern palates.
            </p>
            <p className="text-body mb-10">
              Whether you're a traveler seeking authentic local flavors or a connoisseur of 
              fine dining, our warm hospitality and carefully crafted menu promise an 
              unforgettable journey through the island's diverse culinary landscape.
            </p>
            
            {/* Stats with staggered animation */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { number: '15+', label: 'Years Experience' },
                { number: '100+', label: 'Unique Dishes' },
                { number: '50k+', label: 'Happy Guests' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="text-center"
                >
                  <span className="font-display text-4xl md:text-5xl text-secondary block mb-2">
                    {stat.number}
                  </span>
                  <span className="text-muted-foreground text-sm">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image with parallax */}
          <motion.div
            ref={imageRef}
            style={{ y: imageY, scale: imageScale }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={soloTraveler}
                alt="Solo traveler enjoying Sri Lankan cuisine"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-secondary/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-secondary/10 rounded-2xl -z-10" />
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          ref={teamRef}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-muted/20 rounded-3xl p-8 md:p-14 backdrop-blur-sm border border-border/30"
        >
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="order-2 md:order-1">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-secondary uppercase tracking-[0.3em] text-xs font-body mb-4 block"
              >
                Our Community
              </motion.span>
              <h3 className="font-display text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Where Travelers Become Family
              </h3>
              <p className="text-body mb-6">
                Every evening at Thissa Village, you'll find backpackers sharing stories, 
                couples celebrating special moments, and solo adventurers making new friends 
                over tropical cocktails and authentic Sri Lankan cuisine.
              </p>
              <p className="text-body">
                Our team takes pride in creating an atmosphere where global travelers 
                feel at home — a place where the warmth of Sri Lankan hospitality 
                meets the excitement of adventure.
              </p>
            </div>
            <motion.div 
              className="order-1 md:order-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={friendsCocktails}
                  alt="Friends enjoying cocktails at Thissa Village"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
