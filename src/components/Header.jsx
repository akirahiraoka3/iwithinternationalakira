import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const menuItems = [
    {
      title: '留学プラン',
      items: [
        { name: '海外インターンシップ', href: '/internship' },
        { name: '短期・長期留学', href: '/language-study' },
        { name: 'ワーキングホリデー', href: '/university-support' },
      ],
    },
    {
      title: '留学を知る',
      items: [
        { name: 'ワーキングホリデーとは？', href: '/learn-about-study-abroad#working-holiday' },
        { name: '必要な書類は？', href: '/learn-about-study-abroad#required-documents' },
        { name: '長期留学って？', href: '/learn-about-study-abroad#long-term-study' },
        { name: '短期留学って？', href: '/learn-about-study-abroad#short-term-study' },
        { name: 'お値段・費用は？', href: '/learn-about-study-abroad#costs' },
      ],
    },
    {
      title: '選ばれる理由',
      items: [
        { name: '豊富な経験', href: '/reasons#experience' },
        { name: '業界最安値・手数料０円', href: '/reasons#cost' },
        { name: '24時間サポート', href: '/reasons#support' },
        { name: '帰国後の就職サポート', href: '/reasons#career' },
        { name: '渡航後のお仕事・就職サポート', href: '/reasons#overseas-career' },
        { name: '迅速な手続き', href: '/reasons#quick-process' },
      ],
    },
    {
      title: 'よくある質問',
      items: [
        { name: '費用について', href: '/faq#cost' },
        { name: '準備について', href: '/faq#preparation' },
        { name: '滞在先について', href: '/faq#accommodation' },
      ],
    },
  ];

  return (
    <header className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
        IWITH International
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-screen bg-white shadow-lg">
                  <div className="container mx-auto py-4 px-4">
                    <div className="flex justify-center">
                      <div className="grid grid-cols-3 gap-4">
                        {item.items.map((subItem) => (
                          <NavigationMenuLink asChild key={subItem.name}>
                            <Link
                              to={subItem.href}
                              className={cn(
                                "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                "text-lg font-medium"
                              )}
                            >
                              {subItem.name}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Button onClick={() => window.location.href = '/#contact'}>お問い合わせ</Button>
    </header>
  );
};

export default Header;