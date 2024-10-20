import React from 'react';

export const TradingStepsSection = () => {
  const steps = [
    {
      number: 1,
      title: 'お問い合わせの送信',
      description: '口座開設のお申込はWEBで完結できます本人確認書類をご用意ください',
      icon: '✏️',
      note: '申込は最短5分から！'
    },
    {
      number: 2,
      title: 'カウンセリングのご案内',
      description: '最短翌営業日にメール、または5営業日後に郵送でログインIDをお届けします',
      icon: '✉️',
      note: '最短翌日'
    },
    {
      number: 3,
      title: 'カウンセリング',
      description: '初期設定後、必要な資金を入金して、お取引を始めましょう',
      icon: '💻',
    }
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          ＼ 口座開設もスマホで簡単！ ／
        </h2>
        <h3 className="text-4xl font-bold mb-12 text-center">
          お取引開始までの3ステップ
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-4">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex-1 relative">
              <div className="absolute -top-4 -left-4 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                {step.number}
              </div>
              {step.note && (
                <div className="absolute -top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  {step.note}
                </div>
              )}
              <div className="text-6xl mb-4 text-center">{step.icon}</div>
              <h4 className="text-xl font-bold mb-4 text-center">{step.title}</h4>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingStepsSection;