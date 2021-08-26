import styled from 'styled-components/native';

export const MainContainer = styled.View`
	flex: 1;
	background: ${({theme}) => theme.colors.background};
	padding: ${({theme}) => `0px ${theme.spacings.padding.horizontal}`};
	justify-content: center;
	align-items: center;
`;

export const Title = styled.Text`
	font-size: 24px;
	font-family: Montserrat-Bold;
	color: ${({theme}) => theme.colors.primary};
	margin-bottom: 30px;
`;

export const InputWrapper = styled.View`
	margin-bottom: 10px;
`;

export const RegisterButton = styled.TouchableOpacity`
	align-self: flex-end;
	margin-top: 10px;
`;

export const RegisterButtonText = styled.Text`
	font-family: Montserrat-Regular;
	color: ${({theme}) => theme.colors.bold};
`;
