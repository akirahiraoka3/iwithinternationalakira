import React from 'react';
import { Image } from "@/components/ui/image";

function Header() {
  return (
    <header className="bg-white p-5 text-center">
      <Image src="/logo.png" alt="IWITH International Logo" className="w-64 mx-auto" />
    </header>
  );
}

export default Header;