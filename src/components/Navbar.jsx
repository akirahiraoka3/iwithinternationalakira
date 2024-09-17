import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600">
      <ul className="flex justify-center p-0 m-0">
        <li className="mx-5"><Link to="#about" className="text-white no-underline text-lg hover:underline">私たちについて</Link></li>
        <li className="mx-5"><Link to="#programs" className="text-white no-underline text-lg hover:underline">プログラム</Link></li>
        <li className="mx-5"><Link to="#testimonials" className="text-white no-underline text-lg hover:underline">体験談</Link></li>
        <li className="mx-5"><Link to="#contact" className="text-white no-underline text-lg hover:underline">お問い合わせ</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
