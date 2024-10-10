import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UniversitySupport = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">大学留学サポート</h1>
        <p className="mb-4">
          大学留学サポートプログラムでは、海外の大学への進学を目指す方々を
          全面的にサポートします。
        </p>
        <p className="mb-4">
          大学選びから出願手続き、ビザ申請まで、留学に必要なすべての
          プロセスをサポートします。また、現地での生活のアドバイスや、
          学業面でのサポートも提供しています。
        </p>
        <p>
          海外の大学で学ぶことで、高度な専門知識を身につけるだけでなく、
          国際的なネットワークを築くこともできます。あなたの将来のキャリアに
          大きな可能性を開く、貴重な経験となるでしょう。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default UniversitySupport;