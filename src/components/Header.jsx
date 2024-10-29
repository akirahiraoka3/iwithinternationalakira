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
      title: '渡航のプラン',
      items: [
        { name: '海外インターンシップ', href: '/internship', description: '実践的なスキルを身につけながら、グローバルな環境で働く経験を積む' },
        { name: '短期・長期留学', href: '/language-study', description: '語学力向上と異文化体験を通じて、グローバルな視野を広げる' },
        { name: 'ワーキングホリデー', href: '/working-holiday', description: '海外で働きながら、その国の文化や生活を体験する' },
        { name: '目的から選ぶ', href: '/programs', description: '留学の目的に合わせて最適なプランを見つける' },
      ],
    },
    {
      title: '留学を知る',
      items: [
        { name: '短期留学って？', href: '/short-term-study', description: '短期留学の魅力と効果的な活用法' },
        { name: '長期留学って？', href: '/long-term-study', description: '長期留学の特徴と利点' },
        { name: '高校留学って？', href: '/high-school-study', description: '高校生向け留学プログラムの特徴と魅力' },
        { name: '大学留学って？', href: '/university-study', description: '大学生向け留学プログラムの概要と利点' },
        { name: 'ワーキングホリデーとは？', href: '/working-holiday', description: 'ワーキングホリデーの基本情報と魅力' },
        { name: 'インターンシップ留学って？', href: '/overseas-internship', description: '海外インターンシップ留学の特徴と利点' },
        { name: '今後の流れ・必要な書類は？', href: '/required-documents', description: '留学に必要な書類の準備ガイド' },
        { name: 'よくある質問', href: '/faq', description: '留学に関するよくある質問と回答' },
      ],
    },
    {
      title: '年代・目的から選ぶ',
      items: [
        { name: '目的から選ぶ', href: '/programs#purpose', description: '留学の目的に合わせて最適なプランを見つける' },
        { name: '年代から選ぶ', href: '/programs#age', description: '年代に合わせた留学プランを探す' },
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
                <div className="p-4 w-[600px] lg:w-[700px]">
                  <ul className="grid w-full gap-3 p-4 md:grid-cols-2">
                    {item.items.map((subItem) => (
                      <ListItem key={subItem.name} href={subItem.href} title={subItem.name}>
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center">
        <Button variant="outline" size="lg" className="mr-4">資料をリクエスト</Button>
        <Button onClick={() => window.location.href = '/#contact'}>お問い合わせ</Button>
      </div>
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