import FormBuilder from "./FormBuilder";
import { DialogDescription, DialogFooter, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";

const FormContainer = ({
  isLoading,
  heading,
  formControls,
  handleChange,
  handleClose,
  handleSave,
}) => {
  return (
    <div>
      <DialogTitle className="text-normal font-medium">{heading}</DialogTitle>
      <DialogDescription className="hidden" />

      <div className="grid grid-cols-3 gap-4 my-6">
        <FormBuilder formControls={formControls} handleChange={handleChange} />
      </div>

      <DialogFooter className="flex items-center justify-end w-full space-x-2 mt-8">
        <Button
          variant="secondary"
          className="text-sm px-6"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          className="text-sm px-6"
          onClick={handleSave}
          disabled={isLoading}
        >
          <span>{isLoading ? "Saving..." : "Save"}</span>
          {isLoading && <Loader className="animate-spin" />}
        </Button>
      </DialogFooter>
    </div>
  );
};
export default FormContainer;
