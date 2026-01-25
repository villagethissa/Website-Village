import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="menu" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary uppercase tracking-[0.3em] text-sm font-body mb-4 block">
            Culinary Delights
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Our <span className="text-gradient-gold">Menu</span>
          </h2>
          <div className="divider-gold mb-6" />
          <p className="text-body max-w-2xl mx-auto">
            Discover the authentic flavors of Sri Lanka, from traditional village recipes 
            to refreshing tropical cocktails.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-8 py-3 rounded-full font-body text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-secondary text-secondary-foreground shadow-lg'
                  : 'bg-card border border-border text-foreground hover:border-secondary/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {menuData[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-menu group"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-display text-xl text-foreground mb-2 group-hover:text-secondary transition-colors">
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
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          * Prices are subject to 10% service charge. Please inform our staff of any dietary requirements.
        </motion.p>
      </div>
    </section>
  );
};

export default Menu;
