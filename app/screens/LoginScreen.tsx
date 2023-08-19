import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Typography from '../components/core/Typography';
import {useTheme} from '../context/theme/themeProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' 
import AppTextInput from '../components/core/TextInput';

function LoginScreen() {
  const {colors} = useTheme();
  return (
    <View style={[{backgroundColor: colors.backgroundColor}, styles.container]}>
      <Icon name={'alien'} size={40}/>
      <Typography variant="h1" styling={{color: colors.text}}>Login</Typography>
      <AppTextInput/>
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
