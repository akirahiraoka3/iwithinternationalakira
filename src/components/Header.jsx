import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => (
  <header className="container mx-auto px-4 py-4 flex justify-between items-center">
    <div className="text-2xl font-bold">IWITH International</div>
    <nav className="hidden md:flex space-x-6">
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
);

export default Header;
