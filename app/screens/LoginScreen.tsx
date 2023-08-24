import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Typography from '../components/core/Typography';
import {useTheme} from '../context/theme/themeProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppTextInput from '../components/core/TextInput';
import Button from '../components/core/Button';

function LoginScreen() {
  const {colors} = useTheme();
  return (
    <View style={[{backgroundColor: colors.background}, styles.container]}>
      <Icon name={'alien'} size={40} color={'red'} />
      <Typography variant="h1" styling={{color: colors.text}}>
        Login
      </Typography>
      <Button variant='secondary'/>
      <AppTextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
