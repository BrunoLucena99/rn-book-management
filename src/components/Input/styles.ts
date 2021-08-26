import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
`;

export const LabelText = styled.Text`
	font-family: Montserrat-SemiBold;
	margin-bottom: 5px;
	color: ${({theme}) => theme.colors.bold};
`;

export const TextInput = styled.TextInput`
	background: ${({theme}) => theme.colors.white};
	border-radius: 7px;
	padding-left: ${({theme}) => theme.spacings.padding.horizontal};
	font-family: Montserrat-Regular;
	elevation: 2;
`;
