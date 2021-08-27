import React, {useState} from 'react';
import useBooks from '../../hooks/useBooks';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/Button';
import RowValue from '../../components/RowValue';

import {useContext} from 'react';
import {UserContext, UserInterface} from '../../contexts/UserContext';
import {
	Avatar,
	ButtonWrapper,
	Footer,
	MainContainer,
	NameText,
	PageTitle,
	ProfileContainer,
	UserAvatarContainer,
} from './styles';
import EditUserModal from '../../components/EditUserModal';
import {Alert} from 'react-native';
import GoBack from '../../components/GoBack';
import {ProfileProps} from '../../types/navigation';

const Profile = ({navigation}: ProfileProps) => {
	const {user, editUser, logoutUser} = useContext(UserContext);
	const {books} = useBooks(user?.uid!, true);
	const [modalVisible, setModalVisible] = useState(false);

	const onEditUser = async (editedUser: UserInterface) => {
		try {
			if (editedUser.userName.length > 0) {
				await editUser(editedUser);
				setModalVisible(false);
				return;
			}
			Alert.alert('Atenção', 'Preencha todos os campos');
		} catch {
			Alert.alert('Não foi possível editar o usuário tente mais tarde');
		}
	};

	return (
		<>
			<GoBack onPress={navigation.goBack} />
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
					<Button
						label="EDITAR USUARIO"
						onPress={() => setModalVisible(true)}
					/>
					<ButtonWrapper />
					<Button
						label="SAIR DA CONTA"
						bgColor="primary"
						onPress={logoutUser}
					/>
				</Footer>
			</MainContainer>
			{modalVisible && (
				<EditUserModal
					user={user!}
					onCloseRequest={() => setModalVisible(false)}
					onSubmit={onEditUser}
				/>
			)}
		</>
	);
};

export default Profile;
