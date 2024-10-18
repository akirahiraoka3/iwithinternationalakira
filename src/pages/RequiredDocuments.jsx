import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RequiredDocuments = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">必要な書類は？</h1>
        <p className="mb-4">
          留学に必要な書類は、留学先の国や留学プログラムによって異なりますが、
          一般的に以下のような書類が必要となります：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>パスポート（有効期限が十分にあるもの）</li>
          <li>ビザ申請書類</li>
          <li>入学許可証または受入れ証明書</li>
          <li>財政証明書（銀行残高証明書など）</li>
          <li>健康診断書・予防接種証明書</li>
          <li>成績証明書（英文）</li>
          <li>推薦状（必要な場合）</li>
          <li>英語能力証明書（TOEFL、IELTSなど）</li>
        </ul>
        <p>
          具体的に必要な書類は、留学先や留学プログラムによって異なるため、
          早めに確認し、準備することが重要です。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default RequiredDocuments;