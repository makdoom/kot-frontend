import { ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function DataTableColumnHeader({ column, title, className }) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Button
        variant="secondary"
        size="sm"
        className="-ml-3 h-8 bg-transparent shadow-none outline-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span className="text-xs font-semibold">{title}</span>
        <ChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
