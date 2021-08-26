import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';
import theme from '../../utils/theme';
import {ButtonContainer, ButtonLabel} from './styles';

interface ButtonProps {
	bgColor?: keyof typeof theme.colors;
	textColor?: keyof typeof theme.colors;
	label: string;
	onPress: () => void;
	isLoading?: boolean;
}

const Button = ({label, isLoading = false, ...props}: ButtonProps) => {
	const {colors} = useTheme();
	return (
		<ButtonContainer activeOpacity={0.7} {...props}>
			{isLoading ? (
				<ActivityIndicator
					size="small"
					color={colors[props.textColor ?? 'white']}
				/>
			) : (
				<ButtonLabel {...props}>{label}</ButtonLabel>
			)}
		</ButtonContainer>
	);
};

export default Button;
