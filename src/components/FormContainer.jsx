import FormBuilder from "./FormBuilder";
import { DialogDescription, DialogFooter, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";

const FormContainer = ({ heading, formControls, handleChange }) => {
  return (
    <div>
      <DialogTitle className="text-normal font-medium">{heading}</DialogTitle>
      <DialogDescription className="hidden" />

      <div className="grid grid-cols-3 gap-4 my-6">
        <FormBuilder formControls={formControls} handleChange={handleChange} />
      </div>

      <DialogFooter className="flex items-center justify-end w-full space-x-2 mt-8">
        <Button variant="secondary" className="text-sm px-6">
          Cancel
        </Button>
        <Button className="text-sm px-6">Save</Button>
      </DialogFooter>
    </div>
  );
};
export default FormContainer;
