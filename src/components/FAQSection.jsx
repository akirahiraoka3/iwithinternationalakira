import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const FAQSection = () => (
  <section id="faq" className="container mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold mb-8 text-center">よくある質問</h2>
    <div className="space-y-6 max-w-2xl mx-auto">
      {[
        {
          question: '留学にはどのくらいの費用がかかりますか？',
          answer: '留学の費用は、プログラムの種類、期間、滞在先によって大きく異なります。短期の語学留学では数十万円から、長期の大学留学では年間数百万円程度かかることがあります。詳細な費用については、個別相談で具体的なプランに基づいてご案内いたします。'
        },
        {
          question: '英語が苦手でも留学できますか？',
          answer: 'はい、英語が苦手な方でも留学は可能です。初心者向けの語学プログラムや、現地でのサポートが充実したプログラムをご用意しています。また、出発前の語学準備サポートも行っていますので、安心して留学を始められます。'
        },
        {
          question: '留学先での宿泊施設はどのようなものがありますか？',
          answer: 'ホームステイ、学生寮、シェアハウス、アパートなど、様々な選択肢があります。それぞれメリット・デメリットがありますので、ご希望や予算に応じて最適な滞在先をご提案いたします。'
        },
        {
          question: '留学中のサポート体制はどうなっていますか？',
          answer: '24時間対応の緊急連絡先を設けており、現地スタッフや提携先の学校とも連携して、学習面や生活面でのサポートを提供しています。定期的なチェックインを行い、問題が発生した場合は迅速に対応いたします。'
        }
      ].map((faq, index) => (
        <Card key={index}>
          <CardContent className="pt-6">
            <p className="font-bold mb-2">Q: {faq.question}</p>
            <p>A: {faq.answer}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default FAQSection;