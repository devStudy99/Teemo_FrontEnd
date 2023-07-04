import { DefaultTheme } from 'styled-components';

const colors = {
  gray100: '#F6F6F6', // form 배경 색상
  gray200: '#EBEBEB', // 회색버튼 hover
  gray300: '#D8D8D8', // 회색버튼 default, 선 색상
  gray400: '#C7C7C7', // 회색버튼 click
  gray500: '#888888', // 회색 폰트색
  gray600: '#666666', // 회색 폰트색2
};

const radius = {
  s1: '4px',
  s2: '8px',
  s3: '12px',
  m1: '16px',
  m2: '20px',
  m3: '24px',
};

const typography = {
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  size: {
    title: '3.4rem',
    subtitle: '3.0rem',
    paragraph: '1.6rem',
    subparagraph: '1.2rem',
    default: '2.0rem',
  },
};

export type ColorsType = typeof colors;
export type RadiusType = typeof radius;
export type TypographyType = typeof typography;

export const theme: DefaultTheme = {
  colors,
  radius,
  typography,
};
