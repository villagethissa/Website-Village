import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
];

const Footer = () => {
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  const springConfig = { stiffness: 100, damping: 30 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  const opacity = useTransform(smoothProgress, [0, 0.5], [0, 1]);
  const y = useTransform(smoothProgress, [0, 0.5], [30, 0]);

  return (
    <footer 
      ref={footerRef}
      className="bg-muted/30 border-t border-border/30 relative overflow-hidden"
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <motion.div 
        style={{ opacity, y }}
        className="container mx-auto px-6 md:px-12 py-16 relative z-10"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.a 
              href="#home"
              className="inline-block mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-display text-2xl text-foreground uppercase tracking-widest">
                Tissa <span className="text-secondary">Village</span>
              </h3>
            </motion.a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Best restaurant in Tissamaharama near Yala National Park. Experience luxury dining, fresh seafood, and a premium bar in Tissa Village, the top choice for tourists in Hambantota and Weerawila.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border/50 rounded-full flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-300 text-sm"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Main Street, Tissamaharama,<br />
                  Southern Province, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="tel:+94771234567" className="text-muted-foreground hover:text-secondary text-sm transition-colors duration-300">
                  +94 77 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="mailto:hello@thissavillage.com" className="text-muted-foreground hover:text-secondary text-sm transition-colors duration-300">
                  hello@thissavillage.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-5">Opening Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between text-muted-foreground">
                <span>Monday - Friday</span>
                <span>11 AM - 11 PM</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Saturday</span>
                <span>10 AM - 12 AM</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Sunday</span>
                <span>10 AM - 11 PM</span>
              </li>
            </ul>
            <motion.div 
              className="mt-5 p-3 bg-secondary/10 rounded-xl border border-secondary/20"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-secondary text-xs">
                ✨ Happy Hour: 5 PM - 7 PM Daily
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Thissa Village Restaurant & Bar. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
