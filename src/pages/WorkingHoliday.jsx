import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { WorkingHolidaySteps } from '../components/WorkingHolidaySteps';

const WorkingHoliday = () => {
  const points = [
    {
      title: "海外で自由に過ごすことができる",
      content: "ワーキングホリデービザを利用すれば、最長1年間、海外で自由に働きながら滞在することができます。この期間中、現地の文化に深く触れ、語学力を向上させ、かけがえのない経験を積むことができます。",
      image: "https://cdn.midjourney.com/0b4c925c-1238-451d-9c2c-4f165cd60cb4/0_1.png"
    },
    {
      title: "働きながら長期滞在することができる",
      content: "ワーキングホリデーでは、自分のペースで長期滞在を楽しむことができます。旅行だけでなく、現地での仕事や学習など、自分の目的に合わせた滞在プランを立てることができます。これにより、より深い文化理解と個人的成長が可能になります。",
      image: "https://cdn.midjourney.com/7dd391fc-8fc4-407e-be42-fe8e251f67e5/0_0.png"
    },
    {
      title: "よりリアルな文化の違いを体験できる",
      content: "海外で実際に生活することで、旅行や短期滞在では体験できないような文化の違いや生活様式を肌で感じることができます。また、現地の人々との交流を通じて、その国の本当の姿を知ることができます。このような経験は視野を広げ、国際的なキャリアアップにもつながる可能性があります。",
      image: "https://cdn.midjourney.com/c53a15ae-f26d-48c1-a633-e56f127a6c27/0_1.png"
    }
  ];

  const countries = [
    {
      name: 'オーストラリア',
      age: '18～30歳',
      workingHolidayVisa: '申請可',
      applicationFee: '5,000円',
      requiredDocuments: [
        'パスポート（6ヶ月以上の有効期限）',
        '18歳以上であることの証明',
        '高校卒業以上の学歴証明書',
        '銀行残高証明書（40万円以上）',
        '無犯罪証明書',
        '英文履歴書',
      ],
      averageCost: '約80万円（2023年3月時点）',
      insuranceCost: 'ビザ取得時に加入必須',
      flightTime: '約9時間',
      timeZone: '日本より1～2時間進んでいる',
      climate: '南半球に位置し、日本と季節が逆',
      recommendedSeason: '9月～11月',
      averageTemperature: '夏季25～30度、冬季15～20度',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="relative h-64 md:h-96 mb-8">
            <img
              src="https://cdn.midjourney.com/d0924352-edc0-4e76-95ad-a4ea35acd8ab/0_1.png"
              alt="Working Holiday"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                WORKING HOLIDAY
                <span className="block text-xl md:text-2xl mt-2">ワーキングホリデー</span>
              </h1>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">WHAT</h2>
            <h3 className="text-xl font-semibold mb-4 text-center">ワーキングホリデー（ワーホリ）とは？</h3>
            <p className="mb-4">
              2国間の協定により、それぞれの国の文化を理解し交流する機会を提供するため、一定の条件での長期滞在を相互に認めている制度です。
              それぞれの国ごとに一生に一度18歳～30歳に限定して使え、海外に滞在して現地での生活を自由に楽しむことができます。
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>学校で学ぶだけではなく働いたり旅をしたりと現地での過ごし方が自由にできます</li>
              <li>年齢制限があり、通常18歳から30歳までの若者が対象ですが、国によっては35歳まで認められています。</li>
            </ul>
            <p>
              観光ビザでは体験できないような、その国の文化や生活様式を深く知ることができるため、
              若者の間で人気のプログラムとなっています。
            </p>
          </div>
        </section>

        <h2 className="text-2xl font-semibold mb-8 text-center">ーワーキングホリデーはこの流れー</h2>
        <WorkingHolidaySteps />

        <h2 className="text-2xl font-semibold mb-8 text-center">国別情報</h2>
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

      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">その他ご不明な点は</h2>
          <h3 className="text-3xl font-bold mb-6">お気軽にお問い合わせください</h3>
          <p className="text-gray-600 mb-8">
            その時だけにしか出会えない最高の人たちと最高の瞬間を
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-full px-8 py-2">
              本申し込みをする
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-gray-100 rounded-full px-8 py-2">
              お問い合わせをする
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WorkingHoliday;
