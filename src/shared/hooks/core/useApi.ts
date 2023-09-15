import {useCallback, useEffect, useState} from 'react';

const useApi = <TRequest, TResponse>(
  apiFunc: (...args: Array<TRequest>) => Promise<TResponse>,
  isManual = false,
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [result, setResult] = useState<TResponse | null>(null);

  useEffect(() => {
    if (!isManual) {
      fetchFunction();
    }
  }, [apiFunc]);

  const fetchFunction = useCallback(async (...args: Array<TRequest>) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiFunc(...args);
      setResult(response);
      return response
    } catch (error: any) {
      setError(error);
      return null
    } finally {
      setLoading(false);
    }
  }, [apiFunc]);

  return {loading, error, result, request: fetchFunction};
};

export default useApi;
