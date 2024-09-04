import { SelectProps } from "../types/select";

export const findSelectedData = (
  id: number,
  options: SelectProps["options"]
) => {
  return options?.find((option) => +option?.id === id);
};
