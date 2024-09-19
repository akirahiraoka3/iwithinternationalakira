import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => (
  <header className="container mx-auto px-4 py-4 flex justify-between items-center">
    <div className="text-2xl font-bold">IWITH International</div>
    <nav className="hidden lg:flex items-center space-x-2">
      <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">私たちについて</a>
      <a href="#programs" className="text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">プログラム</a>
      <a href="#reasons" className="text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">選ばれる理由</a>
      <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">よくある質問</a>
      <a href="#countries" className="text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">国</a>
      <a href="#purposes" className="text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">留学の目的</a>
      <a href="#testimonials" className="text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">体験談</a>
    </nav>
    <Button>お問い合わせ</Button>
  </header>
);

export default Header;
