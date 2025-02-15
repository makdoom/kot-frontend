import { masterDataAtom } from "@/atoms/masterAtoms";
import FormContainer from "@/components/FormContainer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { postRequest } from "@/config/api";
import { formControls, formIdLookup } from "@/lib/controls";
import { capitalize, formNameEndpointLookupResolver } from "@/lib/utils";
import { useSetAtom } from "jotai";
import { PlusCircle } from "lucide-react";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "sonner";

const MasterHeader = ({ formName }) => {
  const setMasterData = useSetAtom(masterDataAtom);

  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [controlList, setControlList] = useState(
    formControls[formIdLookup[formName]]
  );

  const handleChange = (id, value) => {
    setControlList((prev) =>
      prev?.map((item) => (item.id == id ? { ...item, value } : item))
    );
  };

  const handleClose = () => setOpen(false);

  const handleSave = async () => {
    try {
      const rowToSave = controlList?.reduce((acc, curr) => {
        acc[curr.colName] = curr.value;
        return acc;
      }, {});

      if (
        JSON.stringify(rowToSave) == "{}" ||
        Object.values(rowToSave).every((item) => !item)
      )
        return;

      const url = formNameEndpointLookupResolver(formName, "create");

      setIsLoading(true);
      const response = await postRequest(`/master/${url}`, {
        ...rowToSave,
        rec_status: 1,
      });
      if (response.success) {
        setMasterData((prev) => [{ ...response.data, id: nanoid() }, ...prev]);
        setControlList((prev) => prev.map((item) => ({ ...item, value: "" })));
        setOpen(false);

        toast.success(`New ${formName} created`);
      } else {
        toast.error(`Something went wrong while creating ${formName}`);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.message || `Something went wrong while creating ${formName}`
      );
    } finally {
      setIsLoading(false);
    }
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
              isLoading={isLoading}
              heading={`Create New ${capitalize(formName)}`}
              formControls={controlList}
              handleChange={handleChange}
              handleClose={handleClose}
              handleSave={handleSave}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default MasterHeader;
