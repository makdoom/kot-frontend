import FormContainer from "@/components/FormContainer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { formControls, formIdLookup } from "@/lib/controls";
import { capitalize } from "@/lib/utils";
import { PlusCircle } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";

const MasterHeader = ({ formName }) => {
  const [open, setOpen] = useState(false);
  const [controlList, setControlList] = useState(
    formControls[formIdLookup[formName]]
  );

  const handleChange = (id, value) => {
    setControlList((prev) =>
      prev?.map((item) => (item.id == id ? { ...item, value } : item))
    );
  };

  useEffect(() => {
    setControlList(formControls[formIdLookup[formName]]);
  }, [formName]);

  return (
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">{capitalize(formName)} Master</h3>

      <Dialog open={open} onOpenChange={setOpen} className="w-[400px]">
        <DialogTrigger asChild>
          <Button size="sm" className="flex items-center space-x-1">
            <PlusCircle className="size-4" />
            Create
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[800px]">
          {controlList?.length > 0 && (
            <FormContainer
              heading={`Create New ${capitalize(formName)}`}
              formControls={controlList}
              handleChange={handleChange}
            />
          )}
          {/* <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader> */}
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default MasterHeader;
