import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';
import {LoadingContainer, Text} from './styles';

const Loading = () => {
	const {colors} = useTheme();

	return (
		<LoadingContainer>
			<ActivityIndicator color={colors.bold} size="large" />
			<Text>Aguarde! Estamos buscando suas informações</Text>
		</LoadingContainer>
	);
};

export default Loading;
