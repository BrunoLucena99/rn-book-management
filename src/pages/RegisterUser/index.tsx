import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {
	DescriptionText,
	FormContainer,
	MainContainer,
	Title,
	Footer,
	InputWrapper,
} from './styles';

const RegisterUserPage = () => {
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
					/>
					<InputWrapper />
					<Input placeholder="Seu nome completo aqui" label="Nome Completo *" />
					<InputWrapper />
					<Input
						secureTextEntry
						placeholder="Sua senha aqui"
						label="Sua senha *"
					/>
					<InputWrapper />
					<Input
						secureTextEntry
						placeholder="Sua senha aqui"
						label="Confirme sua senha *"
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
