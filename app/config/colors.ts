export interface ColorScheme{
    primary: string
    backgroundColor: string
    text: string
}

const primaryColor = '#22A39F'

const darkMode: ColorScheme = {
  primary: primaryColor,
  backgroundColor: '#222222',
  text: '#F3EFE0',
};

const lightMode: ColorScheme = {
  primary: primaryColor,
  backgroundColor: '#F3EFE0',
  text: '#222222',
};

export { darkMode, lightMode };

