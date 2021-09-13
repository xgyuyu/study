import { useState, useEffect } from 'react';
type UseFetchType = [
  response: Response | null | undefined,
  error: Error,
  isLoading: boolean
];
export default function useFetch(
  request: RequestInfo,
  init?: RequestInit
): UseFetchType {
  const [response, setResponse] = useState<null | Response>();
  const [error, setError] = useState<null | Error>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      try {
        const rpd = await fetch(request, {
          ...init,
          signal: abortController.signal,
        });
        setResponse(await rpd?.json());
        setIsLoading(false);
      } catch (e) {
        if (e.name === 'AbortError') {
          return;
        }
        setError(e);
        setIsLoading(false);
      }
    })();
    return () => {
      abortController.abort();
    };
  }, [init, request]);
  return [response, error, isLoading];
}
