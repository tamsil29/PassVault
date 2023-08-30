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
      email: z.string().nonempty('Email is required').email(),
      password: z
        .string()
        .nonempty('Password is required')
        .min(8, {message: 'Password must be at least 8 characters'}),
    })
    .required();

  type CredentialsType = z.infer<typeof validationSchema>;

  const {colors} = useTheme();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const {handleSubmit, control} = useForm<CredentialsType>({
    defaultValues: {
      email: '',
      password: '',
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
