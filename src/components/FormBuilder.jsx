import { Input } from "./ui/input";

const controlsCreator = ({
  id,
  type,
  colName,
  name,
  value,
  autoFocus,
  handleChange,
}) => {
  switch (type) {
    case "text":
      return (
        <Input
          type="text"
          name={colName}
          autoFocus={autoFocus}
          placeholder={name}
          className="text-sm"
          value={value}
          onChange={(e) => handleChange(id, e.target.value, colName)}
        />
      );
    case "number":
      return (
        <Input
          type="number"
          name={colName}
          autoFocus={autoFocus}
          placeholder={name}
          className="text-sm"
          value={value}
          onChange={(e) => handleChange(id, e.target.value, colName)}
        />
      );
    case "email":
      return (
        <Input
          type="email"
          name={colName}
          autoFocus={autoFocus}
          placeholder={name}
          className="text-sm"
          value={value}
          onChange={(e) => handleChange(id, e.target.value, colName)}
        />
      );
    case "password":
      return (
        <Input
          type="password"
          name={colName}
          autoFocus={autoFocus}
          isPassword
          placeholder={name}
          className="text-sm"
          value={value}
          onChange={(e) => handleChange(id, e.target.value, colName)}
        />
      );
    default:
      return "";
  }
};

const FormBuilder = ({ formControls = [], handleChange }) => {
  return formControls
    ?.filter((control) => control.visibleInd)
    ?.map((control) => (
      <div key={control.id}>
        {controlsCreator({ ...control, handleChange })}
      </div>
    ));
};
export default FormBuilder;
