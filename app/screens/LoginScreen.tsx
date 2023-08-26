import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Typography from '../components/core/Typography';
import {useTheme} from '../context/theme/themeProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppTextInput from '../components/core/TextInput';
import Button from '../components/core/Button';

function LoginScreen() {
  const {colors} = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) setTimeout(() => setIsLoading(false), 2000)
  }, [isLoading])
  return (
    <View style={[{backgroundColor: colors.theme.background}, styles.container]}>
      <Icon name={'alien'} size={40} color={'red'} />
      <Typography variant="h1" styling={{color: colors.theme.text}}>
        Login
      </Typography>
      <View style={{flexDirection: 'row', gap: 20, width: '100%'}}>
        <Button variant='secondary' title={'back'} onPress={()=>{}}/>
        <Button variant='primary' title={'jack'} onPress={()=>{}}/>
        <Button variant='tertiary' title={'lack'} onPress={()=>{}}/>
        <Button variant='naked' title={'dack'} onPress={()=>{}}/>
      </View>
      <View></View>
      <AppTextInput />
      <Button variant='primary' title={'Login'} onPress={()=>setIsLoading(true)} isLoading={isLoading}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
});

export default LoginScreen;
