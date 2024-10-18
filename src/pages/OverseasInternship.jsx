import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OverseasInternship = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">海外インターンシップ留学って？</h1>
        <p className="mb-4">
          海外インターンシップ留学は、語学学習と実務経験を組み合わせたプログラムです。
          海外の企業や組織で働きながら、語学力と専門スキルを向上させることができます。
        </p>
        <p className="mb-4">
          主な特徴：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>実践的な語学力の向上</li>
          <li>国際的な職場経験の獲得</li>
          <li>異文化環境でのビジネススキルの習得</li>
          <li>将来のキャリアに活かせる経験</li>
        </ul>
        <p>
          海外インターンシップ留学は、グローバルなキャリアを目指す学生や若手社会人に人気のプログラムです。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default OverseasInternship;