import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const RequiredDocuments = () => {
  const steps = [
    {
      title: "STEP1 申請条件を確認",
      content: "ワーキングホリデービザは国によって申請に必要な条件が異なります。条件には年齢制限や健康状態、十分な所持金などが含まれます。条件を満たしていないとビザを取得することができないので、必ず事前に自国の申請条件を確認しておきましょう。"
    },
    {
      title: "STEP2 必要書類を揃える",
      content: "申請条件を確認できたら、次に申請に必要になる書類を揃えましょう。申請には有効期限が十分なパスポートや英文の残高証明書などが必要になります。こちらも各国で異なりすぐに揃えることができないものばかりなので、事前に確認し準備しておきましょう。"
    },
    {
      title: "STEP3 申請する",
      content: "必要書類を揃えたら実際に申請をします。申請から取得までの手順はオンライン申請、書類郵送、面接、健康診断など国によって様々です。また、各国申請期間や指定方法も異なるので必ず確認してから申請するようにしましょう。"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">必要な書類について</h1>
        
        <h2 className="text-2xl font-semibold mb-4 text-center">ビザ取得までの流れ</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {steps.map((step, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="bg-cyan-500 text-white p-4 rounded-t-lg">
                {step.title}
              </AccordionTrigger>
              <AccordionContent className="bg-gray-100 p-4 rounded-b-lg">
                {step.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="mt-8 text-lg font-semibold">
          具体的な必要書類や準備の流れについては、留学先や留学プログラムによって異なりますので、
          詳細は各留学プログラムのページをご確認いただくか、カウンセラーにお問い合わせください。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default RequiredDocuments;