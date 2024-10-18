import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export const PurposesSection = () => (
  <section id="purposes" className="container mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold mb-8 text-center">留学の目的</h2>
    <div className="text-center">
      <Link to="/programs">
        <Button size="lg" className="bg-black text-white">
          目的から選ぶ
        </Button>
      </Link>
    </div>
  </section>
);