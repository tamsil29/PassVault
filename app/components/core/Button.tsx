import React, { useMemo } from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '../../context/theme/themeProvider';
import Typography from './Typography';

interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'naked';
  title: string
}

function Button({variant = 'primary', title}: Props) {
  const {colors} = useTheme();

  const backgroundColors = useMemo(() => {
    switch (variant) {
      case 'primary':
        return {backgroundColor: colors.primary};
      case 'secondary':
        return {
          backgroundColor: colors.background,
          borderColor: colors.primary,
          borderWidth: 1.5,
        };
      case 'tertiary':
        return {
          backgroundColor: colors.background,
          borderColor: colors.headingText,
          borderWidth: 1.5,
        };
      default:
        return {};
    }
  }, [colors])

  const textColors = useMemo(() => {
    switch (variant) {
      case 'primary':
        return {color: colors.white};
      case 'secondary':
        return {color: colors.primary};
      case 'tertiary':
        return {color: colors.headingText};
      case 'naked':
        return {color: colors.primary};
      default:
        return {};
    }
  },[colors]);

  return (
    <TouchableOpacity style={[styles.button, backgroundColors]}>
      <Typography styling={[textColors]}>{title}</Typography>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
});

export default React.memo(Button);
