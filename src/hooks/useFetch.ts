import { useEffect, useState } from "react";

interface Options {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

interface UseFetchResult<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const useFetch = <T>(
  endpoint: string,
  options: Options = {},
  skip: boolean = false
): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const url = `${BASE_URL}${endpoint}`;

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, { ...options, signal });
        const responseData: T = await response.json();

        setData(responseData);
        setIsLoading(false);
      } catch (error) {
        // Handle errors
        if (!signal.aborted) {
          setError(error as Error);
          setIsLoading(false);
        }
      }
    };

    if (!skip) {
      fetchData();
    }

    // Cleanup function to abort the request when the component unmounts
    return () => {
      abortController.abort();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip]);

  return { data, error, isLoading };
};
