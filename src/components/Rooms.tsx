import { motion } from 'framer-motion';
import { Star, ShieldCheck, Wifi, Coffee, Utensils } from 'lucide-react';

const rooms = [
  {
    type: 'VIP Room',
    title: 'Executive Royal Suite',
    description: 'Experience ultimate luxury in our VIP rooms in Tissamaharama, featuring private dining and exclusive services tailored for travelers visiting Yala.',
    price: '$120 / night',
    features: ['Private Dining Area', 'Premium Mini-bar', '24/7 Butler Service', 'High-Speed Wi-Fi'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
    tag: 'Exclusive'
  },
  {
    type: 'Normal Room',
    title: 'Tropical Comfort Deluxe',
    description: 'Elegant and spacious rooms in Tissa designed for relaxation with a touch of luxury near Yala safari points.',
    price: '$85 / night',
    features: ['Garden View', 'Comfortable Queen Bed', 'En-suite Bathroom', 'Air Conditioning'],
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800',
    tag: 'Popular'
  }
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-body uppercase tracking-[0.3em] text-sm block mb-4"
          >
            Accommodation & Private Dining
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6"
          >
            Stay at <span className="text-secondary">Tissa Village Restaurant & Rooms</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-secondary/30 w-24 mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {rooms.map((room, index) => (
            <motion.div
              key={room.type}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-secondary/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-lg">
                    {room.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-secondary font-body text-xs uppercase tracking-widest block mb-1">
                      {room.type}
                    </span>
                    <h3 className="font-display text-2xl font-semibold">{room.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-display font-bold text-secondary">{room.price}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-8 line-clamp-2 leading-relaxed">
                  {room.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {room.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 border border-secondary/20 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 uppercase tracking-widest text-xs font-bold rounded-sm">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
