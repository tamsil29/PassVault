import React from 'react';
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Typography } from '../core';
import { useTheme } from '../../context/theme/themeProvider';

interface Props{
    error: string | any
    visible: boolean | any
}

function ErrorMessage({error,visible}: Props) {
    const {colors} = useTheme();

    if(!visible || !error) return null
    return (
        <View style={styles.error}>
            <Icon
            name={'alert-circle-outline'}
            size={15}
            color={colors.utility.danger}
            />
            <Typography variant="b3" styling={{color: colors.utility.danger}}>
                {error}
            </Typography>
      </View>
    );
}

const styles = StyleSheet.create({
    error: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        marginLeft: 10
      },
})

export default ErrorMessage;