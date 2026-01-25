import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    content: 'Main Street, Tissamaharama,\nSouthern Province, Sri Lanka',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+94 77 123 4567\n+94 47 223 4567',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@thissavillage.com\nreservations@thissavillage.com',
  },
  {
    icon: Clock,
    title: 'Hours',
    content: 'Mon - Sun: 11:00 AM - 11:00 PM\nKitchen closes at 10:30 PM',
  },
];

const Contact = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const springConfig = { stiffness: 100, damping: 30 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  const headerY = useTransform(smoothProgress, [0, 0.3], [60, 0]);
  const headerOpacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="section-padding bg-card relative overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-20"
        >
          <span className="text-secondary uppercase tracking-[0.4em] text-xs font-body mb-4 block">
            Find Us
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Visit <span className="text-gradient-gold">Thissa Village</span>
          </h2>
          <div className="divider-gold mb-6" />
          <p className="text-body max-w-2xl mx-auto">
            We're located in the heart of Tissamaharama, just minutes from Yala National Park 
            and the ancient Tissa Wewa lake.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-muted/20 backdrop-blur-sm rounded-2xl p-6 border border-border/30 
                           hover:border-secondary/30 transition-colors duration-400"
              >
                <motion.div 
                  className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-5"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <info.icon className="w-5 h-5 text-secondary" />
                </motion.div>
                <h4 className="font-display text-lg text-foreground mb-2">{info.title}</h4>
                <p className="text-muted-foreground text-sm whitespace-pre-line leading-relaxed">{info.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border/30 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31710.449843611195!2d81.26873!3d6.2835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6870d3a0f0d45%3A0x43c39012e2e5d7a3!2sTissamaharama!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thissa Village Location"
                className="grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Map Overlay Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs bg-background/95 backdrop-blur-md rounded-xl p-5 border border-secondary/20 shadow-xl"
            >
              <h4 className="font-display text-xl text-foreground mb-1">Thissa Village</h4>
              <p className="text-muted-foreground text-sm mb-3">Restaurant & Bar</p>
              <a
                href="https://maps.google.com/?q=Tissamaharama,+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-sm hover:underline inline-flex items-center gap-1 group"
              >
                Get Directions 
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-24 text-center bg-gradient-to-r from-primary/15 via-secondary/8 to-primary/15 rounded-3xl p-12 border border-border/30 backdrop-blur-sm"
        >
          <h3 className="font-display text-3xl md:text-4xl text-foreground mb-5">
            Ready to Experience Thissa Village?
          </h3>
          <p className="text-body mb-8 max-w-xl mx-auto">
            Walk-ins welcome. For large groups or special occasions, 
            we recommend making a reservation.
          </p>
          <motion.a
            href="tel:+94771234567"
            className="btn-gold inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-4 h-4" />
            Call to Reserve
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
