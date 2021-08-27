import React from 'react';
import {Container, ProfileButton, TextHeader} from './styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParamList} from '../../types/navigation';

const HeaderHome = () => {
	const {colors} = useTheme();
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	return (
		<Container>
			<TextHeader>Book Managament List</TextHeader>
			<ProfileButton onPress={() => navigation.navigate('Profile')}>
				<FontAwesomeIcon name="user-circle-o" size={24} color={colors.white} />
			</ProfileButton>
		</Container>
	);
};

export default HeaderHome;
