'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { ProductProps } from '@/services/types/products.types';
import SelectCategory from './SelectCategory';
import useCreateProduct from '@/hooks/products/useCreateProduct';
import useUpdateProduct from '@/hooks/products/useUpdateProduct';
import LoaderSpiner from '../common/Loaders/LoaderSpiner';

const FormSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: 'name must be at least 3 characters.',
    })
    .max(15, { message: 'name must be at most 15 characters.' }),
  description: z
    .string()
    .min(10, { message: 'Description must be at least 10 characters.' }),
  image: z.string().url({ message: 'Image must be a valid URL.' }),
  price: z.number().min(0, { message: 'Price must be a positive number.' }),
  categoryId: z.number().min(1, { message: 'Category is required.' }),
});

interface UpdateOrCreateProductFormProps {
  product?: ProductProps | null;
  titlePrimaryButton?: string;
  titleSecondaryButton?: string;
  handleSecondaryButton?: () => void;
  setOpen?: (value: boolean) => void;
}

const UpdateOrCreateProductForm = ({
  product,
  titlePrimaryButton = 'Submit',
  titleSecondaryButton = 'Cancel',
  handleSecondaryButton,
  setOpen,
}: UpdateOrCreateProductFormProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: product?.name ?? '',
      description: product?.description ?? '',
      image: product?.image ?? '',
      price: product?.price,
      categoryId: product?.categoryId ?? 0,
    },
  });

  const {
    mutate: createProduct,
    isPending: isLoadingCreate,
    queryClient,
  } = useCreateProduct();
  const { mutate: updateProduct, isPending: isLoadingUpdate } =
    useUpdateProduct();

  const onSuccess = (isUpdate: boolean) => {
    const title = isUpdate
      ? 'Product updated successfully'
      : 'Product created successfully';
    queryClient.invalidateQueries({ queryKey: ['products'] });
    toast({
      title,
      status: 'success',
    });
    setOpen?.(false);
  };

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    if (product?.id) {
      updateProduct(
        { updateData: data, id: +product.id },
        {
          onSuccess: () => onSuccess(true),
        },
      );
      return;
    }
    createProduct(data, {
      onSuccess: () => onSuccess(false),
    });
  };

  const isLoading = isLoadingCreate || isLoadingUpdate;

  const inputsForm = [
    {
      name: 'name',
      label: 'Name',
      placeholder: 'name',
    },
    {
      name: 'description',
      label: 'Description',
      placeholder: 'description',
    },
    {
      name: 'image',
      label: 'Image',
      placeholder: 'image',
    },
    {
      name: 'price',
      label: 'Price',
      placeholder: '$0.00',
    },
    {
      name: 'categoryId',
      label: 'Category',
      placeholder: 'category',
    },
  ];
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-5 flex flex-col"
      >
        {inputsForm.map((input) => (
          <FormField
            control={form.control}
            name={input.name}
            key={input.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{input.label}</FormLabel>
                <FormControl>
                  {input.name === 'categoryId' ? (
                    <SelectCategory
                      onChange={(value) => field.onChange(Number(value))}
                      defaultValue={field.value.toString()}
                    />
                  ) : (
                    <Input
                      type={input.name === 'price' ? 'number' : 'text'}
                      placeholder={input.placeholder}
                      {...field}
                      onChange={(e) =>
                        field.onChange(
                          input.name === 'price'
                            ? Number(e.target.value)
                            : e.target.value,
                        )
                      }
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <div className="w-full sm:justify-end gap-4 flex pt-4">
          <Button
            type="button"
            variant="secondary"
            onClick={handleSecondaryButton}
          >
            {titleSecondaryButton}
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <LoaderSpiner /> : titlePrimaryButton}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateOrCreateProductForm;
