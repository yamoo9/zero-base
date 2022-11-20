export const colors = {
  white: '#ffffff',
  black: '#202020',
  indigo: {
    50: '#f2f0f0',
    100: '#e4e4e4',
    200: '#c9c9c9',
    300: '#aeaeae',
    400: '#939393',
    500: '#787878',
    600: '#606060',
    700: '#484848',
    800: '#2C2C2C ',
    900: '#181818',
  },
  blue: {
    50: '#eef7ff',
    100: '#cce5fd',
    200: '#9acbfc',
    300: '#67b1fa',
    400: '#3597f9',
    500: '#027df7',
    600: '#0264c6',
    700: '#014b94',
    800: '#013263',
    900: '#001931',
  },
  yellow: {
    50: '#fffdef',
    100: '#fdf7cc',
    200: '#fcef9a',
    300: '#fae667',
    400: '#f9de35',
    500: '#f7d602',
    600: '#c6ab02',
    700: '#948001',
    800: '#635601',
    900: '#312b00',
  },
  red: {
    50: '#ffebf3',
    100: '#fdccdf',
    200: '#fc9abf',
    300: '#fa67a0',
    400: '#f93580',
    500: '#f70260',
    600: '#c6024d',
    700: '#94013a',
    800: '#630126',
    900: '#310013',
  },
  green: {
    50: '#ecfffa',
    100: '#ccfdf0',
    200: '#9afce2',
    300: '#67fad3',
    400: '#35f9c5',
    500: '#02f7b6',
    600: '#02c692',
    700: '#01946d',
    800: '#016349',
    900: '#003124',
  },
};

const spaceBase = 4;

export const borderRadius = {
  xs: `${spaceBase}px`,
  s: `${spaceBase * 2}px`,
  m: `${spaceBase * 4}px`,
  l: `${spaceBase * 6}px`,
  xl: `${spaceBase * 8}px`,
  xxl: `${spaceBase * 10}px`,
  round: '50%',
  none: 0,
};

export const spacing = {
  xxs: `${0.25 * spaceBase}rem`,
  xs: `${0.5 * spaceBase}rem`,
  s: `${spaceBase}rem`,
  m: `${1.25 * spaceBase}rem`,
  l: `${2 * spaceBase}rem`,
  xl: `${3.25 * spaceBase}rem`,
  xxl: `${5.25 * spaceBase}rem`,
};

export const boxShadow = {
  card: '0px 14px 26px 0px rgba(0, 0, 0, 0.08)',
  inner: 'inset 0 3px 0 0 rgba(0, 0, 0, 0.05)',
  outerBorder: `0 0 0 1px ${colors.blue[600]}, 0 0 0 4px ${colors.blue[800]}`,
};

export const typography = {
  fontSize: {
    heading1: '2.74rem',
    heading2: '2.19rem',
    heading3: '1.75rem',
    heading4: '1.4rem',
    body: '1.125rem',
    bodyS: '1rem',
    bodyXS: '0.9rem',
    bodyXXS: '0.72rem',
  },
  fontWeight: {
    black: '900',
    bold: '700',
    medium: '500',
    regular: '400',
  },
};
