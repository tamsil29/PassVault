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
      <Icon name={'alien'} size={40} color={'red'} />
      <Typography variant="h1">login</Typography>
      <View style={{gap: 10, flexDirection: 'row', width: '100%'}}>
        <Button
          variant="secondary"
          title={'back'}
          onPress={() => {}}
          stretch
        />
        <Button variant="primary" title={'jack'} onPress={() => {}} stretch />
        <Button variant='tertiary' title={'lack'} onPress={()=>{}} stretch/>
        <Button variant='naked' title={'dack'} onPress={()=>{}} stretch/>
      </View>
      <View></View>
      <TextInput />
      <Button
        variant="primary"
        title={'Login'}
        onPress={() => setIsLoading(true)}
        isLoading={isLoading}
        // preElement={<Icon name={'logout'} size={20} color={colors.theme.text} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
});

export default LoginScreen;
