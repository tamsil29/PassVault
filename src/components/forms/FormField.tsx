import React, {ReactNode} from 'react';
import {
  View,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  DimensionValue,
} from 'react-native';
import {TextInput, Typography} from '../core';
import ErrorMessage from './ErrorMessage';
import {useTheme} from '../../context/theme/themeProvider';

interface Props {
  preElement?: ReactNode;
  containerStyling?: StyleProp<ViewStyle>;
  postElement?: ReactNode;
  textInputStyling?: StyleProp<TextStyle>;
  width?: DimensionValue;
}

function FormField({
  preElement,
  containerStyling,
  postElement,
  textInputStyling,
  width = '100%',
  ...otherProps
}: TextInputProps & Props) {
  const {colors} = useTheme();

  const inputContainer: StyleProp<ViewStyle> = {
    ...{containerStyling},
    borderColor: colors.utility.danger,
    borderWidth: 1,
  };

  return (
    <View style={[styles.container, {width}]}>
      <TextInput
        preElement={preElement}
        containerStyling={inputContainer}
        postElement={postElement}
        textInputStyling={textInputStyling}
        {...otherProps}
      />
      <ErrorMessage error={'Email must be a valid email!'} visible={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    gap: 8,
  },
});

export default FormField;
