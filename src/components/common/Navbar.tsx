import React from 'react';
import Link from 'next/link';
import { Bell, Package2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import LucideIcon from './LucideIcon';

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  const dataNavbar = [
    {
      id: 1,
      icon: 'LayoutGrid',
      title: 'Categories',
      href: '/',
    },
    {
      id: 2,
      icon: 'ShoppingCart',
      title: 'Orders',
      href: '#',
    },
    {
      id: 3,
      icon: 'Package',
      title: 'Products',
      href: '/products',
    },
    {
      id: 4,
      icon: 'Users',
      title: 'Customers',
      href: '#',
    },
  ];
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Company Inc</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {dataNavbar.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <LucideIcon name={item.icon} size={18} />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
