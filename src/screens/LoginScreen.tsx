import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Typography from '../components/core/Typography';
import {useTheme} from '../context/theme/themeProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Screen, Button} from '../components/core';
import FormField from '../components/forms/FormField';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import Logo from '../components/Logo';

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
  const {handleSubmit, control} = useForm<CredentialsType>({
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
      <View style={styles.formContainer}>
        <FormField
          placeholder="Email"
          name={'email'}
          control={control}
          preElement={
            <Icon name={'email-outline'} size={25} color={colors.theme.text} />
          }
        />
        <FormField
          textContentType="password"
          secureTextEntry={!passwordVisible}
          placeholder="Password"
          name={'password'}
          control={control}
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
          onPress={handleSubmit(onSubmit)}
          isLoading={isLoading}
        />
        <Typography variant="b3">
          OR
        </Typography>
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
      <Button
        variant="naked"
        title={'Create an account?'}
        onPress={() => setIsLoading(true)}
        isLoading={isLoading}
        style={styles.bottomButton}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  bottomButton:{
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0
  },
  container: {
    alignItems: 'center',
    padding: 10,
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
  },
  logo: {
    marginVertical: 120,
  },

});

export default LoginScreen;
