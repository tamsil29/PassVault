import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useTheme} from '@context/theme/ThemeProvider';
import {Screen, Button, Typography} from '@components/core';
import Logo from '@components/Logo';
import {ErrorMessage, LoginForm} from '@components/forms';
import useRouteNavigation from '@hooks/useRouteNavigation';
import {RouteEnums} from '@navigation/Routes';
import useFirebaseAuth from '@hooks/useFirebaseAuth';
import useUser from '@shared/hooks/useUser';
import {useAuth} from '@context/auth/AuthProvider';
import {User} from '@shared/types';
import {useApi} from '@shared/hooks/core';
import {LoginCredentialsType} from '@shared/validators/LoginForm';

function LoginScreen() {
  const {colors} = useTheme();
  const {navigate} = useRouteNavigation();
  const {firebaseAuth, signInWithGoogle, signInWithPassword} =
    useFirebaseAuth();
  const {googleLogin} = useUser();

  const {request: loginGoogleUser} = useApi(googleLogin, true);
  const {request, error} = useApi(firebaseAuth.signInWithEmailAndPassword, true);

  const onSubmit = async (data: LoginCredentialsType) => {
    console.log(JSON.stringify(data));
    await request(data?.email, data?.password);
    // const user = await firebaseAuth.signInWithEmailAndPassword(
    //   data?.email as string,
    //   data?.password as string,
    // );
    // console.log(user);
    // setOrUpdateUser({
    //   name: user.user.displayName as string,
    //   email: data.email as string,
    //   id: user.user.uid,
    // });
  };

  const loginWithGoogle = async () => {
    const googleUser = await signInWithGoogle();
    if (googleUser) {
      await loginGoogleUser({
        id: googleUser.user.uid,
        email: googleUser.user.email as string,
        name: googleUser.user.displayName as string,
      });
    }
  };

  return (
    <Screen style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.formContainer}>
        <LoginForm onSubmit={signInWithPassword} />
        <Typography variant="b3">OR</Typography>
        <Button
          variant="primary"
          title={'Sign in with Google'}
          onPress={loginWithGoogle}
          preElement={
            <Icon name={'google'} size={20} color={colors.app.white} />
          }
          style={{backgroundColor: colors.app.secondary}}
        />
      </View>

      <Button
        variant="naked"
        title={'Create an account?'}
        onPress={() => navigate(RouteEnums.SIGNUP_SCREEN)}
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
    marginVertical: 100,
  },
  logo: {
    marginTop: 120,
  },
});

export default LoginScreen;
