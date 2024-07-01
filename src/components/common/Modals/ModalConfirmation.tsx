import React from 'react';
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '../../ui/button';
import LoaderSpiner from '../Loaders/LoaderSpiner';

interface ModalConfirmationProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  title: string;
  description: string;
  titlePrimaryButton?: string;
  titleSecondaryButton?: string;
  isLoading?: boolean;
  handleClickPrimaryButton?: () => void;
  handleClickSecondaryButton?: () => void;
}

const ModalConfirmation = ({
  open,
  setOpen,
  title,
  description,
  titlePrimaryButton = 'Delete',
  titleSecondaryButton = 'Cancel',
  isLoading,
  handleClickPrimaryButton,
  handleClickSecondaryButton,
}: ModalConfirmationProps) => {
  return (
    <div>
      <Dialog modal open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader className="space-y-4">
            <DialogTitle className="grid place-items-center">
              {title}
            </DialogTitle>
            <DialogDescription className="grid place-items-center text-center">
              {description}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-end gap-2">
            <Button
              type="button"
              variant="secondary"
              className="min-w-20"
              onClick={handleClickSecondaryButton}
            >
              {titleSecondaryButton}
            </Button>
            <Button
              type="button"
              variant="default"
              className="min-w-20"
              onClick={handleClickPrimaryButton}
              disabled={isLoading}
            >
              {isLoading ? <LoaderSpiner /> : titlePrimaryButton}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalConfirmation;
