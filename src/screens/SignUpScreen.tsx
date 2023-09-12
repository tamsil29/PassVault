import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useTheme} from '@context/theme/ThemeProvider';
import {Screen, Button, Typography} from '@components/core';
import Logo from '@components/Logo';
import {SignupForm} from '@components/forms';
import useRouteNavigation from '@hooks/useRouteNavigation';
import {RouteEnums} from '@navigation/Routes';
import { SignupFromType } from '@shared/validators/SignupForm';

function SignUpScreen() {
  const {colors} = useTheme();
  const {navigate} = useRouteNavigation();

  const onSubmit = (formData: SignupFromType) => {
    console.log(formData);
  };

  return (
    <Screen style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.formContainer}>
        <SignupForm onSubmit={onSubmit} />
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
