import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">IWITH International</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#about" className="text-gray-600 hover:text-gray-900">私たちについて</a>
          <a href="#programs" className="text-gray-600 hover:text-gray-900">プログラム</a>
          <a href="#reasons" className="text-gray-600 hover:text-gray-900">選ばれる理由</a>
          <a href="#faq" className="text-gray-600 hover:text-gray-900">よくある質問</a>
          <a href="#countries" className="text-gray-600 hover:text-gray-900">国</a>
          <a href="#purposes" className="text-gray-600 hover:text-gray-900">留学の目的</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900">体験談</a>
        </nav>
        <Button>お問い合わせ</Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">海外インターンシップ・留学ならIWITH Internationalへ</h1>
          <p className="text-gray-600 mb-6">あなたの未来を一緒に築きましょう。</p>
          <Button size="lg" className="mr-4">無料相談を予約</Button>
          <Button variant="outline" size="lg">詳細を見る</Button>
        </div>
        <div className="md:w-1/2">
          <img src="/placeholder.svg" alt="IWITH International" className="w-full h-auto" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">私たちについて</h2>
          <p className="text-center max-w-2xl mx-auto">
            IWITH Internationalは、海外でのインターンシップや留学を通じて、グローバルな経験を積みたい方をサポートするエージェントです。
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">プログラム</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: '海外インターンシップ', description: '実践的なスキルを海外で身につけましょう。' },
            { title: '語学留学', description: '現地の文化を体験しながら語学力を向上。' },
            { title: '大学留学サポート', description: '海外大学への進学をトータルサポート。' },
          ].map((program, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Reasons to Choose Us Section */}
      <section id="reasons" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">選ばれる理由</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '豊富な経験', description: '10年以上の留学サポート実績' },
              { title: 'カスタマイズされたプラン', description: '一人ひとりのニーズに合わせたプログラム' },
              { title: '24時間サポート', description: '留学中も安心のサポート体制' },
            ].map((reason, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">よくある質問</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>留学の費用はどのくらいかかりますか？</AccordionTrigger>
            <AccordionContent>
              留学の費用は、プログラムの種類、期間、滞在先によって異なります。詳細は個別相談でご案内いたします。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>語学力が不安ですが大丈夫ですか？</AccordionTrigger>
            <AccordionContent>
              初心者向けのプログラムもご用意しています。事前の語学研修も含めたプランをご提案いたします。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>ビザの取得はサポートしてもらえますか？</AccordionTrigger>
            <AccordionContent>
              はい、ビザ申請に必要な書類の準備から申請手続きまでサポートいたします。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Countries Section */}
      <section id="countries" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">国</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['アメリカ', 'イギリス', 'オーストラリア', 'カナダ', 'ニュージーランド', 'ドイツ', 'フランス', 'スペイン'].map((country, index) => (
              <Card key={index}>
                <CardContent className="flex items-center justify-center h-24">
                  <p className="text-lg font-semibold">{country}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Study Abroad Purposes Section */}
      <section id="purposes" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">留学の目的</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: '語学力向上', description: 'ネイティブスピーカーとの日常会話で実践的な語学力を身につける' },
            { title: 'キャリアアップ', description: '国際的な職場経験を通じて、グローバルなキャリアを築く' },
            { title: '異文化理解', description: '多様な文化に触れ、国際感覚を養う' },
          ].map((purpose, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{purpose.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{purpose.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">体験談</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">"IWITH Internationalのおかげで、憧れの海外インターンシップを経験できました。"</p>
                <p className="font-bold">- 佐藤花子さん</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">"親身なサポートで安心して留学生活を送ることができました。"</p>
                <p className="font-bold">- 鈴木太郎さん</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">IWITH International</h3>
              <p className="text-sm">© 2024 IWITH International. All rights reserved.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">プログラム</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-gray-300">海外インターンシップ</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300">語学留学</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300">大学留学</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">サポート</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-gray-300">よくある質問</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300">お問い合わせ</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300">プライバシーポリシー</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">フォローする</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
