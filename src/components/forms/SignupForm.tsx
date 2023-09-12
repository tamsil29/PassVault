import {zodResolver} from '@hookform/resolvers/zod';
import React, {Dispatch, useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {FormField} from '@components/forms';
import { useTheme } from '@context/theme/ThemeProvider';
import {Button} from '@components/core';
import {PasswordFormField} from '@components/forms';
import { SignupFromType, SignupValidationSchema } from '@shared/validators/SignupForm';

interface Props {
  onSubmit: Dispatch<SignupFromType>;
}

function SignupForm({onSubmit}: Props) {
  const {colors} = useTheme();

  const {...methods} = useForm<SignupFromType>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(SignupValidationSchema),
    mode: 'onTouched'
  });

  return (
    <FormProvider {...methods}>
      <FormField
        keyboardType="email-address"
        placeholder="Name"
        name={'name'}
        preElement={
          <Icon name={'account'} size={25} color={colors.theme.text} />
        }
      />
      <FormField
        keyboardType="email-address"
        placeholder="Email"
        name={'email'}
        preElement={
          <Icon name={'email-outline'} size={25} color={colors.theme.text} />
        }
      />
      <PasswordFormField name={'password'} placeholder={'Password'} />
      <PasswordFormField name={'confirmPassword'} placeholder={'Confirm Password'} />
      <Button
        variant="primary"
        title={'Register'}
        onPress={methods.handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SignupForm;
