import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import wineToast from '@/assets/wine-toast.jpg';

type MenuCategory = 'starters' | 'mains' | 'drinks';

const menuData: Record<MenuCategory, { name: string; description: string; price: string }[]> = {
  starters: [
    { name: 'Isso Wade', description: 'Crispy prawn fritters with traditional spices and chili sambol', price: '$8' },
    { name: 'Mutton Rolls', description: 'Golden-fried pastry rolls filled with spiced minced mutton', price: '$6' },
    { name: 'Fish Cutlets', description: 'Pan-fried fish cakes with aromatic herbs and curry leaves', price: '$7' },
    { name: 'Devilled Cashews', description: 'Roasted cashews tossed in sweet chili glaze', price: '$5' },
    { name: 'Kottu Bites', description: 'Mini kottu portions with vegetables and egg', price: '$9' },
    { name: 'Soup of the Day', description: 'Chef\'s special soup with local seasonal ingredients', price: '$4' },
  ],
  mains: [
    { name: 'Rice & Curry Platter', description: 'Traditional rice with 5 curries, papadam, and sambols', price: '$16' },
    { name: 'Seafood Kottu', description: 'Chopped roti stir-fried with prawns, calamari, and vegetables', price: '$18' },
    { name: 'Lamprais', description: 'Dutch-Burgher rice wrapped in banana leaf with accompaniments', price: '$20' },
    { name: 'Crab Curry', description: 'Lagoon crab in rich coconut curry with aromatic spices', price: '$28' },
    { name: 'Grilled Sea Bass', description: 'Whole fish with Sri Lankan spice rub and lime', price: '$24' },
    { name: 'Black Pork Curry', description: 'Slow-cooked pork in dark roasted curry, village style', price: '$19' },
  ],
  drinks: [
    { name: 'King Coconut', description: 'Fresh young coconut, nature\'s perfect refresher', price: '$4' },
    { name: 'Ceylon Arrack Sour', description: 'Local arrack with lime, sugar, and bitters', price: '$10' },
    { name: 'Ginger Beer', description: 'Homemade spiced ginger beer, non-alcoholic', price: '$5' },
    { name: 'Tropical Mojito', description: 'Rum, passionfruit, mint, and soda', price: '$12' },
    { name: 'Ceylon Tea Selection', description: 'Premium estate teas - black, green, or herbal', price: '$4' },
    { name: 'Mango Lassi', description: 'Creamy yogurt shake with fresh Jaffna mangoes', price: '$6' },
  ],
};

const categories: { key: MenuCategory; label: string }[] = [
  { key: 'starters', label: 'Starters' },
  { key: 'mains', label: 'Main Dishes' },
  { key: 'drinks', label: 'Drinks & Cocktails' },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('starters');
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const springConfig = { stiffness: 100, damping: 30 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  const smoothImageProgress = useSpring(imageScrollProgress, springConfig);

  const headerY = useTransform(smoothProgress, [0, 0.3], [60, 0]);
  const headerOpacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);
  const imageY = useTransform(smoothImageProgress, [0, 1], [80, -80]);

  return (
    <section 
      ref={sectionRef}
      id="menu" 
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Ambient background elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left Column - Fixed Image */}
          <motion.div 
            ref={imageRef}
            className="lg:col-span-2 lg:sticky lg:top-32"
            style={{ y: imageY }}
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={wineToast}
                  alt="Wine toast at elegant dinner"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </motion.div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground px-6 py-3 rounded-xl shadow-lg"
              >
                <span className="font-display text-lg">Chef's Choice</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Menu Content */}
          <div className="lg:col-span-3">
            {/* Section Header */}
            <motion.div
              style={{ y: headerY, opacity: headerOpacity }}
              className="mb-12"
            >
              <span className="text-secondary uppercase tracking-[0.4em] text-xs font-body mb-4 block">
                Culinary Delights
              </span>
              <h2 className="heading-section text-foreground mb-6">
                Our <span className="text-gradient-gold">Menu</span>
              </h2>
              <div className="divider-gold mb-6 mx-0" style={{ marginLeft: 0 }} />
              <p className="text-body max-w-xl">
                Discover the authentic flavors of Sri Lanka, from traditional village recipes 
                to refreshing tropical cocktails.
              </p>
            </motion.div>

            {/* Category Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`px-6 py-2.5 rounded-full font-body text-sm tracking-wider transition-all duration-400 ${
                    activeCategory === category.key
                      ? 'bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20'
                      : 'bg-card border border-border/50 text-foreground hover:border-secondary/40'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>

            {/* Menu Items */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="space-y-4"
            >
              {menuData[activeCategory].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="group bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-5 
                             hover:border-secondary/30 hover:bg-card/80 transition-all duration-400"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-display text-xl text-foreground mb-1.5 group-hover:text-secondary transition-colors duration-300">
                        {item.name}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="font-display text-2xl text-secondary whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground text-sm mt-10"
            >
              * Prices are subject to 10% service charge. Please inform our staff of any dietary requirements.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
