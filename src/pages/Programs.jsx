import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Programs = () => {
  const purposes = [
    { id: 1, name: '短期留学', description: '1週間から3ヶ月の短期留学や、学校休暇中の語学研修', image: 'https://cdn.midjourney.com/7f44fccc-cf3f-4636-a0d4-5128b3583c3a/0_0.png' },
    { id: 2, name: '長期留学', description: '高度な語学力とスキルを身につける3ヶ月以上の長期留学', image: 'https://cdn.midjourney.com/3e0ea157-2368-4536-9664-c6151c7062a1/0_1.png' },
    { id: 3, name: 'ワーホリ', description: '学び・働く・旅する。現地で自由に過ごせる！', image: 'https://cdn.midjourney.com/12529148-14bd-4771-8422-9a4a922e385c/0_2.png', link: '/working-holiday' },
    { id: 4, name: '語学留学', description: '留学カウンセラーが貴方に合った留学プランをご提案', image: 'https://cdn.midjourney.com/057d6f2b-49d8-4d73-8022-b418122a5207/0_2.png' },
    { id: 5, name: '中高生留学', description: '自分と世界に出会える。YFUの留学プログラム', image: 'https://cdn.midjourney.com/68b9daa0-6db7-41af-90e4-1bd0e96c45d9/0_1.png' },
    { id: 6, name: '大学留学', description: '海外の大学で専門分野を学ぶ留学', image: 'https://cdn.midjourney.com/539fd312-eb0e-4f04-9cb1-5dc7a9b87f4a/0_1.png' },
    { id: 7, name: '親子留学', description: '1週間・2週間から参加可能！親子で海外に行けるプラン', image: 'https://cdn.midjourney.com/051d2ecc-55a8-44ce-962b-db2cac3753db/0_1.png' },
  ];

  const ages = [
    { id: 1, name: '大学生', description: '夏休み・春休みで行く短期留学から1年間の交換留学まで', image: 'https://cdn.midjourney.com/4a88ef18-d340-4b3f-8d09-1b5c82638387/0_2.png' },
    { id: 2, name: '社会人', description: 'キャリアアップ・キャリアチェンジを目指す留学', image: 'https://cdn.midjourney.com/ec623455-9c82-4dad-8838-6c0239e8d029/0_2.png' },
    { id: 3, name: '中高生', description: '自分と世界に出会える。YFUの留学プログラム', image: 'https://cdn.midjourney.com/4e984fcd-7efe-469e-a737-462a090f7848/0_3.png' },
    { id: 4, name: 'シニア', description: 'ゆっくり楽しく学べる！50歳からの語学留学や海外生活', image: 'https://cdn.midjourney.com/4fd3f3c5-85f9-4d61-886c-6f6544f82185/0_1.png' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <section id="purpose" className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">PURPOSE</h2>
          <p className="text-center mb-8 text-gray-600">目的から選ぶ</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {purposes.map((purpose) => (
              <Link 
                key={purpose.id} 
                to={purpose.link || "#"} 
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div>
                  <img
                    src={purpose.image}
                    alt={purpose.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{purpose.name}</h3>
                    <p className="text-gray-600 mb-4">{purpose.description}</p>
                    <span 
                      className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
                    >
                      もっと詳しく
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="age">
          <h2 className="text-3xl font-bold mb-12 text-center">AGE</h2>
          <p className="text-center mb-8 text-gray-600">年代から選ぶ</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ages.map((age) => (
              <Link 
                key={age.id} 
                to="#" 
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div>
                  <img
                    src={age.image}
                    alt={age.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{age.name}</h3>
                    <p className="text-gray-600 mb-4">{age.description}</p>
                    <span 
                      className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
                    >
                      詳細を見る
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;