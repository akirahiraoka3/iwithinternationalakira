import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RequiredDocuments = () => {
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
    // ... 他の国のデータを同様に追加
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">ワーキングホリデーについて</h1>
        <p className="mb-4 text-center">
          ワーキングホリデーは、協定を結んでいる国の若者が、滞在国の文化や生活様式を理解し、
          国際親善を深めることを目的とした制度です。
        </p>
        <p className="mb-8 text-center">
          以下の表は各国のワーキングホリデー制度の概要と必要書類をまとめたものです。
        </p>
        <div className="overflow-x-auto">
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RequiredDocuments;