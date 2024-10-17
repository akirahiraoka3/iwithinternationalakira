import React from 'react';
import { Button } from "@/components/ui/button";

export const HeroSection = ({ scrollToContact }) => (
  <section className="relative h-screen w-full">
    {/* Background image */}
    <div 
      className="absolute inset-0 bg-cover bg-center z-0" 
      style={{backgroundImage: "url('/placeholder.svg')"}}
    ></div>
    
    {/* Content overlay */}
    <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
      <div className="text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">じぶん史上、最高の年へ</h1>
        <p className="text-xl mb-6">業界最安値の費用</p>
        <Button size="lg" className="mr-4 bg-black text-white" onClick={scrollToContact}>無料相談を予約</Button>
        <Button variant="outline" size="lg" className="bg-white text-black">詳細を見る</Button>
      </div>
    </div>
  </section>
);