const utility = {
  success: '#52c41a',
  danger: '#f5222d',
  warning: '#faad14',
  info: '#13c2c2',
};

const app = {
  primary: '#22A39F',
  secondary: '#A32226',
  light: '#F3EFE0',
  gray: '#434242',
  dark: '#222222',
  white: '#FFFFFF',
  black: '#000000',
};

const light = {
  headingText: '#000000E0',
  text: '#000000E0',
  secondaryText: '#000000A6',
  disabledText: '#00000040',
  border: '#D9D9D9FF',
  separator: '#0505050F',
  background: '#F5F5F5FF',
};

const dark = {
  headingText: '#FFFFFFD9',
  text: '#FFFFFFD9',
  secondaryText: '#FFFFFFA6',
  disabledText: '#FFFFFF40',
  border: '#424242FF',
  separator: '#FDFDFD1F',
  background: '#000000FF',
};

const lightMode = {utility, app, theme: light};

const darkMode = {utility, app, theme: dark};

export {darkMode, lightMode};
