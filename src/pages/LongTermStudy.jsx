import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LongTermStudy = () => {
  const steps = [
    {
      title: "STEP1 留学先の選定",
      content: "自分の目標、興味、予算に合わせて長期留学先を選びます。大学や語学学校、専門学校などを考慮しましょう。"
    },
    {
      title: "STEP2 出願準備",
      content: "必要な書類（成績証明書、推薦状、英語能力証明書など）を準備します。また、志望理由書の作成も重要です。"
    },
    {
      title: "STEP3 出願と入学許可",
      content: "選んだ学校に出願し、入学許可を待ちます。入学許可が下りたら、ビザの申請を始めます。"
    }
  ];

  const points = [
    {
      title: "高度な語学力の習得",
      content: "長期間にわたり現地で生活し学ぶことで、高度な語学力を身につけることができます。日常会話から学術的な内容まで、幅広い場面で使える言語スキルを習得できます。",
      image: "/images/long-term-language.jpg"
    },
    {
      title: "専門知識とスキルの獲得",
      content: "大学や専門学校での長期留学では、特定の分野における深い知識とスキルを獲得することができます。これは将来のキャリアにおいて大きな強みとなります。",
      image: "/images/long-term-skills.jpg"
    },
    {
      title: "異文化適応力の向上",
      content: "長期間異文化の中で生活することで、高い異文化適応力が身につきます。これは、グローバル社会で活躍する上で非常に重要なスキルです。",
      image: "/images/long-term-adaptation.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="relative h-64 md:h-96 mb-8">
            <img
              src="/images/long-term-study-hero.jpg"
              alt="Long Term Study Abroad"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                LONG TERM STUDY
                <span className="block text-xl md:text-2xl mt-2">長期留学</span>
              </h1>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">WHAT</h2>
            <h3 className="text-xl font-semibold mb-4 text-center">長期留学とは？</h3>
            <p className="mb-4">
              長期留学は、通常6ヶ月以上の期間で行われる留学プログラムです。
              深い言語習得や文化理解、学位取得などを目的としています。
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>深い言語習得と文化理解が可能です。</li>
              <li>大学や専門学校での正規留学が一般的です。</li>
              <li>現地での生活体験を通じた成長が期待できます。</li>
              <li>キャリアにも活かせる長期的な経験となります。</li>
            </ul>
            <p>
              長期留学は、語学力の向上だけでなく、人生観や価値観を大きく変える機会となることが多いです。
            </p>
          </div>
        </section>

        <h2 className="text-2xl font-semibold mb-8 text-center">長期留学でできること</h2>
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

export default LongTermStudy;