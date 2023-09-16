import React from 'react';
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
import {useApi} from '@shared/hooks/core';

function LoginScreen() {
  const {colors} = useTheme();
  const {navigate} = useRouteNavigation();

  const {googleLogin} = useUser();
  const {request: loginGoogleUser} = useApi(googleLogin, true);
  const {signInWithGoogle, signInWithPassword} = useFirebaseAuth();

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

      <View style={styles.bottomSection}>
        <Button
          variant="naked"
          title={'Create an account'}
          onPress={() => navigate(RouteEnums.SIGNUP_SCREEN)}
          stretch
        />
        <Button
          variant="naked"
          title={'Forgot password?'}
          onPress={() => navigate(RouteEnums.FORGOT_PASSWORD_SCREEN)}
          stretch
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  bottomSection: {
    flexDirection: 'row',
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
