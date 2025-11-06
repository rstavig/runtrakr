"use client"

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import { deleteHillRun } from "@/lib/actions/hillActions";

export function DeleteHillRunButton({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="ghost"
      size="icon"
      disabled={isPending}
      className={className}
      onClick={() => {
        startTransition(async () => {
          const result = await deleteHillRun(id);
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

