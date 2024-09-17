import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

function MainContent() {
  return (
    <main>
      <section className="hero bg-cover bg-center text-white py-24 px-5 text-center" style={{backgroundImage: "url('/hero-image.jpg')"}}>
        <h1 className="text-5xl mb-5">海外インターンシップ・留学ならIWITH Internationalへ</h1>
        <p className="text-2xl">あなたの未来を一緒に築きましょう。</p>
      </section>

      <section id="about" className="py-16 px-5 text-center">
        <h2 className="text-3xl mb-10 text-blue-600">私たちについて</h2>
        <p className="max-w-2xl mx-auto">
          IWITH Internationalは、海外でのインターンシップや留学を通じて、グローバルな経験を積みたい方をサポートするエージェントです。
        </p>
      </section>

      <section id="programs" className="py-16 px-5 text-center bg-gray-100">
        <h2 className="text-3xl mb-10 text-blue-600">プログラム</h2>
        <div className="flex justify-center flex-wrap">
          <div className="w-64 m-5 text-left">
            <h3 className="text-xl text-blue-800 mb-2">海外インターンシップ</h3>
            <p>実践的なスキルを海外で身につけましょう。</p>
          </div>
          <div className="w-64 m-5 text-left">
            <h3 className="text-xl text-blue-800 mb-2">語学留学</h3>
            <p>現地の文化を体験しながら語学力を向上。</p>
          </div>
          <div className="w-64 m-5 text-left">
            <h3 className="text-xl text-blue-800 mb-2">大学留学サポート</h3>
            <p>海外大学への進学をトータルサポート。</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 px-5 text-center">
        <h2 className="text-3xl mb-10 text-blue-600">体験談</h2>
        <div className="flex justify-center flex-wrap">
          <div className="w-64 m-5 text-left">
            <p className="mb-2">"IWITH Internationalのおかげで、憧れの海外インターンシップを経験できました。"</p>
            <p className="font-bold">- 佐藤花子さん</p>
          </div>
          <div className="w-64 m-5 text-left">
            <p className="mb-2">"親身なサポートで安心して留学生活を送ることができました。"</p>
            <p className="font-bold">- 鈴木太郎さん</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-5 text-center bg-gray-100">
        <h2 className="text-3xl mb-10 text-blue-600">お問い合わせ</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <Input type="text" placeholder="お名前" required />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="メールアドレス" required />
          </div>
          <div className="mb-4 flex flex-col items-start">
            <Label className="mb-2">興味のあるプログラム</Label>
            <div className="flex items-center space-x-2 mb-2">
              <Checkbox id="internship" />
              <Label htmlFor="internship">海外インターンシップ</Label>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Checkbox id="workingholiday" />
              <Label htmlFor="workingholiday">ワーキングホリデー</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="university" />
              <Label htmlFor="university">大学進学</Label>
            </div>
          </div>
          <Button type="submit">送信</Button>
        </form>
      </section>
    </main>
  );
}

export default MainContent;
