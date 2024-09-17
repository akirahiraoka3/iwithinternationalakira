import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ReasonsSection />
      <FAQSection />
      <CountriesSection />
      <PurposesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

const Header = () => (
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
      <a href="#contact" className="text-gray-600 hover:text-gray-900">お問い合わせ</a>
    </nav>
    <Button>お問い合わせ</Button>
  </header>
);

const HeroSection = () => (
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
);

const AboutSection = () => (
  <section id="about" className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">私たちについて</h2>
      <p className="text-center max-w-2xl mx-auto">
        IWITH Internationalは、海外でのインターンシップや留学を通じて、グローバルな経験を積みたい方をサポートするエージェントです。
      </p>
    </div>
  </section>
);

const ProgramsSection = () => (
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
);

const ReasonsSection = () => (
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
);

const FAQSection = () => (
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
);

const CountriesSection = () => (
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
);

const PurposesSection = () => (
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
);

const TestimonialsSection = () => (
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
);

const ContactSection = () => (
  <section id="contact" className="container mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h2>
    <form className="max-w-md mx-auto">
      <div className="mb-4">
        <Input type="text" placeholder="お名前" required />
      </div>
      <div className="mb-4">
        <Input type="email" placeholder="メールアドレス" required />
      </div>
      <div className="mb-4 space-y-2">
        <Label>興味のあるプログラム</Label>
        <div className="flex items-center space-x-2">
          <Checkbox id="internship" />
          <Label htmlFor="internship">海外インターンシップ</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="workingholiday" />
          <Label htmlFor="workingholiday">ワーキングホリデー</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="university" />
          <Label htmlFor="university">大学進学</Label>
        </div>
      </div>
      <div className="mb-4">
        <Textarea placeholder="メッセージ" className="w-full" rows={4} />
      </div>
      <Button type="submit" className="w-full">送信</Button>
    </form>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-100 py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm text-gray-600">© 2024 IWITH International. All rights reserved.</p>
    </div>
  </footer>
);

export default Index;
