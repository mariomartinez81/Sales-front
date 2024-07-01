'use client';

import React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useFetchCategories from '@/hooks/categories/useFetchCategories';
import { capitalizeSentence } from '@/utils/capitalize';

interface SelectCategoryProps {
  onChange: (value: string) => void;
  defaultValue?: string;
}

const SelectCategory = ({ onChange, defaultValue }: SelectCategoryProps) => {
  const { data: categories } = useFetchCategories();
  return (
    <Select onValueChange={onChange} defaultValue={defaultValue}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {categories?.map((category) => (
            <SelectItem key={category.id} value={category.id.toString()}>
              {capitalizeSentence(category?.name)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectCategory;
