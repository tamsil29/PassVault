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
import {Control, useController} from 'react-hook-form';

interface Props {
  preElement?: ReactNode;
  containerStyling?: StyleProp<ViewStyle>;
  postElement?: ReactNode;
  textInputStyling?: StyleProp<TextStyle>;
  width?: DimensionValue;
  name: string;
  control: Control<any>
}

function FormField({
  preElement,
  containerStyling,
  postElement,
  textInputStyling,
  width = '100%',
  name,
  control,
  ...otherProps
}: TextInputProps & Props) {
  const {colors} = useTheme();
  const {field, fieldState} = useController({name, control});

  console.log(name, fieldState)

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
        preElement={preElement}
        containerStyling={inputContainer}
        postElement={postElement}
        textInputStyling={textInputStyling}
        {...otherProps}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
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