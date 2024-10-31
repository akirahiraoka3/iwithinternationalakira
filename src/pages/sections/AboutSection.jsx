import React from 'react';
import { Button } from "@/components/ui/button";

export const AboutSection = () => (
  <section id="about" className="py-24 container mx-auto px-4">
    <div className="relative bg-[#0B2B0B] rounded-3xl p-16 text-center">
      <div className="absolute -top-16 left-1/2 -translate-x-1/2">
        <img 
          src="/images/globe-coins.png" 
          alt="Globe with coins" 
          className="w-48 h-48 object-contain"
        />
      </div>
      <h2 className="text-5xl font-bold mb-8 text-[#90FF42] pt-16">国境のない金融</h2>
      <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
        あいウィズは世界中でお金を動かすための新しい方法を構築しています。最小限の手数料で、最大限の手軽さとスピードを。
      </p>
      <Button 
        className="bg-[#90FF42] text-[#0B2B0B] hover:bg-[#7DE535] px-8 py-2 rounded-full text-lg font-medium"
      >
        あいウィズのミッションを見る
      </Button>
    </div>
  </section>
);