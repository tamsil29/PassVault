import React from 'react';
import {  StyleSheet, Image, StyleProp, ImageStyle } from 'react-native'
import PassVaultLogo from '@assets/logo.png'

function Logo({style}:{style?: StyleProp<ImageStyle>}) {
    return (
        <Image source={PassVaultLogo} style={[styles.logo, style]}/>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 230,
        height: 30,
      },
})

export default Logo;