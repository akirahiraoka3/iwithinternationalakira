import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import StepSection from '@/components/working-holiday/StepSection';

const WorkingHoliday = () => {
  const steps = [
    {
      title: "STEP1 ビザを申請する",
      content: [
        {
          icon: "🛂",
          title: "行きたい国の申請条件を確認する",
          description: "ワーキングホリデービザは国によって申請に必要な条件が異なります。条件には年齢制限や健康状態、十分な所持金などが含まれます。条件を満たしていないとビザを取得することができないので、必ず事前に行きたい国の申請条件を確認しておきましょう。"
        },
        {
          icon: "📄",
          title: "必要書類を準備する",
          description: "申請には有効期限が十分なパスポートや英文の残高証明書などが必要になります。こちらも各国で異なりすぐに揃えることができないものばかりなので、事前に確認し準備しておきましょう。"
        },
        {
          icon: "✍️",
          title: "申請手続きをする",
          description: "必要書類を揃えたら実際に申請をします。申請から取得までの手順はオンライン申請、書類郵送、面接、健康診断など国によって様々です。また、各国申請期間や抽選方法も異なるので必ず確認してから申請するようにしましょう。"
        }
      ]
    },
    {
      title: "STEP2 必要な手配申請をする",
      content: [
        {
          icon: "🏫",
          title: "語学学校の手配",
          description: "ビザの申請が終わったら現地で通う学校を決め、入学手続きを行いましょう。学校によって授業料やカリキュラムの種類、学校の規模、日本人比率などが異なります。自分の学びたいことやワーキングホリデーの目的に合わせて選びましょう。"
        },
        {
          icon: "🏠",
          title: "滞在先の手配",
          description: "現地での滞在先はあらかじめ出発前に手配しておくと非常に便利です。滞在先としては主にホームステイやシェアハウス、通う学校の学生寮などがあります。それぞれメリット・デメリットがあるので自分に合う滞在方法を確認しましょう。"
        },
        {
          icon: "✈️",
          title: "航空券・保険の手配",
          description: "航空券の購入、保険の加入も余裕を持って早めに済ませておきましょう。航空券はのちの予定変更や滞在延長の備えて片道航空券のみを用意しておくことをおすすめします。保険は現地でトラブルが起きたときのために必ず加入しておきましょう。"
        }
      ]
    },
    {
      title: "STEP3 渡航した後に",
      content: [
        {
          icon: "📝",
          title: "在留届提出",
          description: "ワーキングホリデーに限らず、外国に3ヵ月以上滞在する場合は、現地の日本大使館か総領事館に「在留届」を提出することが法律で義務付けられています。在留届を提出することにより、緊急事態の際、日本大使館や総領事館が、安否確認や緊急連絡がしやすくなります。現地に到着したら必ず在留届を提出しましょう。"
        },
        {
          icon: "🏦",
          title: "銀行口座開設",
          description: "銀行口座を開設しないと給料の受け取りや家賃の支払い、日本からの送金をすることができません。到着してから3ヶ月を過ぎると開設に必要になる書類が増える場合があるので到着後早めに手続きをすることをおすすめします。"
        },
        {
          icon: "💼",
          title: "仕事探し",
          description: "現地で働くためには仕事探しをしなくてはなりません。仕事の探し方は友人紹介やインターネットの求人サイト、掲示板などがあります。その中でも一番効率的な方法は友人紹介です。少しでも信用できる人を雇いたい雇用主からすると、紹介というだけで信用度が上がり採用される確率が高くなります。そのため、最初は語学学校に通って人脈を広げることをおすすめします。"
        }
      ]
    }
  ];

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
    // ... 他の国のデータを同様に追加
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

        <h2 className="text-2xl font-semibold mb-8 text-center">ワーキングホリデーでできること</h2>
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
          <StepSection key={index} step={step} />
        ))}

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
      <Footer />
    </div>
  );
};

export default WorkingHoliday;
