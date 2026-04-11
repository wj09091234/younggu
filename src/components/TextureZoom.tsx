import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { FABRICS } from '../constants';

export default function TextureZoom() {
  const [activeFabric, setActiveFabric] = useState(FABRICS[0]);
  const [showGlass, setShowGlass] = useState(false);
  const [glassPos, setGlassPos] = useState({ x: 0, y: 0 });
  const [bgPos, setBgPos] = useState('0% 0%');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setGlassPos({ x, y });
    
    const px = (x / width) * 100;
    const py = (y / height) * 100;
    setBgPos(`${px}% ${py}%`);
  };

  return (
    <section className="py-24 bg-[#FDFDFD]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-heading mb-4">패브릭의 숨결을 느끼다</h2>
          <p className="text-muted-foreground">마우스를 이미지 위에 올려 고해상도 텍스처의 섬세한 조직감을 확인해보세요.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-3 space-y-4">
            {FABRICS.map((fabric) => (
              <button
                key={fabric.id}
                onClick={() => setActiveFabric(fabric)}
                className={`w-full p-6 text-left transition-all border-l-2 ${
                  activeFabric.id === fabric.id 
                    ? 'border-secondary bg-secondary/5' 
                    : 'border-transparent hover:bg-gray-50'
                }`}
              >
                <h4 className="font-heading text-xl mb-1">{fabric.name}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">{fabric.description}</p>
              </button>
            ))}
          </div>

          <div className="lg:col-span-9">
            <div 
              ref={containerRef}
              className="relative aspect-[16/9] overflow-hidden cursor-none group"
              onMouseEnter={() => setShowGlass(true)}
              onMouseLeave={() => setShowGlass(false)}
              onMouseMove={handleMouseMove}
            >
              <img 
                src={activeFabric.image} 
                alt={activeFabric.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {showGlass && (
                <div 
                  className="magnify-glass block"
                  style={{
                    left: glassPos.x - 100,
                    top: glassPos.y - 100,
                    backgroundImage: `url(${activeFabric.zoomImage})`,
                    backgroundPosition: bgPos,
                    backgroundSize: '400%',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              )}

              <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-medium">
                Texture Detail Zoom
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
