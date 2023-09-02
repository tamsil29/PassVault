import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@context/theme/themeProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Screen, Button, Typography} from '@components/core';
import FormField from '@components/forms/FormField';
import {FormProvider, useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import Logo from '@components/Logo';

function LoginScreen() {
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
  const [isLoading, setIsLoading] = useState(false);
  const {...methods} = useForm<CredentialsType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: CredentialsType) => console.log(JSON.stringify(data));

  useEffect(() => {
    if (isLoading) setTimeout(() => setIsLoading(false), 2000);
  }, [isLoading]);

  return (
    <Screen style={styles.container}>
      <Logo style={styles.logo} />
      <FormProvider {...methods}>
        <View style={styles.formContainer}>
          <FormField
            keyboardType="email-address"
            placeholder="Email"
            name={'email'}
            preElement={
              <Icon
                name={'email-outline'}
                size={25}
                color={colors.theme.text}
              />
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
                  passwordVisible
                    ? colors.theme.text
                    : colors.theme.secondaryText
                }
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            }
          />
          <Button
            variant="primary"
            title={'Login'}
            onPress={methods.handleSubmit(onSubmit)}
            isLoading={isLoading}
          />
          <Typography variant="b3">OR</Typography>
          <Button
            variant="primary"
            title={'Sign in with Google'}
            onPress={() => setIsLoading(true)}
            isLoading={isLoading}
            preElement={
              <Icon name={'google'} size={20} color={colors.app.white} />
            }
            style={{backgroundColor: colors.app.secondary}}
          />
        </View>
      </FormProvider>
      <Button
        variant="naked"
        title={'Create an account?'}
        onPress={() => setIsLoading(true)}
        isLoading={isLoading}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
    marginVertical: 150,
  },
  logo: {
    marginTop: 120,
  },
});

export default LoginScreen;
