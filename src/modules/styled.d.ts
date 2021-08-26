import 'styled-components/native';
import theme from '../utils/theme';

type ThemeColors = typeof theme;
declare module 'styled-components' {
	export interface DefaultTheme extends ThemeColors {}
}
