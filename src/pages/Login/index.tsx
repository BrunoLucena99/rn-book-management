import React, {useState} from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import useAuth from '../../hooks/useAuth';
import {
	InputWrapper,
	MainContainer,
	RegisterButton,
	RegisterButtonText,
	Title,
} from './styles';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {handleLoginWithEmail} = useAuth();

	const onSubmit = () => {
		handleLoginWithEmail(email, password);
	};

	return (
		<MainContainer>
			<Title>Book Management</Title>
			<Input
				value={email}
				keyboardType="email-address"
				placeholder="Insira seu E-Mail"
				onChangeText={setEmail}
			/>
			<InputWrapper />
			<Input
				onChangeText={setPassword}
				secureTextEntry
				value={password}
				placeholder="Insira sua senha"
				returnKeyType="done"
			/>
			<InputWrapper />
			<Button onPress={onSubmit} label="ENTRAR" />
			<RegisterButton>
				<RegisterButtonText>Sou novo por aqui</RegisterButtonText>
			</RegisterButton>
		</MainContainer>
	);
};

export default LoginPage;
