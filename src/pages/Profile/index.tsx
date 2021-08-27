import React from 'react';
import useBooks from '../../hooks/useBooks';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/Button';
import RowValue from '../../components/RowValue';

import {useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';
import {
	Avatar,
	Footer,
	MainContainer,
	NameText,
	PageTitle,
	ProfileContainer,
	UserAvatarContainer,
} from './styles';

const Profile = () => {
	const {user} = useContext(UserContext);
	const {books} = useBooks(user?.uid!, true);

	return (
		<MainContainer>
			<PageTitle>Perfil</PageTitle>
			<ProfileContainer>
				<UserAvatarContainer size={100}>
					{user?.avatar ? (
						<Avatar size={100} source={{uri: user.avatar}} />
					) : (
						<MaterialIcons name="image-not-supported" size={50} />
					)}
				</UserAvatarContainer>
				<NameText>{user?.userName || 'Nome não registrado'}</NameText>
				<RowValue value={user?.email!} label="E-Mail" />
				{Array.isArray(books) && (
					<RowValue value={books.length} label="Livros cadastrados" />
				)}
			</ProfileContainer>
			<Footer>
				<Button label="EDITAR USUARIO" onPress={() => {}} />
			</Footer>
		</MainContainer>
	);
};

export default Profile;
