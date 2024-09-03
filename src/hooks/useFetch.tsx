import { useQuery } from "@tanstack/react-query";

const useFetch = (key: string[], endpoint: string) => {
  if (!key || !endpoint) {
    throw new Error("Please provide a key or endpoint");
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: key,
    queryFn: async () => {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return { data, isLoading, isError, error };
};

export default useFetch;
