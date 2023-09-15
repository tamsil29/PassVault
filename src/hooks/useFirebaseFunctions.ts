import functions from '@react-native-firebase/functions';

const useFirebaseFunctions = () => {
  const firebaseFunctionsRef = functions;
  return {firebaseFunctionsRef};
};

export default useFirebaseFunctions;
