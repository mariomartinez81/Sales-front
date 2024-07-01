'use client';

import React from 'react';
import Image from 'next/image';
import useFetchProduct from '@/hooks/products/useFetchProduct';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { capitalizeSentence } from '@/utils/capitalize';
import currencyFormat from '@/utils/currencyFormat';
import LucideIcon from '@/components/common/LucideIcon';
import LoaderSpiner from '@/components/common/Loaders/LoaderSpiner';

interface PageProps {
  params: {
    id: string;
  };
}

const PageProductId = ({ params }: PageProps) => {
  const { id } = params;

  const { data: product, isLoading } = useFetchProduct(+id);

  return (
    <>
      {isLoading ? (
        <div className="grid w-full h-full place-items-center">
          <LoaderSpiner size={80} />
        </div>
      ) : (
        <div className="grid p-6">
          <Card>
            <CardContent className="grid place-items-center w-full">
              <Image
                src={product?.image ?? ''}
                alt={product?.name ?? 'Product Image'}
                width={400}
                height={400}
              />
            </CardContent>
            <CardHeader>
              <CardTitle>{product?.name}</CardTitle>
              <CardDescription>{product?.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-3 text-sm">
              <div className="flex gap-1 justify-center items-center">
                <p>
                  <LucideIcon name="LayoutGrid" size={18} />
                </p>
                {capitalizeSentence(product?.category?.name ?? '')}
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
          </Card>
        </div>
      )}
    </>
  );
};

export default PageProductId;
