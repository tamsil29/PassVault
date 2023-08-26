import React, { Dispatch, useMemo } from 'react';
import {View, StyleSheet, TouchableOpacity, GestureResponderEvent} from 'react-native';
import {useTheme} from '../../context/theme/themeProvider';
import Typography from './Typography';

interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'naked';
  title: string
  onPress: (event: GestureResponderEvent) => void
}

function Button({variant = 'primary', title, onPress}: Props) {
  const {colors} = useTheme();

  const backgroundColors = useMemo(() => {
    switch (variant) {
      case 'primary':
        return {backgroundColor: colors.app.primary};
      case 'secondary':
        return {
          backgroundColor: colors.theme.background,
          borderColor: colors.app.primary,
          borderWidth: 1.5,
        };
      case 'tertiary':
        return {
          backgroundColor: colors.theme.background,
          borderColor: colors.theme.headingText,
          borderWidth: 1.5,
        };
      default:
        return {};
    }
  }, [colors])

  const textColors = useMemo(() => {
    switch (variant) {
      case 'primary':
        return {color: colors.app.white};
      case 'secondary':
        return {color: colors.app.primary};
      case 'tertiary':
        return {color: colors.theme.headingText};
      case 'naked':
        return {color: colors.app.primary};
      default:
        return {};
    }
  },[colors]);

  return (
    <TouchableOpacity style={[styles.button, backgroundColors]} onPress={onPress}>
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
