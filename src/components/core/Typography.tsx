import React, { useMemo } from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';

import { useTheme } from '@context/theme/themeProvider';

interface Props {
  children: React.ReactNode;
  styling?: StyleProp<TextStyle>;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'b1' | 'b2' | 'b3' | 'b4';
}

function Typography({
  children,
  variant = 'b1',
  styling,
  ...otherProps
}: Props & TextProps) {
  const {colors} = useTheme();

  const textColor = useMemo(()=>{
    switch (variant) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
        return {color: colors.theme.headingText}
      case 'b1':
      case 'b2':
        return {color: colors.theme.text}
      case 'b3':
      case 'b4':
        return {color: colors.theme.secondaryText}
      default:
        return {color: colors.theme.text}

    }
  },[colors, variant])

  return (
    <Text
      {...otherProps}
      style={[styles[variant], textColor, styling]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h1: {fontSize: 42},
  h2: {fontSize: 34},
  h3: {fontSize: 28},
  h4: {fontSize: 22},
  b1: {fontSize: 17},
  b2: {fontSize: 15},
  b3: {fontSize: 13},
  b4: {fontSize: 11},
});

export default React.memo(Typography);
