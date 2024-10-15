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
      title: '留学のプラン',
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
    {
      title: '国',
      items: [
        { name: 'アメリカ', href: '/countries#usa' },
        { name: 'イギリス', href: '/countries#uk' },
        { name: 'オーストラリア', href: '/countries#australia' },
      ],
    },
    {
      title: '留学の目的',
      items: [
        { name: '語学力向上', href: '/#purposes' },
        { name: 'キャリアアップ', href: '/#purposes' },
        { name: '異文化理解', href: '/#purposes' },
      ],
    },
    {
      title: '体験談',
      items: [
        { name: '学生の声', href: '/#testimonials' },
        { name: '卒業生の声', href: '/#testimonials' },
        { name: '保護者の声', href: '/#testimonials' },
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
                <ul className="grid w-full gap-3 p-4 md:grid-cols-2 lg:grid-cols-3">
                  {item.items.map((subItem) => (
                    <li key={subItem.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={subItem.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">{subItem.name}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
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