import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export const PurposesSection = () => (
  <section id="purposes" className="container mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold mb-8 text-center">留学の目的</h2>
    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
      <div className="w-full md:w-1/2">
        <img
          src="/images/study-abroad-purpose.jpg"
          alt="留学の目的"
          className="w-full h-auto object-cover rounded-lg mx-auto"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-semibold mb-4">留学で得られるもの</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>語学力の向上と異文化理解</li>
          <li>グローバルなキャリアアップの機会</li>
          <li>自立心と問題解決能力の育成</li>
          <li>国際的な人脈の構築</li>
          <li>新しい視点と価値観の獲得</li>
        </ul>
      </div>
    </div>
    <div className="text-center">
      <Link to="/programs">
        <Button size="lg" className="bg-black text-white">
          目的から選ぶ
        </Button>
      </Link>
    </div>
  </section>
);