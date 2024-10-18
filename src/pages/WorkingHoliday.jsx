import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WorkingHoliday = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">ワーキングホリデーとは？</h1>
        <p className="mb-4">
          ワーキングホリデーは、18歳から30歳までの若者が対象の国際交流プログラムです。
          参加者は最長1年間、外国に滞在しながら、その国の文化や生活様式を体験し、
          必要に応じて働くことができます。
        </p>
        <p className="mb-4">
          主な特徴：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>観光だけでなく、現地で働くことができる</li>
          <li>語学力の向上と異文化体験が可能</li>
          <li>自己成長と国際的な視野を広げる機会</li>
          <li>各国との協定に基づいて実施される公的プログラム</li>
        </ul>
        <p>
          ワーキングホリデーは、旅行とは異なる深い文化体験と、
          将来のキャリアにも活かせる貴重な経験を提供します。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default WorkingHoliday;