import React, { useState } from 'react';
import { motion } from 'motion/react';
import { REVIEWS } from '../constants';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ReviewSection() {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-heading mb-4">시공 사례 & 리뷰</h2>
            <p className="text-muted-foreground">영구 홈패션과 함께 변화된 실제 공간들을 확인하세요.</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveReview(prev => (prev > 0 ? prev - 1 : REVIEWS.length - 1))}
              className="p-3 border border-border hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setActiveReview(prev => (prev < REVIEWS.length - 1 ? prev + 1 : 0))}
              className="p-3 border border-border hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square md:aspect-[4/3] bg-gray-100 overflow-hidden group">
            <div className="flex h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeReview * 100}%)` }}>
              {REVIEWS.map((review) => (
                <div key={review.id} className="min-w-full h-full relative">
                  {review.imageAfter ? (
                    <img 
                      src={review.imageAfter} 
                      alt="After" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground italic">No image provided</div>
                  )}
                  {review.imageBefore && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
                      After
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < REVIEWS[activeReview].rating ? 'fill-secondary text-secondary' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            
            <motion.div
              key={activeReview}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <p className="text-2xl font-heading leading-relaxed">
                "{REVIEWS[activeReview].comment}"
              </p>
              <div>
                <p className="font-bold text-lg">{REVIEWS[activeReview].user}</p>
                <p className="text-sm text-muted-foreground">{REVIEWS[activeReview].date}</p>
              </div>
            </motion.div>

            <div className="pt-8 border-t border-border flex gap-4">
              <div className="text-center">
                <p className="text-3xl font-heading">4.9</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Avg Rating</p>
              </div>
              <div className="w-[1px] h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-heading">1.2k+</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
