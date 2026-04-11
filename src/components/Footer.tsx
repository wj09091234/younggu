import React from 'react';
import { Instagram, Facebook, Youtube, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-heading tracking-tighter">Younggu Home Fashion</h3>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              1998년부터 이어온 장인 정신으로 당신의 공간에 
              따뜻한 감성과 품격을 더해드립니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Simulator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Measurement Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Brand Story</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Customer Service</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-sm text-white/60 mb-6">신제품 소식과 인테리어 팁을 받아보세요.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/10 border-b border-white/20 py-3 px-0 focus:outline-none focus:border-white transition-colors text-sm"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 hover:text-secondary transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-white/40">
          <p>© 2024 Younggu Home Fashion. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Business License: 123-45-67890</span>
            <span>CEO: Young-gu Park</span>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <button className="w-14 h-14 bg-[#FEE500] text-[#3C1E1E] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
          <MessageCircle className="w-7 h-7 fill-current" />
        </button>
        <button className="w-14 h-14 bg-white text-primary rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform font-bold text-xs uppercase tracking-tighter">
          Top
        </button>
      </div>
    </footer>
  );
}
