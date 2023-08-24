import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { useTheme } from '../../context/theme/themeProvider';
import Typography from './Typography';

interface Props{
    variant?: 'primary' | 'secondary' | 'naked'
    stretch?: boolean
}

function Button({variant = 'primary', stretch}: Props) {
    const {colors} = useTheme();

    const backgroundColors = () => {
        switch (variant) {
            case 'primary':
                return { backgroundColor: colors.primary }
            case'secondary':
                return { backgroundColor: colors.background, borderColor: colors.primary, border: 2 }
            default: return {}
        }
    }

    const textColors = () => {
        switch (variant) {
            case 'primary':
                return { color: colors.white }
            case 'secondary':
                return { color: colors.primary }
            case 'naked':
                return { color: colors.primary }
            default: return {}
        }
    }

  return (
    <TouchableOpacity style={[styles.button, backgroundColors()]}>
      <Typography styling={[textColors()]}>
        Login
      </Typography>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button:{ borderRadius: 5, paddingVertical: 8, paddingHorizontal: 20 },
    stretch: { width: '100%' },
});

export default Button;
