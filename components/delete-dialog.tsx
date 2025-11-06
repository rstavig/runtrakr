'use client';

import { useState, useTransition } from 'react';
// import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { DeleteIcon } from 'lucide-react';
import { useCallback } from 'react';

export default function DeleteDialog({
  id,
  action,
}: {
  id: string;
  action: (id: string) => Promise<{ success: boolean; message: string }>;
}) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <DeleteIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete User</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this user? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            onClick={() => {
              startTransition(async () => {
                const result = await action(id);
                toast({
                  title: result.success ? 'User deleted' : 'Error deleting user',
                  description: result.message,
                  variant: result.success ? 'success' : 'destructive',
                });
              });
            }}
          >
            {isPending ? 'Deleting...' : 'Delete'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
type ToastVariant = 'success' | 'destructive' | 'default';

interface ToastOptions {
  title: string;
  description?: string;
  variant?: ToastVariant;
}

function useToast(): { toast: (options: ToastOptions) => void } {
  const toast = useCallback((options: ToastOptions) => {
    // For demonstration, use window.alert. Replace with your toast logic.
    window.alert(`${options.title}\n${options.description ?? ''}`);
    // In a real app, integrate with your toast/notification system here.
  }, []);

  return { toast };
}
