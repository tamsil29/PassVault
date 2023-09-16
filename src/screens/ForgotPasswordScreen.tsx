import {Screen, Typography} from '@components/core';
import React from 'react';
import {View, StyleSheet} from 'react-native';

function ForgotPasswordScreen() {
  return (
    <Screen style={styles.container}>
      <Typography>forgot password</Typography>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ForgotPasswordScreen;
