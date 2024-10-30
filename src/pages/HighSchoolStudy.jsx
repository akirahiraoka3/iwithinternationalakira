import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HighSchoolStudy = () => {
  const steps = [
    {
      title: "STEP1 留学先の選定",
      content: "自分の目標、興味、予算に合わせて留学先の高校を選びます。学校の特色や留学生サポート体制などを考慮しましょう。"
    },
    {
      title: "STEP2 出願準備",
      content: "必要な書類（成績証明書、推薦状、英語能力証明書など）を準備します。また、志望理由書の作成も重要です。"
    },
    {
      title: "STEP3 出願と入学許可",
      content: "選んだ高校に出願し、入学許可を待ちます。入学許可が下りたら、ビザの申請を始めます。"
    }
  ];

  const points = [
    {
      title: "異文化理解力の向上",
      content: "若いうちから異なる文化や価値観に触れることで、グローバルな視野と柔軟な思考力が身につきます。これは将来のキャリアや人生設計に大きな影響を与えます。",
      image: "https://cdn.midjourney.com/2bd792d6-935b-49df-bd5b-dba5e6587b69/0_0.png"
    },
    {
      title: "語学力の飛躍的向上",
      content: "日常生活や授業を通じて、実践的な語学力を磨くことができます。若い時期の留学は言語習得に特に効果的で、ネイティブに近い語学力を身につけられる可能性が高まります。",
      image: "https://cdn.midjourney.com/ea8398bb-7eea-4e75-a747-25f61564753b/0_2.png"
    },
    {
      title: "自立心と適応力の育成",
      content: "海外での生活を通じて、自立心や問題解決能力が培われます。新しい環境に適応する経験は、将来のどんな状況にも対応できる強さを育みます。",
      image: "/images/highschool-independence.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="relative h-80 md:h-[32rem] mb-8">
            <img
              src="https://cdn.midjourney.com/a7b9731a-97c5-40c9-8921-a74191cf6e46/0_2.png"
              alt="High School Study Abroad"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                HIGH SCHOOL STUDY
                <span className="block text-xl md:text-2xl mt-2">高校留学</span>
              </h1>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">WHAT</h2>
            <h3 className="text-xl font-semibold mb-4 text-center">高校留学とは？</h3>
            <p className="mb-4">
              高校留学は、海外の高校に在籍して学ぶプログラムです。
              通常、1学期から1年間の期間で行われます。
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>若いうちから異文化体験ができます。</li>
              <li>現地の高校生と同じ環境で学習します。</li>
              <li>語学力の飛躍的な向上が期待できます。</li>
              <li>ホームステイを通じて深い文化理解が可能です。</li>
            </ul>
            <p>
              高校留学は、将来のグローバルな進路選択に大きな影響を与える貴重な経験となります。
            </p>
          </div>
        </section>

        <h2 className="text-2xl font-semibold mb-8 text-center">高校留学でできること</h2>
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

export default HighSchoolStudy;