import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Typography from '../components/core/Typography';
import {useTheme} from '../context/theme/themeProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Screen, TextInput, Button} from '../components/core';
import FormField from '../components/forms/FormField';
import {useForm} from 'react-hook-form';
import {ZodType, z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

function LoginScreen() {
  const validationSchema = z
    .object({
      email: z.string().email(),
      password: z.string().min(8),
    })
    .required();

  const {colors} = useTheme();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {handleSubmit, control, formState} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: any) => console.log(JSON.stringify(data));

  useEffect(() => {
    if (isLoading) setTimeout(() => setIsLoading(false), 2000);
  }, [isLoading]);

  return (
    <Screen style={styles.container}>
      {/* <TextInput placeholder='Email' /> */}
      <FormField
        placeholder="Email"
        name={'email'}
        control={control}
        preElement={
          <Icon name={'email-outline'} size={25} color={colors.theme.secondaryText} />
        }
      />
      <FormField
        placeholder="Password"
        name={'password'}
        control={control}
        preElement={
          <Icon
            name={passwordVisible ? 'lock-open-variant-outline' : 'lock-outline'}
            size={25}
            color={colors.theme.secondaryText}
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
      <Typography variant="b3" styling={{}}>
        OR
      </Typography>
      <Button
        variant="primary"
        title={'Sign in with Google'}
        onPress={() => setIsLoading(true)}
        isLoading={isLoading}
        preElement={<Icon name={'google'} size={20} color={colors.app.white} />}
        styling={{backgroundColor: colors.app.secondary}}
      />
      <Button
        variant="naked"
        title={'Create an account?'}
        onPress={() => setIsLoading(true)}
        isLoading={isLoading}
        styling={{position: 'absolute', bottom: 0, left: 0, right: 0}}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 20,
  },
});

export default LoginScreen;
