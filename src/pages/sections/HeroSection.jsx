import React from 'react';
import { Button } from "@/components/ui/button";

export const HeroSection = ({ scrollToContact }) => (
  <section className="relative h-screen">
    <div className="absolute inset-0 z-0">
      <img 
        src="/placeholder.svg" 
        alt="Background" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
    <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">じぶん史上、最高の年へ</h1>
      <p className="text-xl md:text-2xl mb-8">業界最安値の費用</p>
      <div className="space-x-4">
        <Button size="lg" className="bg-white text-black hover:bg-gray-200" onClick={scrollToContact}>
          無料相談を予約
        </Button>
        <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">
          詳細を見る
        </Button>
      </div>
    </div>
  </section>
);