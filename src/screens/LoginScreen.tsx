import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useTheme} from '@context/theme/ThemeProvider';
import {Screen, Button, Typography} from '@components/core';
import Logo from '@components/Logo';
import {LoginForm} from '@components/forms';
import useRouteNavigation from '@hooks/useRouteNavigation';
import {RouteEnums} from '@navigation/Routes';
import useFirebaseAuth from '@hooks/useFirebaseAuth';
import useUser from '@shared/hooks/useUser';
import {useAuth} from '@context/auth/AuthProvider';
import {User} from '@shared/types';

function LoginScreen() {
  const {colors} = useTheme();
  const {navigate} = useRouteNavigation();
  const {firebaseAuth, signInWithGoogle} = useFirebaseAuth();
  const {googleLogin} = useUser();
  const {user, updateUser} = useAuth();

  const onSubmit = async (data: Record<string, unknown | string>) => {
    console.log(JSON.stringify(data));
    const user = await firebaseAuth.createUserWithEmailAndPassword(
      data?.email as string,
      data?.password as string,
    );
    console.log(user);
    // setOrUpdateUser({
    //   name: user.user.displayName as string,
    //   email: data.email as string,
    //   id: user.user.uid,
    // });
  };

  const loginWithGoogle = async () => {
    try {
      const googleUser = await signInWithGoogle();
      if (googleUser) {
        const user = await googleLogin({
          id: googleUser.user.uid,
          email: googleUser.user.email as string,
          name: googleUser.user.displayName as string,
        });
        updateUser(user as User);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Screen style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.formContainer}>
        <LoginForm onSubmit={onSubmit} />
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
