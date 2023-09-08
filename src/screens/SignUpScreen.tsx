import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useTheme} from '@context/theme/themeProvider';
import {Screen, Button, Typography} from '@components/core';
import Logo from '@components/Logo';
import {SignupForm} from '@components/forms';
import useRouteNavigation from '@hooks/useRouteNavigation';
import { RouteEnums } from '@navigation/Routes';

function SignUpScreen() {
  const {colors} = useTheme();
  const {navigate} = useRouteNavigation()

  const onSubmit = (data: Record<string, unknown>) =>
    console.log(JSON.stringify(data));

  return (
    <Screen style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.formContainer}>
        <SignupForm onSubmit={onSubmit} />
        {/* <Typography variant="b3">OR</Typography>
        <Button
          variant="primary"
          title={'Sign in with Google'}
          onPress={() => setIsLoading(true)}
          isLoading={isLoading}
          preElement={
            <Icon name={'google'} size={20} color={colors.app.white} />
          }
          style={{backgroundColor: colors.app.secondary}}
        /> */}
      </View>

      <Button
        variant="naked"
        title={'Have an account?'}
        onPress={() => navigate(RouteEnums.LOGIN_SCREEN)}
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
    marginVertical: 80,
  },
  logo: {
    marginTop: 120,
  },
});

export default SignUpScreen;
