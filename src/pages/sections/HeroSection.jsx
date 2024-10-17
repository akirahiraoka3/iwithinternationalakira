import React from 'react';
import { Button } from "@/components/ui/button";

export const HeroSection = ({ scrollToContact }) => (
  <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">じぶん史上、最高の年へ</h1>
      <p className="text-gray-600 mb-6">業界最安値の費用</p>
      <Button size="lg" className="mr-4 bg-black text-white" onClick={scrollToContact}>無料相談を予約</Button>
      <Button variant="outline" size="lg">詳細を見る</Button>
    </div>
    <div className="md:w-1/2">
      <img 
        src="/images/hero-image.jpg" 
        alt="じぶん史上、最高の年へ" 
        className="w-full h-auto rounded-lg shadow-lg mx-auto object-cover"
      />
    </div>
  </section>
);