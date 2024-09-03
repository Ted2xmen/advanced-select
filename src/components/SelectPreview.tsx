import useFetch from "../hooks/useFetch";
import { AdvancedSelect } from "./AdvancedSelect";

export const SelectPreview = () => {
  const { data: options, isLoading } = useFetch(
    ["posts"],
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <section className="flex items-center gap-6">
      <AdvancedSelect
        label="Search"
        placeholder="Search an option"
        name="searchSelect"
        variant="search"
        size="sm"
        isLoading={isLoading}
        options={options}
      />

      <AdvancedSelect
        label="Select"
        placeholder="Select an option"
        name="multipleSelect"
        variant="multiple"
        size="md"
        isLoading={isLoading}
        options={options}
      />
    </section>
  );
};
