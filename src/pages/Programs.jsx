import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";

const purposes = [
  { id: 1, name: '短期留学', description: '1週間から3ヶ月の短期留学や、学校休暇中の語学研修', image: '/images/short-term-study.jpg' },
  { id: 2, name: '長期留学', description: '高度な語学力とスキルを身につける3ヶ月以上の長期留学', image: '/images/long-term-study.jpg' },
  { id: 3, name: 'ワーホリ', description: '学び・働く・旅する。現地で自由に過ごせる！', image: '/images/work-holiday.jpg' },
  { id: 4, name: '語学留学', description: '留学カウンセラーが貴方に合った留学プランをご提案', image: '/images/language-study.jpg' },
  { id: 5, name: '中高生留学', description: '自分と世界に出会える。YFUの留学プログラム', image: '/images/high-school-study.jpg' },
  { id: 6, name: '大学留学', description: '海外の大学で専門分野を学ぶ留学', image: '/images/university-study.jpg' },
  { id: 7, name: '親子留学', description: '1週間・2週間から参加可能！親子で海外に行けるプラン', image: '/images/family-study.jpg' },
  { id: 8, name: '2ヶ国留学', description: '英語とアジア言語を同時に学べるプラン', image: '/images/multi-country-study.jpg' },
];

const ages = [
  { id: 1, name: '大学生', description: '夏休み・春休みで行く短期留学から1年間の交換留学まで', image: '/images/university-student.jpg' },
  { id: 2, name: '社会人', description: 'キャリアアップ・キャリアチェンジを目指す留学', image: '/images/working-adult.jpg' },
  { id: 3, name: '中高生', description: '自分と世界に出会える。YFUの留学プログラム', image: '/images/high-school-student.jpg' },
  { id: 4, name: 'シニア', description: 'ゆっくり楽しく学べる！50歳からの語学留学や海外生活', image: '/images/senior.jpg' },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">PURPOSE</h2>
          <p className="text-center mb-8 text-gray-600">目的から選ぶ</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {purposes.map((purpose) => (
              <Card key={purpose.id} className="overflow-hidden">
                <img src={purpose.image} alt={purpose.name} className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{purpose.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{purpose.description}</p>
                  <a href="#" className="mt-2 inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">詳細を見る</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">AGE</h2>
          <p className="text-center mb-8 text-gray-600">年代から選ぶ</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ages.map((age) => (
              <Card key={age.id} className="overflow-hidden">
                <img src={age.image} alt={age.name} className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{age.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{age.description}</p>
                  <a href="#" className="mt-2 inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">詳細を見る</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;