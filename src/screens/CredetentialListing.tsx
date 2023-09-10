import {Button, Typography} from '@components/core';
import React from 'react';
import { View, StyleSheet } from 'react-native'
import useFirebaseAuth from '@hooks/useFirebaseAuth';

function CredetentialListing() {
    const {firebaseAuth} = useFirebaseAuth()
    return (
       <View style={styles.container}><Typography>Listing of credentials</Typography>
       <Button onPress={async ()=> await firebaseAuth.signOut()} title='Logout'/>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {}
})

export default CredetentialListing;