import React, {useState} from 'react';
import {Alert} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import useAuth from '../../hooks/useAuth';
import {LoginPageProps} from '../../types/navigation';
import {
	ButtonWrapper,
	InputWrapper,
	MainContainer,
	RegisterButton,
	RegisterButtonText,
	Title,
} from './styles';

const LoginPage = ({navigation}: LoginPageProps) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {loginWithEmail, loginWithGoogle} = useAuth();

	const onSubmit = () => {
		if (!email || !password) {
			Alert.alert('Atenção', 'Preencha o e-mail e a sua senha');
			return;
		}
		loginWithEmail(email, password);
	};

	const goToRegisterUserPage = () => {
		navigation.navigate('RegisterUser');
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
			<ButtonWrapper />
			<Button
				bgColor="white"
				textColor="bold"
				onPress={loginWithGoogle}
				label="ENTRAR COM O GOOGLE"
			/>
			<RegisterButton onPress={goToRegisterUserPage}>
				<RegisterButtonText>Sou novo por aqui</RegisterButtonText>
			</RegisterButton>
		</MainContainer>
	);
};

export default LoginPage;
