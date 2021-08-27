import React from 'react';
import {useState} from 'react';
import Modal from 'react-native-modal';
import {UserInterface} from '../../contexts/UserContext';
import Button from '../Button';
import Input from '../Input';
import {Container, Form, Close, ModalTitle} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components';

interface EditUserModalProps {
	user: UserInterface;
	onCloseRequest: () => void;
	onSubmit: (user: UserInterface) => void;
}

const EditUserModal = ({
	user,
	onCloseRequest,
	onSubmit,
}: EditUserModalProps) => {
	const [userName, setUserName] = useState(user.userName);
	const {colors} = useTheme();

	return (
		<Modal
			isVisible
			style={{margin: 0}}
			animationOutTiming={800}
			animationInTiming={800}
			onBackButtonPress={onCloseRequest}
			onBackdropPress={onCloseRequest}>
			<Container>
				<Close onPress={onCloseRequest}>
					<MaterialCommunityIcons color={colors.bold} size={20} name="close" />
				</Close>
				<ModalTitle>Editar Usuário</ModalTitle>
				<Form>
					<Input
						label="Nome do usuário"
						placeholder="Insira aqui o seu nome completo"
						value={userName}
						onChangeText={setUserName}
					/>
				</Form>
				<Button label="SALVAR" onPress={() => onSubmit({...user, userName})} />
			</Container>
		</Modal>
	);
};

export default EditUserModal;
