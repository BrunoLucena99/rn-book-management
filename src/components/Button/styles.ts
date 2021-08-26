import styled from 'styled-components/native';
import defaultTheme from '../../utils/theme';

interface ButtonContainerProps {
	bgColor?: keyof typeof defaultTheme.colors;
	textColor?: keyof typeof defaultTheme.colors;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
	width: 100%;
	border-radius: 7px;
	background: ${({theme, bgColor}) => theme.colors[bgColor ?? 'primary']};
	min-height: 50px;
	justify-content: center;
	align-items: center;
`;

export const ButtonLabel = styled.Text<ButtonContainerProps>`
	color: ${({theme, textColor}) => theme.colors[textColor ?? 'white']};
`;
