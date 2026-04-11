import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CouponBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenCoupon = localStorage.getItem('hasSeenWelcomeCoupon');
    if (!hasSeenCoupon) {
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('hasSeenWelcomeCoupon', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-secondary text-white py-3 px-6 shadow-lg"
        >
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex w-10 h-10 bg-white/20 rounded-full items-center justify-center">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium">첫 방문 고객님을 위한 <span className="font-bold underline decoration-2 underline-offset-4">10% 할인 쿠폰</span>이 발급되었습니다!</p>
                <p className="text-[10px] opacity-80 uppercase tracking-widest hidden sm:block">Limited time offer for new members</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button size="sm" className="bg-white text-secondary hover:bg-white/90 font-bold px-6">
                쿠폰 받기
              </Button>
              <button onClick={handleClose} className="hover:rotate-90 transition-transform">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
