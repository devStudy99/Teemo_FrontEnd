import 'styled-components';
import { ColorsType, RadiusType, TypographyType } from './Theme';

declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.woff';
declare module '*.svg';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
    radius: RadiusType;
    typography: TypographyType;
  }
}
