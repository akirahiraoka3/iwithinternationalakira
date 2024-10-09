import React from 'react';
import { Button } from "@/components/ui/button";

export const HeroSection = ({ scrollToContact }) => (
  <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">海外インターンシップ・留学ならIWITH Internationalへ</h1>
      <p className="text-gray-600 mb-6">あなたの未来を一緒に築きましょう。</p>
      <Button size="lg" className="mr-4 bg-black text-white" onClick={scrollToContact}>無料相談を予約</Button>
      <Button variant="outline" size="lg">詳細を見る</Button>
    </div>
    <div className="md:w-1/2">
      <img src="/placeholder.svg" alt="IWITH International" className="w-full h-auto" />
    </div>
  </section>
);