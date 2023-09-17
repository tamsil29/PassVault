import {zodResolver} from '@hookform/resolvers/zod';
import React, {Dispatch, useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {FormField, PasswordFormField} from '@components/forms';
import {useTheme} from '@context/theme/ThemeProvider';
import {Button} from '@components/core';
import {
  LoginCredentialsType,
  LoginValidationSchema,
} from '@shared/validators/LoginForm';

interface Props {
  onSubmit: Dispatch<LoginCredentialsType>;
}

function LoginForm({onSubmit}: Props) {
  const {colors} = useTheme();

  const {...methods} = useForm<LoginCredentialsType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(LoginValidationSchema),
    mode: 'onTouched',
  });

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
      <PasswordFormField name={'password'} placeholder={'Password'} />
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
