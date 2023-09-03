import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Typography from '../components/core/Typography';
import {useTheme} from '../context/theme/themeProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Screen, TextInput, Button} from '../components/core';
import FormField from '../components/forms/FormField';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

function SignUpScreen() {
  const validationSchema = z
    .object({
      name: z.string().nonempty('Name is required'),
      email: z.string().nonempty('Email is required').email(),
      password: z
        .string()
        .nonempty('Password is required')
        .min(8, {message: 'Password must be at least 8 characters'})
        .max(20, {message: 'Password must be less than 20 characters'}),
      confirmPassword: z
        .string()
        .nonempty('Confirm Password is required')
    })
    .refine(data => data.password === data.confirmPassword, {
      message: 'Passwords does not match',
      path: ['confirmPassword'],
    });

  type CredentialsType = z.infer<typeof validationSchema>;

  const {colors} = useTheme();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const {handleSubmit, control} = useForm<CredentialsType>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(validationSchema),
  });

  return (
    <Screen>
      <View style={styles.container}></View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SignUpScreen;
