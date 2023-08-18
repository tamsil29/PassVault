import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import Typography from '../components/core/Typography';

function LoginScreen() {
    return (
       <View style={styles.container}>
            <Typography variant='h1'>Login</Typography>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoginScreen;