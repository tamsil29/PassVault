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
    <View style={[{backgroundColor: colors.theme.background}, styles.container]}>
      <Icon name={'alien'} size={40} color={'red'} />
      <Typography variant="h1" styling={{color: colors.theme.text}}>
        Login
      </Typography>
      <View style={{flexDirection: 'row', gap: 5, margin: 10}}>
      <Button variant='secondary' title={'back'}/>
      <Button variant='primary' title={'jack'}/>
      <Button variant='tertiary' title={'lack'}/>
      <Button variant='naked' title={'dack'}/>
      </View>
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
