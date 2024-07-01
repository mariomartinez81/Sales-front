'use client';

import React from 'react';
import { ProductProps } from '@/services/types/products.types';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { capitalizeSentence } from '@/utils/capitalize';
import currencyFormat from '@/utils/currencyFormat';
import LucideIcon from '../common/LucideIcon';

import RowOption, { ItemDropdownProps } from '../common/RowOption';

interface ProdutListItemProps {
  product: ProductProps;
  itemsDropdown: ItemDropdownProps[];
}

const ProdutListItem = ({ product, itemsDropdown }: ProdutListItemProps) => {
  const Router = useRouter();

  return (
    <div
      key={product?.id}
      className="p-6 cursor-pointer w-full"
      onClick={() => Router.push(`/products/${product?.id}`)}
      aria-hidden
    >
      <Card className="flex w-full justify-center items-center">
        <div className="flex w-full flex-col">
          <CardHeader>
            <CardTitle>{product?.name}</CardTitle>
            <CardDescription>{product?.description}</CardDescription>
          </CardHeader>
          <CardFooter className="flex gap-3 text-sm">
            <div className="flex gap-1 justify-center items-center">
              <p>
                <LucideIcon name="LayoutGrid" size={18} />
              </p>
              {capitalizeSentence(product?.category?.name)}
            </div>
            <div className="flex gap-1 justify-center items-center">
              <p className="font-medium">Price:</p>
              <p>
                {currencyFormat({
                  value: product?.price,
                  minFraction: 0,
                  maxFraction: 0,
                })}
              </p>
            </div>
          </CardFooter>
        </div>

        <RowOption itemsDropdown={itemsDropdown} itemSelected={product} />
      </Card>
    </div>
  );
};

export default ProdutListItem;
