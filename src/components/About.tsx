import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import foodImage from '@/assets/food-spread.jpg';
import teamImage from '@/assets/team-photo.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary uppercase tracking-[0.3em] text-sm font-body mb-4 block">
            Our Story
          </span>
          <h2 className="heading-section text-foreground mb-6">
            About <span className="text-gradient-gold">Thissa Village</span>
          </h2>
          <div className="divider-gold" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-3xl text-foreground mb-6">
              A Taste of Sri Lankan Heritage
            </h3>
            <p className="text-body mb-6">
              Nestled in the heart of Tissamaharama, Thissa Village Restaurant & Bar brings you 
              an authentic culinary experience that celebrates the rich tapestry of Sri Lankan 
              cuisine. Our kitchen blends time-honored family recipes with contemporary 
              presentation, creating dishes that honor tradition while delighting modern palates.
            </p>
            <p className="text-body mb-8">
              Whether you're a traveler seeking authentic local flavors or a connoisseur of 
              fine dining, our warm hospitality and carefully crafted menu promise an 
              unforgettable journey through the island's diverse culinary landscape.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: '15+', label: 'Years Experience' },
                { number: '100+', label: 'Unique Dishes' },
                { number: '50k+', label: 'Happy Guests' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <span className="font-display text-4xl text-secondary block mb-1">
                    {stat.number}
                  </span>
                  <span className="text-muted-foreground text-sm">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={foodImage}
                alt="Sri Lankan cuisine spread"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-secondary/30 rounded-lg -z-10" />
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-muted/30 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="font-display text-3xl text-foreground mb-6">
                Meet Our Team
              </h3>
              <p className="text-body mb-6">
                Behind every exceptional dish is a team of passionate individuals dedicated 
                to creating memorable experiences. Our chefs bring decades of expertise, 
                our staff brings warmth and genuine hospitality, and together we bring 
                the spirit of Sri Lankan cuisine to life.
              </p>
              <p className="text-body">
                From our head chef, trained in traditional cooking techniques passed down 
                through generations, to our friendly service team ready to guide you 
                through our menu's treasures — we're here to make your visit extraordinary.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={teamImage}
                  alt="Thissa Village Team"
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
