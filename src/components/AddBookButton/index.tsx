import React from 'react';
import {Container} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components';

interface AddBookButtonProps {
	onPress: () => void;
}

const AddBookButton = ({onPress}: AddBookButtonProps) => {
	const {colors} = useTheme();

	return (
		<Container onPress={onPress} activeOpacity={0.7}>
			<MaterialCommunityIcons name="plus" size={20} color={colors.white} />
		</Container>
	);
};

export default AddBookButton;
