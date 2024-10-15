import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LearnAboutStudyAbroad = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">留学を知る</h1>
        
        <section id="working-holiday" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">ワーキングホリデーとは？</h2>
          <p>ワーキングホリデーは、海外で働きながら語学を学び、文化を体験できるプログラムです。</p>
        </section>
        
        <section id="required-documents" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">必要な書類は？</h2>
          <p>留学に必要な書類は、パスポート、ビザ申請書類、健康診断書などがあります。詳細は留学先によって異なります。</p>
        </section>
        
        <section id="long-term-study" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">長期留学って？</h2>
          <p>長期留学は通常1年以上の期間で、より深い言語習得や文化理解を目指す留学形態です。</p>
        </section>
        
        <section id="short-term-study" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">短期留学って？</h2>
          <p>短期留学は数週間から数ヶ月の期間で、語学力向上や文化体験を集中的に行う留学形態です。</p>
        </section>
        
        <section id="costs" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">お値段・費用は？</h2>
          <p>留学の費用は、留学先や期間、プログラムの内容によって大きく異なります。詳細は個別にご相談ください。</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LearnAboutStudyAbroad;