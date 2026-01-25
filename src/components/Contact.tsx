import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding bg-card relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary uppercase tracking-[0.3em] text-sm font-body mb-4 block">
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-muted/30 rounded-lg p-6 border border-border/50 hover:border-secondary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <info.icon className="w-5 h-5 text-secondary" />
                </div>
                <h4 className="font-display text-lg text-foreground mb-2">{info.title}</h4>
                <p className="text-muted-foreground text-sm whitespace-pre-line">{info.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31710.449843611195!2d81.26873!3d6.2835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6870d3a0f0d45%3A0x43c39012e2e5d7a3!2sTissamaharama!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thissa Village Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Map Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-background/95 backdrop-blur-sm rounded-lg p-4 border border-secondary/30 shadow-lg">
              <h4 className="font-display text-lg text-foreground mb-1">Thissa Village</h4>
              <p className="text-muted-foreground text-sm">Restaurant & Bar</p>
              <a
                href="https://maps.google.com/?q=Tissamaharama,+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-sm hover:underline mt-2 inline-block"
              >
                Get Directions →
              </a>
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 rounded-2xl p-10 border border-border/50"
        >
          <h3 className="font-display text-3xl text-foreground mb-4">
            Ready to Experience Thissa Village?
          </h3>
          <p className="text-body mb-6 max-w-xl mx-auto">
            Walk-ins welcome. For large groups or special occasions, 
            we recommend making a reservation.
          </p>
          <a
            href="tel:+94771234567"
            className="btn-gold inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call to Reserve
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
