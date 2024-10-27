import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HeroSection = () => {
  return (
    <section className="relative h-96">
      <img
        src="https://cdn.midjourney.com/539fd312-eb0e-4f04-9cb1-5dc7a9b87f4a/0_1.png"
        alt="Students on a university campus"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white text-center">
          夢の実現へ<br />高校・大学留学サポート
        </h1>
      </div>
    </section>
  );
};

const ContentSection = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">グローバルな教育環境で成長</h2>
        <div className="flex space-x-8">
          <p className="flex-1">
            高校・大学留学は、世界トップレベルの教育を受けながら、多様な文化や価値観に触れる絶好の機会です。
            海外の教育機関で学ぶことで、グローバルな視点と国際競争力を身につけることができます。
            また、留学経験は将来のキャリアにも大きな影響を与え、国際的な舞台で活躍する可能性を広げます。
          </p>
          <img 
            src="https://cdn.midjourney.com/4a88ef18-d340-4b3f-8d09-1b5c82638387/0_2.png" 
            alt="Students in a university classroom" 
            className="w-1/3 object-cover" 
          />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">充実した留学サポート</h2>
        <p className="mb-4">
          IWITH Internationalは、高校留学から大学留学まで、あなたの目標に合わせた留学プランを提供します。
          学校選びから出願手続き、ビザ申請、現地でのサポートまで、留学のすべての段階で専門的なサポートを提供します。
          また、留学前の準備から帰国後のキャリアサポートまで、一貫したサポート体制を整えています。
        </p>
        <img 
          src="https://cdn.midjourney.com/e27dcce8-dc2c-42b6-a5a3-a07ab832aa25/0_1.png" 
          alt="Support team helping students" 
          className="w-full h-64 object-cover mb-4" 
        />
        <p className="text-sm italic">経験豊富なアドバイザーが、あなたの留学の夢の実現をサポートします。</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">留学後のキャリア支援</h2>
        <div className="flex space-x-8">
          <p className="flex-1">
            留学は、学びの機会だけでなく、将来のキャリアにも大きな影響を与えます。
            IWITH Internationalでは、留学後のキャリアプランニングもサポートしています。
            グローバル企業とのネットワークを活かし、インターンシップや就職の機会も提供しています。
            留学で得た経験と知識を、将来のキャリアで最大限に活かせるようサポートします。
          </p>
          <img 
            src="https://cdn.midjourney.com/ec623455-9c82-4dad-8838-6c0239e8d029/0_2.png" 
            alt="Career counseling session" 
            className="w-1/3 object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

const UniversitySupport = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ContentSection />
      <Footer />
    </div>
  );
};

export default UniversitySupport;