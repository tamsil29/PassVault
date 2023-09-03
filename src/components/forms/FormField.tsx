import React, {ReactNode, useMemo} from 'react';
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
import {UseControllerProps, useController} from 'react-hook-form';

export interface FormFieldProps extends UseControllerProps {
  preElement?: ReactNode;
  containerStyling?: StyleProp<ViewStyle>;
  postElement?: ReactNode;
  textInputStyling?: StyleProp<TextStyle>;
  width?: DimensionValue;
  name: string;
}

function FormField({
  preElement,
  containerStyling,
  postElement,
  textInputStyling,
  width = '100%',
  name,
  rules,
  ...otherProps
}: TextInputProps & FormFieldProps) {
  const {colors} = useTheme();
  const {field, fieldState} = useController({name, rules});

  const inputContainer: StyleProp<ViewStyle> = useMemo(() => {
    if (fieldState.invalid) {
      return {
        ...{containerStyling},
        borderColor: colors.utility.danger,
        borderWidth: 1,
      };
    } else {
      containerStyling;
    }
  }, [fieldState]);

  return (
    <View style={[styles.container, {width}]}>
      <TextInput
        containerStyling={inputContainer}
        onBlur={field.onBlur}
        onChangeText={field.onChange}
        postElement={postElement}
        preElement={preElement}
        textInputStyling={textInputStyling}
        value={field.value}
        {...otherProps}
      />
      <ErrorMessage error={fieldState.error?.message} visible={fieldState.invalid} />
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
