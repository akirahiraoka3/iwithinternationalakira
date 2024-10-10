import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Internship = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">海外インターンシップ</h1>
        <p className="mb-4">
          海外インターンシッププログラムでは、実践的なスキルを身につけながら、
          グローバルな環境で働く経験を積むことができます。
        </p>
        <p className="mb-4">
          様々な業界や職種でのインターンシップ機会を提供しており、
          あなたのキャリア目標に合わせたプログラムを見つけることができます。
        </p>
        <p>
          海外での就業体験を通じて、語学力の向上はもちろん、
          異文化理解やグローバルなビジネススキルも身につけることができます。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Internship;