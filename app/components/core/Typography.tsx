import React from 'react';
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native'

interface Props {
    children: React.ReactNode;
    styling?: StyleProp<TextStyle>;
    variant?: 'h1' | 'h2' | 'h3' | 'b1' | 'b2' | 'b3' | 'b4'
}

function Typography({children, variant = 'b1', styling, ...otherProps}: Props & TextProps) {
    return (
        <Text {...otherProps} style={[styles[variant], styling]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    h1:{fontSize: 34},
    h2:{fontSize: 28},
    h3:{fontSize: 22},
    b1:{fontSize: 17},
    b2:{fontSize: 15},
    b3:{fontSize: 13},
    b4:{fontSize: 11},
    
})

export default Typography;