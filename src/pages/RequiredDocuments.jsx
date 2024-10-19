import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RequiredDocuments = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">必要な書類について</h1>
        <p className="mb-4">
          留学に必要な書類は、留学先の国や留学プログラムによって異なります。一般的に必要な書類には以下のようなものがあります：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>パスポート（有効期限が留学期間+6ヶ月以上あること）</li>
          <li>ビザ申請書類</li>
          <li>入学許可証または受入れ証明書</li>
          <li>財政証明書（留学期間中の資金が十分にあることを証明）</li>
          <li>健康診断書・予防接種証明書</li>
          <li>成績証明書（学校によって要求される場合）</li>
          <li>語学能力証明書（TOEFL、IELTSなど）</li>
        </ul>
        <p className="mb-4">
          具体的な必要書類や手続きの詳細については、留学先の学校や留学エージェントに確認することをおすすめします。
          早めに準備を始め、締切に余裕を持って提出できるようにしましょう。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default RequiredDocuments;