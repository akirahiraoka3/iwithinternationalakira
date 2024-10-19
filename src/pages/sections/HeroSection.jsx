import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';

export const HeroSection = ({ scrollToContact }) => (
  <div className="relative h-[70vh] bg-cover bg-center" style={{backgroundImage: 'url("/placeholder.svg")'}}>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="absolute inset-0 flex items-center justify-start container mx-auto px-4">
      <div className="max-w-2xl text-white">
        <h1 className="text-5xl font-bold mb-4">じぶん史上、最高の年へ</h1>
        <p className="text-xl mb-6">業界最安値の費用</p>
        <div className="flex space-x-4">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full flex items-center" onClick={scrollToContact}>
            <Play className="mr-2" /> 無料相談を予約
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">
            詳細を見る
          </Button>
        </div>
      </div>
    </div>
  </div>
);