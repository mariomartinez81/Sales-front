import React from 'react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import LucideIcon from './LucideIcon';

export interface ItemDropdownProps {
  title: string;
  icon: string;
  onClick: (e: any, itemSeledted?: any) => void | any;
}

interface RowOptionProps {
  itemsDropdown: ItemDropdownProps[];
  itemSelected?: any;
}

const RowOption = ({ itemsDropdown, itemSelected }: RowOptionProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-20">
          <Button
            variant="ghost"
            className="rounded-full p-1 cursor-pointer w-10 h-10"
          >
            <LucideIcon name="EllipsisVertical" size={18} />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {itemsDropdown.map((item) => (
          <DropdownMenuItem
            title={item.title}
            key={item.title}
            onClick={(e) => item.onClick(e, itemSelected)}
            className="hover:bg-primary hover:text-white cursor-pointer"
          >
            <span className="flex gap-2 justify-center items-center">
              <LucideIcon name={item.icon} size={15} />
              {item.title}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RowOption;
