import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export const PurposesSection = () => (
  <section id="purposes" className="container mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold mb-8 text-center">留学の目的</h2>
    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
      <div className="w-full md:w-1/2">
        <img
          src="https://cdn.midjourney.com/e92fc2b5-d2c1-4a6d-b967-24665e294bc9/0_2.png"
          alt="留学の目的"
          className="w-full h-auto object-cover rounded-lg mx-auto"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-semibold mb-4">年代・目的に合わせた渡航プラン</h3>
        <p className="mb-4">どの年代の人でも費用を抑えて留学することができます</p>
        <div className="text-center">
          <Link to="/programs">
            <Button size="lg" className="bg-black text-white">
              目的から選ぶ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);