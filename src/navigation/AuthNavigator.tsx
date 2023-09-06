import React from 'react';
import { View, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/LoginScreen';
import SignUpScreen from '@screens/SignUpScreen';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Signup' component={SignUpScreen}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {}
})

export default AuthNavigator;

