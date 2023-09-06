import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const useRouteNavigation = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return navigation
}

export default useRouteNavigation