import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LanguageStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">語学留学</h1>
        <p className="mb-4">
          語学留学プログラムでは、現地の文化に浸りながら効果的に語学力を向上させることができます。
        </p>
        <p className="mb-4">
          初心者から上級者まで、あなたのレベルに合わせた授業を受けることができ、
          日常生活の中で自然に語学力を磨くことができます。
        </p>
        <p>
          また、現地の人々との交流を通じて、その国の文化や習慣を深く理解することもできます。
          語学力だけでなく、グローバルな視野を広げる絶好の機会です。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default LanguageStudy;