import React, {ReactNode, useMemo} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { useTheme } from '../../context/theme/themeProvider';

interface Props {
  preElement?: ReactNode;
  containerStyling?: StyleProp<ViewStyle>;
  postElement?: ReactNode;
  textInputStyling?: StyleProp<TextStyle>;
}

const AppTextInput: React.FC<TextInputProps & Props> = ({
  preElement,
  containerStyling,
  postElement,
  textInputStyling,
  ...otherProps
}) => {
  const {colors, isDarkMode} = useTheme()

  const background = useMemo(() => {
    return isDarkMode ? {backgroundColor:colors.app.dark} : {backgroundColor:colors.app.white}
  }, [colors])

  return (
    <View style={[styles.container,background, containerStyling]}>
      {preElement}
      <TextInput style={[styles.text, textInputStyling]} {...otherProps} />
      {postElement}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: 'center',
    gap: 10,
  },
  text: {
    flex: 1,
    fontFamily: 'Avenir',
    fontSize: 17,
  },
});

export default AppTextInput;
