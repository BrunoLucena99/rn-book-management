import React from 'react';
import { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {RegisterUserProps} from '../../types/navigation';
import {
	DescriptionText,
	FormContainer,
	MainContainer,
	Title,
	Footer,
	InputWrapper,
} from './styles';

const RegisterUserPage = ({navigation, route}: RegisterUserProps) => {

	const [email, setEmail] = useState(route.params?.email ?? '');
	const [password, setPassword] = useState(route.params?.password ?? '');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [userName, setUserName] = useState('');

	return (
		<>
			<MainContainer>
				<Title>Formulário de Registro</Title>
				<DescriptionText>Preencha as informações abaixo:</DescriptionText>
				<FormContainer>
					<Input
						keyboardType="email-address"
						placeholder="email@mail.com"
						label="Seu melhor email *"
						value={email}
						onChangeText={setEmail}
					/>
					<InputWrapper />
					<Input
						value={userName}
						onChangeText={setUserName}
						placeholder="Seu nome completo aqui"
						label="Nome Completo *"
					/>
					<InputWrapper />
					<Input
						secureTextEntry
						placeholder="Sua senha aqui"
						label="Sua senha *"
						value={password}
						onChangeText={setPassword}
					/>
					<InputWrapper />
					<Input
						secureTextEntry
						placeholder="Sua senha aqui"
						label="Confirme sua senha *"
						value={confirmPassword}
						onChangeText={setConfirmPassword}
					/>
				</FormContainer>
			</MainContainer>
			<Footer>
				<Button
					label="Prosseguir"
					bgColor="bold"
					textColor="white"
					onPress={() => {}}
				/>
			</Footer>
		</>
	);
};

export default RegisterUserPage;
