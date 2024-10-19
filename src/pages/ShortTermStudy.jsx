import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShortTermStudy = () => {
  const steps = [
    {
      title: "STEP1 留学先の選定",
      content: "自分の目標、興味、予算に合わせて短期留学先を選びます。語学学校や大学のサマープログラムなどを考慮しましょう。"
    },
    {
      title: "STEP2 申込み手続き",
      content: "選んだプログラムに申し込みます。必要書類（パスポートのコピー、英語力証明書など）を準備し、提出します。"
    },
    {
      title: "STEP3 渡航準備",
      content: "ビザ（必要な場合）、航空券、海外旅行保険などを手配します。また、現地での生活に必要な準備も進めます。"
    }
  ];

  const points = [
    {
      title: "集中的な語学力向上",
      content: "短期間で集中的に語学を学ぶことで、効果的に語学力を向上させることができます。特に、スピーキングとリスニング力の向上が期待できます。",
      image: "/images/short-term-language.jpg"
    },
    {
      title: "異文化体験",
      content: "短期間でも、現地の文化や習慣に触れることで、グローバルな視野を広げることができます。これは将来のキャリアにも役立つ貴重な経験となります。",
      image: "/images/short-term-culture.jpg"
    },
    {
      title: "自信とモチベーションの向上",
      content: "海外での経験を通じて、自信とさらなる学習へのモチベーションを得ることができます。これは帰国後の学習や将来の長期留学にもつながります。",
      image: "/images/short-term-motivation.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="relative h-64 md:h-96 mb-8">
            <img
              src="/images/short-term-study-hero.jpg"
              alt="Short Term Study Abroad"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                SHORT TERM STUDY
                <span className="block text-xl md:text-2xl mt-2">短期留学</span>
              </h1>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">WHAT</h2>
            <h3 className="text-xl font-semibold mb-4 text-center">短期留学とは？</h3>
            <p className="mb-4">
              短期留学は、通常1ヶ月から3ヶ月程度の期間で行われる留学プログラムです。
              語学力の向上や異文化体験を短期間で集中的に行うことができます。
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>短期間で集中的に学習できます。</li>
              <li>語学学校やサマープログラムが一般的です。</li>
              <li>比較的低コストで留学体験が可能です。</li>
              <li>学期中の休暇を利用して参加できます。</li>
            </ul>
            <p>
              短期留学は、長期の留学を検討する前の「お試し留学」としても人気があります。
            </p>
          </div>
        </section>

        <h2 className="text-2xl font-semibold mb-8 text-center">短期留学でできること</h2>
        {points.map((point, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-cyan-500 mb-4">{`0${index + 1} ${point.title}`}</h3>
              <p>{point.content}</p>
            </div>
            <div className="w-full md:w-1/2 md:px-4">
              <img src={point.image} alt={point.title} className="w-full h-auto rounded-lg shadow-md" />
            </div>
          </div>
        ))}

        <h2 className="text-2xl font-semibold mb-8 text-center">ーこの流れでできるー</h2>
        {steps.map((step, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
            <p>{step.content}</p>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default ShortTermStudy;