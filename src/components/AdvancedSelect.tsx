import { AdvancedSelectProps } from "../types/select";
import { Select } from "./Select";

// todo: add react hook form here or make a new component with Select component, FormSelect etc
export const AdvancedSelect = ({
  name,
  label,
  variant,
  placeholder,
  options,
  isLoading,
  size,
  ...props
}: AdvancedSelectProps) => {
  return (
    <>
      <Select
        options={options}
        placeholder={placeholder}
        label={label}
        name={name}
        size={size}
        isLoading={isLoading}
        variant={variant}
        {...props}
      />
    </>
  );
};
