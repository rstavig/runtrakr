"use client"

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
// import { useTransition } from "react";
import { deleteTestItem } from "@/lib/actions/testActions";

export function DeleteItemButton({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
//   const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="ghost"
      size="icon"
    //   disabled={isPending}
      className={className}
      onClick={() => { deleteTestItem(id) }}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}