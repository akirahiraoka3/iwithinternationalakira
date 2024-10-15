import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Reasons = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">選ばれる理由</h1>
        
        <section id="experience" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">豊富な経験</h2>
          <p>10年以上の留学サポート実績があり、多くの学生の夢を実現してきました。</p>
        </section>
        
        <section id="cost" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">業界最安値・手数料０円</h2>
          <p>コストを抑えた留学プランを提供し、学生の経済的負担を軽減します。</p>
        </section>
        
        <section id="support" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">24時間サポート</h2>
          <p>留学中も安心のサポート体制を整えており、いつでもサポートを受けられます。</p>
        </section>
        
        <section id="career" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">帰国後の就職サポート</h2>
          <p>留学後のキャリアもサポートし、グローバルな経験を活かした就職を支援します。</p>
        </section>
        
        <section id="overseas-career" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">渡航後のお仕事・就職サポート</h2>
          <p>現地での就職活動をサポートし、海外でのキャリアスタートを応援します。</p>
        </section>
        
        <section id="quick-process" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">迅速な手続き</h2>
          <p>スムーズな留学準備をサポートし、効率的に留学の準備を進めることができます。</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reasons;