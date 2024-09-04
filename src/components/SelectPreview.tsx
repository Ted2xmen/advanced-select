import useFetch from "../hooks/useFetch";
import { AdvancedSelect } from "./AdvancedSelect";

export const SelectPreview = () => {
  const { data: options, isLoading } = useFetch(
    ["posts"],
    "https://jsonplaceholder.typicode.com/posts"
  );

  const handlePreviewChange = (value: string) => {
    console.log(value);
  };

  return (
    <section className="flex items-center gap-6">
      <AdvancedSelect
        label="Select"
        placeholder="Select an option"
        name="multipleSelect"
        variant="multiple"
        size="md"
        isLoading={isLoading}
        options={options}
        onChange={handlePreviewChange}
        value=""
      />
    </section>
  );
};
