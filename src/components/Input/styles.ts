import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
`;

export const LabelText = styled.Text`
	font-family: Montserrat-Regular;
`;

export const TextInput = styled.TextInput`
	background: ${({theme}) => theme.colors.white};
	border-radius: 7px;
	padding-left: ${({theme}) => theme.spacings.padding.horizontal};
`;
