import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { FABRICS } from '../constants';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Info } from 'lucide-react';

export default function CustomSimulator() {
  const [width, setWidth] = useState(200); // cm
  const [height, setHeight] = useState(230); // cm
  const [selectedFabric, setSelectedFabric] = useState(FABRICS[0]);

  const totalPrice = useMemo(() => {
    const area = (width / 100) * (height / 100);
    const fabricPrice = area * selectedFabric.pricePerSqM;
    const baseLabor = 50000;
    return Math.round((fabricPrice + baseLabor) / 1000) * 1000;
  }, [width, height, selectedFabric]);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-heading mb-4">맞춤 제작 시뮬레이터</h2>
              <p className="text-muted-foreground">공간의 사이즈와 원하는 소재를 선택하여 예상 견적을 실시간으로 확인하세요.</p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-medium uppercase tracking-wider">가로 사이즈 (cm)</label>
                  <span className="text-2xl font-heading">{width}cm</span>
                </div>
                <Slider 
                  value={[width]} 
                  onValueChange={(v) => setWidth(v[0])} 
                  max={600} 
                  min={100} 
                  step={10}
                  className="py-4"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-medium uppercase tracking-wider">세로 사이즈 (cm)</label>
                  <span className="text-2xl font-heading">{height}cm</span>
                </div>
                <Slider 
                  value={[height]} 
                  onValueChange={(v) => setHeight(v[0])} 
                  max={300} 
                  min={150} 
                  step={5}
                  className="py-4"
                />
              </div>
            </div>

            <div className="space-y-6">
              <label className="text-sm font-medium uppercase tracking-wider">패브릭 선택</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {FABRICS.map((fabric) => (
                  <button
                    key={fabric.id}
                    onClick={() => setSelectedFabric(fabric)}
                    className={`relative p-4 text-left border transition-all ${
                      selectedFabric.id === fabric.id 
                        ? 'border-primary ring-1 ring-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {selectedFabric.id === fabric.id && (
                      <div className="absolute top-2 right-2 text-primary">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                    <p className="font-medium text-sm mb-1">{fabric.name}</p>
                    <p className="text-xs text-muted-foreground">₩{fabric.pricePerSqM.toLocaleString()}/m²</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-32">
            <Card className="border-none shadow-2xl bg-[#F9FAFB] overflow-hidden">
              <div className="aspect-[4/5] relative">
                <img 
                  src={selectedFabric.image} 
                  alt={selectedFabric.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-sm uppercase tracking-widest mb-2 opacity-80">Selected Texture</p>
                  <h3 className="text-3xl font-heading">{selectedFabric.name}</h3>
                </div>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="flex justify-between items-center border-b border-border pb-6">
                  <span className="text-muted-foreground">예상 제작 비용</span>
                  <div className="text-right">
                    <span className="text-4xl font-heading text-primary">₩{totalPrice.toLocaleString()}</span>
                    <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-tighter">* 부가세 포함, 시공비 별도</p>
                  </div>
                </div>
                
                <div className="flex gap-3 p-4 bg-secondary/10 text-secondary rounded-lg">
                  <Info className="w-5 h-5 shrink-0" />
                  <p className="text-xs leading-relaxed">
                    입력하신 {width}x{height}cm 사이즈는 표준 창호 규격에 해당하며, 
                    {selectedFabric.name} 소재 사용 시 가장 아름다운 드레이프가 형성됩니다.
                  </p>
                </div>

                <Button className="w-full py-8 text-lg bg-primary hover:bg-primary/90 rounded-none shadow-lg shadow-primary/20">
                  이 구성으로 주문하기
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
