export type AdvancedSelectProps = {
  isLoading?: boolean;
} & SelectProps;

export type SelectProps = {
  isLoading?: boolean;
  name: string;
  label: string;
  variant?: Variants;
  size?: Sizes;
  placeholder: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  value?: string;
};

type SelectOption = {
  title: string;
  id: string;
  value: string;
};

type Variants = "search" | "multiple" | "freeSolo";
type Sizes = "sm" | "md" | "lg";
