import React from 'react';
import { Button } from "@/components/ui/button";

export const HeroSection = ({ scrollToContact }) => (
  <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">実力派講師陣と<br />最先端のICT教育で<br />第一志望合格へ！</h1>
      <div className="flex items-center mb-4">
        <img src="/placeholder.svg" alt="Award" className="w-16 h-16 mr-4" />
        <p className="text-sm">
          イード・アワード「塾」顧客満足度<br />
          <span className="font-bold">最優秀賞受賞！</span>
        </p>
      </div>
      <Button size="lg" className="mr-4 bg-black text-white" onClick={scrollToContact}>無料相談を予約</Button>
      <Button variant="outline" size="lg">詳細を見る</Button>
    </div>
    <div className="md:w-1/2">
      <img src="/placeholder.svg" alt="Hero Image" className="w-full h-auto" />
    </div>
  </section>
);