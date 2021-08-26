import React from 'react';
import {TextInputProps} from 'react-native';
import {Container, LabelText, TextInput} from './styles';

interface InputProps extends TextInputProps {
	label?: string;
}

const Input = ({label, ...props}: InputProps) => {
	return (
		<Container>
			{!!label && <LabelText>{label}</LabelText>}
			<TextInput returnKeyType="next" {...props} />
		</Container>
	);
};

export default Input;
