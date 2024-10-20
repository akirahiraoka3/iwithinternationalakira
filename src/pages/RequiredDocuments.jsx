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
  const steps1YearTo6MonthsBefore = [
    {
      icon: "📚",
      title: "留学に関する基礎知識を身につけよう！",
      description: "留学の種類、目的、メリット・デメリットなどを調べ、自分に合った留学プランを考えましょう。"
    },
    {
      icon: "🛂",
      title: "パスポートを申請しよう！",
      description: "パスポートの取得には時間がかかることがあります。早めに申請手続きを始めましょう。"
    }
  ];

  const steps4To5MonthsBefore = [
    {
      icon: "🏫",
      title: "学校を選ぼう",
      description: "留学先の国や都市、学校の特徴や評判を調べ、自分の目標に合った学校を選びましょう。"
    },
    {
      icon: "🏠",
      title: "滞在先を決定しよう",
      description: "ホームステイ、学生寮、アパートなど、自分に合った滞在先を検討し、決定しましょう。"
    }
  ];

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
    },
    {
      icon: "🏛️",
      title: "役所での手続きをしよう！",
      description: "住民票の移動や国民健康保険の手続きなど、必要な役所での手続きを済ませましょう。"
    },
    {
      icon: "💳",
      title: "留学中のお金を準備しよう",
      description: "海外で使えるクレジットカードの準備や、現地通貨の換金など、お金に関する準備をしましょう。"
    },
    {
      icon: "📱",
      title: "留学中の通信環境の準備をしよう！",
      description: "現地で使えるSIMカードの準備や、Wi-Fiルーターのレンタルなど、通信環境の準備をしましょう。"
    }
  ];

  const steps1MonthBefore = [
    {
      icon: "📋",
      title: "留学前の最終確認をしよう",
      description: "航空券、ビザ、保険証書、滞在先の情報など、重要書類の最終確認をしましょう。また、必要に応じて現地の緊急連絡先リストを作成しておきましょう。"
    }
  ];

  const steps1To2WeeksBefore = [
    {
      icon: "🧳",
      title: "準備書類・持ち物の最終確認しよう",
      description: "パスポート、ビザ、航空券、保険証書などの重要書類と、衣類や日用品などの持ち物を最終確認しましょう。荷物の重量制限も忘れずにチェックしてください。"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">渡航までの流れ・準備</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center text-cyan-500">1年前〜6ヶ月前</h2>
            {steps1YearTo6MonthsBefore.map((step, index) => (
              <TimelineItem key={index} {...step} />
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center text-cyan-500">4〜5ヶ月前</h2>
            {steps4To5MonthsBefore.map((step, index) => (
              <TimelineItem key={index} {...step} />
            ))}
          </div>

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

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center text-cyan-500">1ヶ月前</h2>
            {steps1MonthBefore.map((step, index) => (
              <TimelineItem key={index} {...step} />
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center text-cyan-500">1〜2週間前</h2>
            {steps1To2WeeksBefore.map((step, index) => (
              <TimelineItem key={index} {...step} />
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-cyan-500">留学へ出発！</h2>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RequiredDocuments;