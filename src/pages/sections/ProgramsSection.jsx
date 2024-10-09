import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ProgramsSection = () => (
  <section id="programs" className="container mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold mb-8 text-center">プログラム</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: '海外インターンシップ', description: '実践的なスキルを海外で身につけましょう。' },
        { title: '語学留学', description: '現地の文化を体験しながら語学力を向上。' },
        { title: '大学留学サポート', description: '海外大学への進学をトータルサポート。' },
      ].map((program, index) => (
        <Card key={index} className="transition-transform duration-300 hover:scale-105">
          <CardHeader>
            <CardTitle>{program.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{program.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
    <div className="text-center mt-8">
      <Link to="/programs">
        <Button>プログラム詳細を見る</Button>
      </Link>
    </div>
  </section>
);