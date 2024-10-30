import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UniversityStudy = () => {
  const steps = [
    {
      title: "STEP1 留学先の選定",
      content: "自分の目標、興味、予算に合わせて留学先の大学を選びます。世界大学ランキングや専攻分野の強みなどを考慮しましょう。"
    },
    {
      title: "STEP2 出願準備",
      content: "必要な書類（成績証明書、推薦状、英語能力証明書など）を準備します。また、志望理由書の作成も重要です。"
    },
    {
      title: "STEP3 出願と入学許可",
      content: "選んだ大学に出願し、入学許可を待ちます。複数の大学に出願することをお勧めします。入学許可が下りたら、ビザの申請を始めます。"
    }
  ];

  const points = [
    {
      title: "グローバルな視野を広げる",
      content: "異なる文化や価値観に触れることで、国際的な視野を養い、多様性を理解する力が身につきます。これは将来のキャリアにおいても大きな強みとなります。",
      image: "/images/university-global-perspective.jpg"
    },
    {
      title: "専門知識とスキルの習得",
      content: "世界トップレベルの教育を受けることで、専門分野での深い知識とスキルを習得できます。最新の研究や技術に触れる機会も多く、将来の競争力につながります。",
      image: "/images/university-skills.jpg"
    },
    {
      title: "語学力の向上",
      content: "日常生活や授業を通じて、実践的な語学力を磨くことができます。英語圏以外の国でも、英語で授業を行う大学が増えており、複数の言語を習得するチャンスもあります。",
      image: "/images/university-language.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="relative h-80 md:h-[32rem] mb-8">
            <img
              src="https://cdn.midjourney.com/b64fdcb8-9b1d-41c1-856e-a9c4e6656540/0_2.png"
              alt="University Study Abroad"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                UNIVERSITY STUDY
                <span className="block text-xl md:text-2xl mt-2">大学留学</span>
              </h1>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">WHAT</h2>
            <h3 className="text-xl font-semibold mb-4 text-center">大学留学とは？</h3>
            <p className="mb-4">
              大学留学は、海外の大学で学位を取得したり、交換留学プログラムに参加したりする形態の留学です。
              通常、1学期から4年間程度の期間で、専門的な知識やスキルを習得しながら、異文化体験を深めることができます。
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>学士号や修士号などの学位取得が可能です。</li>
              <li>専門的な知識やスキルを深く学ぶことができます。</li>
              <li>国際的なネットワークを構築する機会があります。</li>
              <li>将来のキャリアに直結する経験を積むことができます。</li>
            </ul>
            <p>
              大学留学は、学問的な成長だけでなく、人間的な成長や将来のキャリアにも大きな影響を与える重要な選択肢です。
            </p>
          </div>
        </section>

        <h2 className="text-2xl font-semibold mb-8 text-center">大学留学でできること</h2>
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

export default UniversityStudy;