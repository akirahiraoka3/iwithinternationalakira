import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OverseasInternship = () => {
  const steps = [
    {
      title: "STEP1 インターンシップ先の選定",
      content: "自分の目標、興味、専攻分野に合わせてインターンシップ先を選びます。業界や企業の特徴、インターンシッププログラムの内容などを考慮しましょう。"
    },
    {
      title: "STEP2 応募準備",
      content: "必要な書類（履歴書、志望動機書、推薦状など）を準備します。英語での書類作成が必要な場合もあるので、十分な時間をかけて準備しましょう。"
    },
    {
      title: "STEP3 応募と選考",
      content: "選んだインターンシップ先に応募し、選考プロセスを経ます。面接がある場合は、事前に十分な準備をしておきましょう。内定が決まったら、ビザの申請を始めます。"
    }
  ];

  const points = [
    {
      title: "実践的なスキルを身につける",
      content: "海外の職場環境で実際に働くことで、グローバルなビジネススキルや専門知識を実践的に学ぶことができます。これは将来のキャリアにおいて大きな強みとなります。",
      image: "/images/internship-skills.jpg"
    },
    {
      title: "異文化環境での就業体験",
      content: "異なる文化背景を持つ同僚や顧客と協働することで、国際的な視野と異文化コミュニケーション能力が養われます。これはグローバル社会で活躍する上で非常に重要なスキルです。",
      image: "/images/internship-culture.jpg"
    },
    {
      title: "語学力の向上とキャリアネットワークの構築",
      content: "日常的に外国語を使用する環境で働くことで、ビジネスレベルの語学力が身につきます。また、国際的な人脈を築くことができ、将来のキャリア形成に役立ちます。",
      image: "/images/internship-network.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="relative h-64 md:h-96 mb-8">
            <img
              src="/images/overseas-internship-hero.jpg"
              alt="Overseas Internship"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                OVERSEAS INTERNSHIP
                <span className="block text-xl md:text-2xl mt-2">海外インターンシップ</span>
              </h1>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">WHAT</h2>
            <h3 className="text-xl font-semibold mb-4 text-center">海外インターンシップとは？</h3>
            <p className="mb-4">
              海外インターンシップは、海外の企業や組織で一定期間働き、実践的な経験を積むプログラムです。
              通常、数週間から数ヶ月の期間で行われ、専門知識やスキルを実際のビジネス環境で活用する機会を提供します。
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>実践的な職場経験を得ることができます。</li>
              <li>異文化環境でのビジネススキルを磨くことができます。</li>
              <li>語学力の向上と国際的な人脈構築が可能です。</li>
              <li>将来のキャリアに直結する経験を積むことができます。</li>
            </ul>
            <p>
              海外インターンシップは、グローバルな視野を持ちたい学生や若手社会人にとって、
              貴重な学習と成長の機会となります。
            </p>
          </div>
        </section>

        <h2 className="text-2xl font-semibold mb-8 text-center">海外インターンシップでできること</h2>
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

export default OverseasInternship;