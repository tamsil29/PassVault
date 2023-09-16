import React from 'react';
import { View, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/LoginScreen';
import SignUpScreen from '@screens/SignUpScreen';
import { RouteEnums } from '@navigation/Routes';
import ForgotPasswordScreen from '@screens/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={RouteEnums.LOGIN_SCREEN} component={LoginScreen}/>
            <Stack.Screen name={RouteEnums.SIGNUP_SCREEN} component={SignUpScreen}/>
            <Stack.Screen name={RouteEnums.FORGOT_PASSWORD_SCREEN} component={ForgotPasswordScreen}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {}
})

export default AuthNavigator;

