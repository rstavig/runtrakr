"use client"

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import { deleteUser } from "@/lib/actions/userActions";

export function TrashButton({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const [, startTransition] = useTransition();

  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      onClick={() => {
        startTransition(async () => {
          const result = await deleteUser(id);

          console.log(result);
          
          if (result.success) {
            // Optionally, you can add a toast notification here
            console.log(result.message);
          } else {
            console.error(result.message);
          }
        });
      }}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}

