import React from 'react';
import theme from '../../utils/theme';
import {ButtonContainer, ButtonLabel} from './styles';

interface ButtonProps {
	bgColor?: keyof typeof theme.colors;
	textColor?: keyof typeof theme.colors;
	label: string;
	onPress: () => void;
}

const Button = ({label, ...props}: ButtonProps) => (
	<ButtonContainer activeOpacity={0.7} {...props}>
		<ButtonLabel {...props}>{label}</ButtonLabel>
	</ButtonContainer>
);

export default Button;
