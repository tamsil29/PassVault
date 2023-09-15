
import { useFirebaseFunctions } from "@shared/mappers";

  export const callFirebaseFunction = async <
  TRequest,
  TResponse
>(
  functionName: string,
  data: TRequest
): Promise<TResponse> => {
  try {
    const {firebaseFunctionsRef} = useFirebaseFunctions()
    const callable = firebaseFunctionsRef().httpsCallable(functionName);
    const response = await callable(data);
    return response.data;
  } catch (error) {
    throw error;
  }
};