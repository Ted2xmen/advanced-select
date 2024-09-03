import { SelectProps } from "../types/select";

export const Select = ({
  isLoading,
  name,
  label,
  variant = "freeSolo",
  size = "md",
  placeholder,
  options,
  ...props
}: SelectProps) => {
  console.log(options, props, isLoading, variant, size);

  return (
    <div>
      {placeholder}
      <label htmlFor={name} className="block">
        {label}
      </label>
      <input name={name} className="border p-2 w-full" type="text" />
    </div>
  );
};
