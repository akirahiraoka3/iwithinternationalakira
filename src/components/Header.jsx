import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">IWITH International</div>
        <div className="space-x-4">
          <Button variant="ghost">プログラム</Button>
          <Button variant="ghost">体験談</Button>
          <Button variant="ghost">私たちについて</Button>
          <Button>お問い合わせ</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
