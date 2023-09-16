import React, {ReactNode, useMemo} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { useTheme } from '@context/theme/ThemeProvider';
import {Typography} from '@components/core';

interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'naked';
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  isLoading?: boolean;
  disabled?: boolean;
  stretch?: boolean;
  preElement?: ReactNode;
  style?: StyleProp<ViewStyle>
}

function Button({
  variant = 'primary',
  title,
  onPress,
  isLoading,
  disabled,
  stretch,
  preElement,
  style
}: Props) {
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
  }, [colors, variant]);

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
  }, [colors, variant]);

  const disabledStyle = useMemo(() => {
    return disabled || isLoading ? styles.disabled : {};
  }, [isLoading, disabled]);

  const buttonStretch = useMemo(() => {
    return stretch ? styles.stretch : {};
  }, [stretch]);

  return (
    <TouchableOpacity
      disabled={disabled || isLoading}
      style={[styles.button, backgroundColors, disabledStyle, buttonStretch, style]}
      onPress={onPress}>
      {isLoading && <ActivityIndicator color={textColors.color} />}
      {preElement}
      <Typography styling={[textColors]}>{title}</Typography>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 5,
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  disabled: {
    opacity: 0.6,
  },
  stretch: {
    flex: 1,
  }
});

export default React.memo(Button);
