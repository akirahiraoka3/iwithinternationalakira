import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

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

export const WorkingHolidaySteps = () => {
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
          title: "語学学校",
          description: "ビザの申請が終わったら現地で通う学校を決め、入学手続きを行いましょう。学校によって授業料やカリキュラムの種類、学校の規模、日本人比率などが異なります。自分の学びたいことやワーキングホリデーの目的に合わせて選びましょう。"
        },
        {
          icon: "🏠",
          title: "滞在先",
          description: "現地での滞在先はあらかじめ出発前に手配しておくと非常に便利です。滞在先としては主にホームステイやシェアハウス、通う学校の学生寮などがあります。それぞれメリット・デメリットがあるので自分に合う滞在方法を確認しましょう。"
        },
        {
          icon: "✈️",
          title: "航空券・保険",
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

  return (
    <div>
      {steps.map((step, index) => (
        <div key={index} className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">{step.title}</h3>
          {step.content.map((item, itemIndex) => (
            <TimelineItem
              key={itemIndex}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      ))}
    </div>
  );
};