import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CustomSimulator from './components/CustomSimulator';
import TextureZoom from './components/TextureZoom';
import ReviewSection from './components/ReviewSection';
import CouponBanner from './components/CouponBanner';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import { PRODUCTS } from './constants';
import { ArrowRight } from 'lucide-react';

export default function App() {
  // Recently viewed logic simulation
  useEffect(() => {
    const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    // Simulation: Add first product if empty
    if (recentlyViewed.length === 0) {
      localStorage.setItem('recentlyViewed', JSON.stringify([PRODUCTS[0].id]));
    }
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-secondary selection:text-white">
      <CouponBanner />
      <Header />
      
      <main>
        <Hero />
        
        {/* Brand Philosophy Section */}
        <section className="py-32 bg-[#FDFDFD]">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop" 
                    alt="Craftsmanship" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary/10 -z-10" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs">Our Philosophy</span>
                <h2 className="text-5xl font-heading leading-tight">
                  전통의 가치 위에 <br />
                  <span className="italic font-light">현대의 감각</span>을 더하다
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  영구 홈패션은 25년 넘게 한 자리를 지켜온 장인의 손길에서 시작됩니다. 
                  우리는 단순히 천을 자르고 잇는 것이 아니라, 당신의 공간에 흐르는 
                  공기와 빛의 온도를 디자인합니다.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div>
                    <p className="text-3xl font-heading mb-2">100%</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Custom Made</p>
                  </div>
                  <div>
                    <p className="text-3xl font-heading mb-2">25yr+</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Expertise</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Best Sellers Grid */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-heading mb-4">베스트 컬렉션</h2>
              <p className="text-muted-foreground">가장 많은 사랑을 받은 영구 홈패션의 시그니처 제품들입니다.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {PRODUCTS.map((product, idx) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button className="bg-white text-primary px-6 py-3 text-xs uppercase tracking-widest font-bold">View Detail</button>
                    </div>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-2">{product.category}</p>
                  <h3 className="text-xl font-heading mb-2 group-hover:text-secondary transition-colors">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">From ₩{product.basePrice.toLocaleString()}</p>
                </motion.div>
              ))}
              
              {/* Coming Soon Placeholder */}
              <div className="aspect-[4/5] border border-dashed border-border flex flex-col items-center justify-center text-center p-12 bg-gray-50/50">
                <p className="text-sm font-heading mb-2">New Collection</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Coming Next Month</p>
              </div>
            </div>
          </div>
        </section>

        <CustomSimulator />
        <TextureZoom />
        <ReviewSection />

        {/* Call to Action Banner */}
        <section className="py-24 bg-secondary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-heading mb-8">당신의 공간을 위한 완벽한 솔루션</h2>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              전문 디자이너와의 1:1 상담을 통해 가장 적합한 패브릭과 디자인을 제안받으세요. 
              지금 바로 무료 방문 견적을 신청하실 수 있습니다.
            </p>
            <button className="bg-white text-secondary px-12 py-6 text-sm uppercase tracking-[0.2em] font-bold hover:bg-white/90 transition-all hover:scale-105 shadow-xl">
              무료 방문 견적 신청하기
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
