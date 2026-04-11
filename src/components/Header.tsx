import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Search, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
            <a href="#" className="hover:text-secondary transition-colors">Shop</a>
            <a href="#" className="hover:text-secondary transition-colors">Story</a>
            <a href="#" className="hover:text-secondary transition-colors">Guide</a>
          </nav>
        </div>

        <a href="/" className="text-2xl font-heading tracking-tighter text-primary">
          Younggu <span className="font-light italic">Home Fashion</span>
        </a>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block hover:text-secondary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="relative hover:text-secondary transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
          <Button variant="outline" className="hidden md:flex gap-2 border-primary text-primary hover:bg-primary hover:text-white">
            <Phone className="w-4 h-4" />
            Consultation
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-80 bg-white z-50 p-8 shadow-2xl"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-6 text-xl font-heading">
                <a href="#" className="hover:text-secondary">Shop All</a>
                <a href="#" className="hover:text-secondary">Custom Curtains</a>
                <a href="#" className="hover:text-secondary">Premium Blinds</a>
                <a href="#" className="hover:text-secondary">Brand Story</a>
                <a href="#" className="hover:text-secondary">Measurement Guide</a>
              </nav>
              <div className="absolute bottom-8 left-8 right-8">
                <Button className="w-full bg-primary text-white">Free Estimate</Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
