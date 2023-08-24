
const utilityColors = {
  success: '#52c41a',
  danger: '#f5222d',
  warning: '#faad14',
  info: '#13c2c2',
}

const appThemeColors = {
  primaryColor: '#22A39F',
  secondaryColor: '#A32226',
  light: '#F3EFE0',
  gray: '#434242',
  dark: '#222222'
}

const lightMode = {
  ...utilityColors,
  ...appThemeColors,
  headingText: '#000000E0',
  text: '#000000E0',
  secondaryText: '#000000A6',
  disabledText: '#00000040',
  border: '#D9D9D9FF',
  separator: '#0505050F',
  backgroundColor: '#F5F5F5FF',
};

const darkMode = {
  ...utilityColors,
  ...appThemeColors,
  headingText: '#FFFFFFD9',
  text: '#FFFFFFD9',
  secondaryText: '#FFFFFFA6',
  disabledText: '#FFFFFF40',
  border: '#424242FF',
  separator: '#FDFDFD1F',
  backgroundColor: '#000000FF',
};

export {darkMode, lightMode};
