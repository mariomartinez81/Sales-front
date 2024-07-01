'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ButtonToggleTheme() {
  const { setTheme } = useTheme();

  const itemsDropdown = [
    {
      title: 'Light',
      onClick: () => setTheme('light'),
    },
    {
      title: 'Dark',
      onClick: () => setTheme('dark'),
    },
    {
      title: 'System',
      onClick: () => setTheme('system'),
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {itemsDropdown.map((item) => (
          <DropdownMenuItem
            title={item.title}
            key={item.title}
            onClick={item.onClick}
            className="cursor-pointer"
          >
            {item.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
