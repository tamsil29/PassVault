import {zodResolver} from '@hookform/resolvers/zod';
import React, {Dispatch, useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {z} from 'zod';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {FormField} from '@components/forms';
import {useTheme} from '@context/theme/themeProvider';
import {Button} from '@components/core';
import {PasswordFormField} from '@components/forms';

interface Props {
  onSubmit: Dispatch<any>;
}

function SignupForm({onSubmit}: Props) {
  const validationSchema = z
    .object({
      name: z.string().nonempty('Name is required'),
      email: z.string().nonempty('Email is required').email(),
      password: z
        .string()
        .nonempty('Password is required')
        .min(8, {message: 'Password must be at least 8 characters'})
        .max(20, {message: 'Password must be less than 20 characters'}),
      confirmPassword: z.string().nonempty('Confirm Password is required'),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: 'Passwords does not match',
      path: ['confirmPassword'],
    });

  const {colors} = useTheme();

  type CredentialsType = z.infer<typeof validationSchema>;

  const {...methods} = useForm<CredentialsType>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(validationSchema),
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

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
      <PasswordFormField name={'password'} />
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
