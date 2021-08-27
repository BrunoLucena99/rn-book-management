import React, {useContext} from 'react';
import {Container, ProfileButton, TextHeader} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'styled-components';
import {UserContext} from '../../contexts/UserContext';

const HeaderHome = () => {
	const {colors} = useTheme();
	const {logoutUser} = useContext(UserContext);

	return (
		<Container>
			<TextHeader>Book Managament List</TextHeader>
			<ProfileButton onPress={logoutUser}>
				<MaterialIcons name="logout" size={20} color={colors.white} />
			</ProfileButton>
		</Container>
	);
};

export default HeaderHome;
