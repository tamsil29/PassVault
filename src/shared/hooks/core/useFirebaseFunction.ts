import { useEffect, useState } from 'react';
import { callFirebaseFunction } from './callableFunction';

const useFirebaseFunction = <
  TRequest,
  TResponse
>(
  functionName: string,
  data: TRequest,
  isManual = false
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [result, setResult] = useState<TResponse | null>(null);

  useEffect(() => {
    if (functionName && !isManual) {
      fetchFirebaseFunction();
    }
  }, [functionName, data]);

  const fetchFirebaseFunction = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await callFirebaseFunction<TRequest, TResponse>(
        functionName,
        data
      );
      setResult(response);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const request = fetchFirebaseFunction();

  return { loading, error, result, request };
};

export default useFirebaseFunction;
