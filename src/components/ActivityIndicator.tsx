import React from 'react';
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native';

function ActivityIndicator({ visible }: { visible: boolean }) {
    if (!visible) return <></>;
    return (
       <View style={styles.overlay}>
            <LottieView style={styles.lottie} source={require('../assets/loader.json')} autoPlay loop />
       </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,355,0.4)',
        position: 'absolute',
        height: '100%',
        width : '100%',
        justifyContent: 'center',
        zIndex: 1,
        // opacity: 0.8,
      },
      lottie: {flex: 1, height: 100, width: 100}
})

export default ActivityIndicator;