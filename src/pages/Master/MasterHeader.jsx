import { Button } from "@/components/ui/button";
import { capitalize } from "@/lib/utils";
import { PlusCircle } from "lucide-react";

const MasterHeader = ({ formName }) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">{capitalize(formName)} Master</h3>
      <Button size="sm" className="flex items-center space-x-1">
        <PlusCircle className="size-4" />
        Create
      </Button>
    </div>
  );
};
export default MasterHeader;
