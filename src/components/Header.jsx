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
        { name: '海外インターンシップ', href: '/internship', description: '実践的なスキルを身につけながら、グローバルな環境で働く経験を積む' },
        { name: '短期・長期留学', href: '/language-study', description: '語学力向上と異文化体験を通じて、グローバルな視野を広げる' },
        { name: 'ワーキングホリデー', href: '/university-support', description: '海外で働きながら、その国の文化や生活を体験する' },
      ],
    },
    {
      title: '留学を知る',
      items: [
        { name: 'ワーキングホリデーとは？', href: '/learn-about-study-abroad#working-holiday', description: 'ワーキングホリデーの基本情報と魅力' },
        { name: '必要な書類は？', href: '/learn-about-study-abroad#required-documents', description: '留学に必要な書類の準備ガイド' },
        { name: '長期留学って？', href: '/learn-about-study-abroad#long-term-study', description: '長期留学の特徴と利点' },
        { name: '短期留学って？', href: '/learn-about-study-abroad#short-term-study', description: '短期留学の魅力と効果的な活用法' },
        { name: 'お値段・費用は？', href: '/learn-about-study-abroad#costs', description: '留学にかかる費用の詳細と資金計画' },
        { name: '高校留学って？', href: '/learn-about-study-abroad#high-school', description: '高校生向け留学プログラムの特徴と魅力' },
        { name: '大学留学って？', href: '/learn-about-study-abroad#university', description: '大学生向け留学プログラムの概要と利点' },
      ],
    },
    {
      title: '選ばれる理由',
      items: [
        { name: '豊富な経験', href: '/reasons#experience', description: '10年以上の留学サポート実績' },
        { name: '業界最安値・手数料０円', href: '/reasons#cost', description: 'コストを抑えた留学プランの提供' },
        { name: '24時間サポート', href: '/reasons#support', description: '留学中も安心のサポート体制' },
        { name: '帰国後の就職サポート', href: '/reasons#career', description: 'グローバルな経験を活かした就職支援' },
        { name: '渡航後のお仕事・就職サポート', href: '/reasons#overseas-career', description: '海外でのキャリアスタートを応援' },
        { name: '迅速な手続き', href: '/reasons#quick-process', description: 'スムーズな留学準備をサポート' },
      ],
    },
    {
      title: 'よくある質問',
      items: [
        { name: '費用について', href: '/faq#cost', description: '留学費用の詳細と支払い方法' },
        { name: '準備について', href: '/faq#preparation', description: '留学前の準備に関するアドバイス' },
        { name: '滞在先について', href: '/faq#accommodation', description: '滞在先の種類と選び方' },
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
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {item.items.map((subItem) => (
                    <ListItem key={subItem.name} href={subItem.href} title={subItem.name}>
                      {subItem.description}
                    </ListItem>
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

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
