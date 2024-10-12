import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LanguageStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative h-[calc(100vh-64px)]">
        <img
          src="/images/language-study-hero.jpg"
          alt="Students in a language class"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            言語を学び、世界を広げる<br />語学留学プログラム
          </h1>
        </div>
      </div>
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">語学留学プログラム</h2>
        <p className="mb-4">
          語学留学プログラムは、現地の環境に身を置きながら効果的に言語スキルを向上させる絶好の機会です。
          日常生活の中で言語を使用することで、教室では得られない実践的なコミュニケーション能力を身につけることができます。
        </p>
        <p className="mb-4">
          英語、フランス語、スペイン語、中国語など、様々な言語の留学プログラムを提供しています。
          短期から長期まで、あなたのニーズに合わせて柔軟に期間を選択できます。
        </p>
        <p>
          IWITH Internationalは、留学先の選定から、ビザ申請、現地での生活サポートまで、
          あなたの語学留学をトータルでサポートします。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default LanguageStudy;