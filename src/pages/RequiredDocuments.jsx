import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const RequiredDocuments = () => {
  const steps = [
    {
      title: "STEP1 お申込み手続き",
      content: "ワーキングホリデービザの申請に必要な書類を準備し、オンラインで申請を行います。必要書類には、有効なパスポート、財政証明書、健康診断書などが含まれます。申請書の記入には細心の注意を払い、すべての情報が正確であることを確認してください。"
    },
    {
      title: "STEP2 必要書類を揃える",
      content: "ビザ申請が承認されたら、渡航に向けて必要な書類を揃えます。これには、航空券の予約、海外旅行保険の加入、現地での宿泊先の手配などが含まれます。また、必要に応じて、現地の銀行口座開設や税金番号の取得の準備も行います。"
    },
    {
      title: "STEP3 渡航する",
      content: "すべての準備が整ったら、いよいよ渡航です。到着後は、入国審査を受け、ワーキングホリデービザの発行を受けます。その後、宿泊先へ向かい、現地での生活をスタートさせます。最初の数日は、現地の環境に慣れることに集中しましょう。"
    }
  ];

  const points = [
    {
      title: "海外で自由に過ごすことができる",
      content: "ワーキングホリデービザを利用すれば、最長1年間、海外で自由に働きながら滞在することができます。この期間中、現地の文化に深く触れ、語学力を向上させ、かけがえのない経験を積むことができます。",
      image: "/images/freedom.jpg"
    },
    {
      title: "自分なりの長期滞在ができる",
      content: "ワーキングホリデーでは、自分のペースで長期滞在を楽しむことができます。旅行だけでなく、現地での仕事や学習など、自分の目的に合わせた滞在プランを立てることができます。これにより、より深い文化理解と個人的成長が可能になります。",
      image: "/images/long-stay.jpg"
    },
    {
      title: "キャリアの幅を広げる体験ができる",
      content: "海外での就労経験は、グローバルな視点とスキルを身につける絶好の機会です。異なる文化や仕事環境に適応する能力は、将来のキャリアにおいて大きな強みとなります。また、国際的なネットワークを構築することで、将来の職業選択の幅も広がります。",
      image: "/images/career.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">ワーキングホリデーについて</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">ーこの流れでできるー</h2>
          <Accordion type="single" collapsible className="w-full">
            {steps.map((step, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="bg-cyan-500 text-white p-4 rounded-t-lg">
                  {step.title}
                </AccordionTrigger>
                <AccordionContent className="bg-gray-100 p-4 rounded-b-lg">
                  {step.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-center">POINT</h2>
          <h3 className="text-xl font-semibold mb-4 text-center">ワーキングホリデーでできること</h3>
          {points.map((point, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-8`}>
              <div className="w-1/2 p-4">
                <h4 className="text-2xl font-bold text-cyan-500 mb-4">{`0${index + 1} ${point.title}`}</h4>
                <p>{point.content}</p>
              </div>
              <div className="w-1/2">
                <img src={point.image} alt={point.title} className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>
          ))}
        </div>

          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-teal-500 text-white">
                <th className="border border-gray-300 p-2">国名</th>
                <th className="border border-gray-300 p-2">年齢</th>
                <th className="border border-gray-300 p-2">ワーキングホリデービザ</th>
                <th className="border border-gray-300 p-2">申請料金</th>
                <th className="border border-gray-300 p-2">必要書類</th>
                <th className="border border-gray-300 p-2">平均費用</th>
                <th className="border border-gray-300 p-2">保険加入</th>
                <th className="border border-gray-300 p-2">飛行時間</th>
                <th className="border border-gray-300 p-2">時差</th>
                <th className="border border-gray-300 p-2">気候</th>
                <th className="border border-gray-300 p-2">おすすめ時期</th>
                <th className="border border-gray-300 p-2">平均気温</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((country, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border border-gray-300 p-2">{country.name}</td>
                  <td className="border border-gray-300 p-2">{country.age}</td>
                  <td className="border border-gray-300 p-2">{country.workingHolidayVisa}</td>
                  <td className="border border-gray-300 p-2">{country.applicationFee}</td>
                  <td className="border border-gray-300 p-2">
                    <ul className="list-disc list-inside">
                      {country.requiredDocuments.map((doc, i) => (
                        <li key={i}>{doc}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="border border-gray-300 p-2">{country.averageCost}</td>
                  <td className="border border-gray-300 p-2">{country.insuranceCost}</td>
                  <td className="border border-gray-300 p-2">{country.flightTime}</td>
                  <td className="border border-gray-300 p-2">{country.timeZone}</td>
                  <td className="border border-gray-300 p-2">{country.climate}</td>
                  <td className="border border-gray-300 p-2">{country.recommendedSeason}</td>
                  <td className="border border-gray-300 p-2">{country.averageTemperature}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </main>
      <Footer />
    </div>
  );
};

export default RequiredDocuments;
