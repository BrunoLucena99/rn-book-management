import styled from 'styled-components/native';

export const Row = styled.View`
	flex-direction: row;
	margin-top: 5px;
`;

export const Label = styled.Text`
	font-family: Montserrat-SemiBold;
	color: ${({theme}) => theme.colors.bold};
`;

export const Value = styled.Text`
	margin-left: 5px;
	font-family: Montserrat-Regular;
	color: ${({theme}) => theme.colors.bold};
`;
