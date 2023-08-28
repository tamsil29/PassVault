import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Typography from '../components/core/Typography';
import {useTheme} from '../context/theme/themeProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Screen, TextInput, Button} from '../components/core';

function LoginScreen() {
  const {colors} = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) setTimeout(() => setIsLoading(false), 2000);
  }, [isLoading]);
  return (
    <Screen style={styles.container}>
      <TextInput placeholder='Email' />
      <TextInput placeholder='Password'/>
      <Button
        variant="primary"
        title={'Login'}
        onPress={() => setIsLoading(true)}
        isLoading={isLoading}
      />
      <Typography variant='b3' styling={{}}>OR</Typography>
      <Button
        variant="primary"
        title={'Sign in with Google'}
        onPress={() => setIsLoading(true)}
        isLoading={isLoading}
        preElement={<Icon name={'google'} size={20} color={colors.app.white} />}
        styling={{backgroundColor: colors.app.secondary}}
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
