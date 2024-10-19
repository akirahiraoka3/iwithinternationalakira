import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TimelineItem = ({ icon, title, description }) => (
  <div className="flex items-start mb-8">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white text-2xl mr-4">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const RequiredDocuments = () => {
  const steps3MonthsBefore = [
    {
      icon: "💰",
      title: "ご請求書の確認＆お支払い",
      description: "留学費用の2/3を支払います。この時点で航空券を手配することをおすすめします。早めに手配することで費用を抑えられる可能性があります。"
    },
    {
      icon: "✈️",
      title: "航空券の手配をしよう",
      description: "航空券は早めの予約がお得です！"
    },
    {
      icon: "🛂",
      title: "ビザの手配をしよう",
      description: "申請から取得まで時間がかかるので、早めの準備がおすすめです。手続きに必要な書類は国によって異なります。"
    },
    {
      icon: "🛂",
      title: "パスポートを確認しよう",
      description: "有効期限が十分にあることを確認しましょう。期限が近い場合は更新をお忘れなく。"
    }
  ];

  const steps2MonthsBefore = [
    {
      icon: "🏥",
      title: "医療保険に加入しよう",
      description: "海外での万が一に備えて、医療保険への加入をお忘れなく。"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">必要な書類について</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center text-cyan-500">3ヶ月前</h2>
            {steps3MonthsBefore.map((step, index) => (
              <TimelineItem key={index} {...step} />
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center text-cyan-500">2ヶ月前</h2>
            {steps2MonthsBefore.map((step, index) => (
              <TimelineItem key={index} {...step} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RequiredDocuments;