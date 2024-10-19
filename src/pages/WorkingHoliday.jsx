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
          ワーキングホリデーは、協定を結んでいる国の若者が、滞在国の文化や生活様式を理解し、
          国際親善を深めることを目的とした制度です。
        </p>
        <p className="mb-4">
          主な特徴：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>最長1年間、滞在国で働きながら休暇を楽しむことができる</li>
          <li>語学学習と就労体験の両立が可能</li>
          <li>滞在費用を現地で稼ぎながら長期滞在できる</li>
          <li>年齢制限があり、通常18歳から30歳までが対象</li>
        </ul>
        <p>
          ワーキングホリデーは、海外での生活を深く体験したい若者にとって魅力的な選択肢です。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default WorkingHoliday;