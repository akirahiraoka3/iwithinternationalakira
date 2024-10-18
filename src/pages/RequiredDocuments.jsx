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
          留学に必要な書類は、留学先の国や教育機関、プログラムの種類によって異なりますが、
          一般的に以下のような書類が必要となります：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>パスポート（有効期限が留学期間+6ヶ月以上あること）</li>
          <li>ビザ申請書類</li>
          <li>入学許可証または受入れ証明書</li>
          <li>成績証明書（英文）</li>
          <li>卒業証明書または在学証明書（英文）</li>
          <li>語学能力証明書（TOEFL、IELTS等）</li>
          <li>健康診断書</li>
          <li>財政証明書</li>
          <li>海外旅行保険証書</li>
        </ul>
        <p className="mb-4">
          これらの書類は、留学先の要件に応じて準備する必要があります。
          また、書類によっては取得に時間がかかるものもあるため、
          早めの準備が重要です。
        </p>
        <p>
          IWITH Internationalでは、必要書類の準備から申請までサポートいたしますので、
          安心して留学準備を進めることができます。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default RequiredDocuments;