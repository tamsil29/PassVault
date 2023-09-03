import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {FormField} from '@components/forms';
import {useTheme} from '@context/theme/themeProvider';
import { FormFieldProps } from '@components/forms/FormField';


function PasswordFormField({...props}: FormFieldProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {colors} = useTheme();

  return (
    <FormField
      textContentType="password"
      secureTextEntry={!passwordVisible}
      preElement={
        <Icon
          name={passwordVisible ? 'lock-open-variant-outline' : 'lock-outline'}
          size={25}
          color={colors.theme.text}
        />
      }
      postElement={
        <Icon
          name={passwordVisible ? 'eye-outline' : 'eye-off-outline'}
          size={25}
          color={
            passwordVisible ? colors.theme.text : colors.theme.secondaryText
          }
          onPress={() => setPasswordVisible(!passwordVisible)}
        />
      }
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default PasswordFormField;
