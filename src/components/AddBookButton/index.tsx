import React from 'react';
import {Text} from 'react-native';
import {Container} from './styles';

interface AddBookButtonProps {
	onPress: () => void;
}

const AddBookButton = ({onPress}: AddBookButtonProps) => {
	return (
		<Container onPress={onPress} activeOpacity={0.7}>
			<Text style={{color: 'white', fontSize: 20}}>+</Text>
		</Container>
	);
};

export default AddBookButton;
