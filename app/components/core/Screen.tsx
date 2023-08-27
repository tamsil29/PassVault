import React, { useMemo } from 'react';
import { StyleSheet, SafeAreaView, StyleProp, ViewStyle } from 'react-native'
import { useTheme } from '../../context/theme/themeProvider';

interface Props{
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>
}

function Screen({children, style}: Props) {
    const {colors} = useTheme()

    const bgColor = useMemo(() => {
        return {backgroundColor: colors.theme.background}
    }, [colors])

    return (
       <SafeAreaView style={[bgColor, styles.container, style]}>
        {children}
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Screen;