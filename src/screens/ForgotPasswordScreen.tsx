import {Screen, Typography} from '@components/core';
import { ActivityIndicator } from '@components/index';
import React from 'react';
import {View, StyleSheet} from 'react-native';

function ForgotPasswordScreen() {
  return (
    <Screen style={styles.container}>
      <Typography>forgot password</Typography>
      <ActivityIndicator visible={true}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ForgotPasswordScreen;
