import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RequiredDocuments = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">必要な書類について</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">一般的な留学に必要な書類</h2>
          <ul className="list-disc list-inside">
            <li>パスポート（有効期限が留学期間+6ヶ月以上あること）</li>
            <li>ビザ申請書</li>
            <li>証明写真</li>
            <li>入学許可証</li>
            <li>財政証明書（銀行残高証明書など）</li>
            <li>健康診断書</li>
            <li>海外旅行保険証書</li>
            <li>航空券予約確認書</li>
            <li>宿泊先の情報（ホームステイや学生寮の場合は受入れ証明書）</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">注意点</h2>
          <ul className="list-disc list-inside">
            <li>必要な書類は留学先の国や教育機関によって異なる場合があります。</li>
            <li>書類は英語または現地語で準備する必要があります。</li>
            <li>書類の準備には時間がかかることがあるので、早めに準備を始めましょう。</li>
            <li>原本が必要な書類と、コピーでよい書類があるので注意が必要です。</li>
            <li>ビザの申請は、通常、留学開始の3ヶ月前から可能になります。</li>
          </ul>
        </section>

        <p className="text-lg font-semibold">
          具体的な必要書類や準備の流れについては、留学先や留学プログラムによって異なりますので、
          詳細は各留学プログラムのページをご確認いただくか、カウンセラーにお問い合わせください。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default RequiredDocuments;