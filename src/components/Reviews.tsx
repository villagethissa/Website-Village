import { motion } from 'framer-motion';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    name: "Alex Johnson",
    rating: 5,
    date: "2 days ago",
    text: "Truly an amazing experience at Thissa Village. The food was exquisite and the service was beyond expectations. The VIP rooms are worth every penny with their unique luxury design!",
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Samantha Reed",
    rating: 5,
    date: "1 week ago",
    text: "The perfect tropical escape! Stayed in a Normal Room and it was incredibly cozy and clean. The staff is very friendly and makes you feel like family.",
    avatar: "https://i.pravatar.cc/150?u=samantha",
  },
  {
    name: "Marcus Thorne",
    rating: 4,
    date: "3 weeks ago",
    text: "Fantastic ambiance and the menu is quite varied. Great blend of local and international flavors. Definitely returning on my next visit to the area.",
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-card/20 relative overflow-hidden backdrop-blur-sm">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-body uppercase tracking-[0.3em] text-sm block mb-4"
            >
              Guest Experiences
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold"
            >
              Google <span className="text-secondary">Reviews</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-background/50 p-6 rounded-2xl border border-border/50 shadow-xl"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold">4.8</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FACC15" color="#FACC15" className={i === 4 ? "opacity-80" : ""} />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-border/50" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground/80">Excellent</span>
              <span className="text-xs text-muted-foreground">Based on 128 Reviews</span>
            </div>
            <div className="ml-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary/20 p-2">
                <svg viewBox="0 0 24 24" className="w-full h-full"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/></svg>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background/40 p-8 rounded-3xl border border-border/50 hover:bg-background/60 hover:border-secondary/40 transition-all duration-500 shadow-lg relative flex flex-col justify-between"
            >
              <div className="absolute top-8 right-8 text-secondary/40">
                <MessageSquareQuote size={40} />
              </div>
              
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#FACC15" color="#FACC15" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed font-body italic mb-8">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary/20 shadow-md">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm flex items-center gap-1.5">
                    {review.name}
                    <CheckCircle2 size={14} className="text-secondary" />
                  </h4>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
