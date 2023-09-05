import {zodResolver} from '@hookform/resolvers/zod';
import React, {Dispatch, useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {z} from 'zod';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {FormField} from '@components/forms';
import {useTheme} from '@context/theme/themeProvider';
import {Button} from '@components/core';

interface Props {
  onSubmit: Dispatch<any>;
}

function LoginForm({onSubmit}: Props) {
  const validationSchema = z
    .object({
      email: z.string().nonempty('Email is required').email(),
      password: z
        .string()
        .nonempty('Password is required')
        .min(8, {message: 'Password must be at least 8 characters'}),
    })
    .required();

  const {colors} = useTheme();

  type CredentialsType = z.infer<typeof validationSchema>;

  const {...methods} = useForm<CredentialsType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(validationSchema),
    mode: 'onTouched'
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <FormProvider {...methods}>
      <FormField
        keyboardType="email-address"
        placeholder="Email"
        name={'email'}
        preElement={
          <Icon name={'email-outline'} size={25} color={colors.theme.text} />
        }
      />
      <FormField
        textContentType="password"
        secureTextEntry={!passwordVisible}
        placeholder="Password"
        name={'password'}
        preElement={
          <Icon
            name={
              passwordVisible ? 'lock-open-variant-outline' : 'lock-outline'
            }
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
      />
      <Button
        variant="primary"
        title={'Login'}
        onPress={methods.handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default LoginForm;
