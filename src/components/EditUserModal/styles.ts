import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: ${({theme}) => theme.colors.white};
	bottom: 0;
	position: absolute;
	width: 100%;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	padding: ${({theme}) => `0px ${theme.spacings.padding.horizontal}`};
	padding-top: 35px;
	padding-bottom: 10px;
`;

export const Close = styled.TouchableOpacity`
	position: absolute;
	right: 5px;
	top: 5px;
`;

export const ModalTitle = styled.Text`
	text-align: center;
	font-size: 18px;
	font-family: Montserrat-SemiBold;
	color: ${({theme}) => theme.colors.bold};
`;

export const Form = styled.View`
	margin: 15px 0px;
`;
