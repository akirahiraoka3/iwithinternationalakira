import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Programs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">プログラム詳細</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: '海外インターンシップ', description: '実践的なスキルを海外で身につけ、グローバルなキャリアを築くチャンスです。' },
            { title: '語学留学', description: '現地の文化に浸りながら、効果的に語学力を向上させるプログラムです。' },
            { title: '大学留学サポート', description: '海外大学への進学をトータルサポート。願書作成から入学手続きまでサポートします。' },
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
      </main>
      <Footer />
    </div>
  );
};

export default Programs;