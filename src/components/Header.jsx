import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/#contact', { replace: true });
  };

  return (
    <header className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
        IWITH International
      </Link>
      <nav className="hidden md:flex space-x-6">
        <Link to="/#about" className="text-gray-600 hover:text-gray-900">私たちについて</Link>
        <Link to="/#programs" className="text-gray-600 hover:text-gray-900">留学のプラン</Link>
        <Link to="/#reasons" className="text-gray-600 hover:text-gray-900">選ばれる理由</Link>
        <Link to="/#faq" className="text-gray-600 hover:text-gray-900">よくある質問</Link>
        <Link to="/#countries" className="text-gray-600 hover:text-gray-900">国</Link>
        <Link to="/#purposes" className="text-gray-600 hover:text-gray-900">留学の目的</Link>
        <Link to="/#testimonials" className="text-gray-600 hover:text-gray-900">体験談</Link>
      </nav>
      <Button onClick={handleContactClick}>お問い合わせ</Button>
    </header>
  );
};

export default Header;