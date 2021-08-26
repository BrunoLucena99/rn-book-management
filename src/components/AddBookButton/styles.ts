import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	height: 50px;
	width: 50px;
	border-radius: 25px;
	background: ${({theme}) => theme.colors.bold};
	position: absolute;
	bottom: 10px;
	right: 10px;
	justify-content: center;
	align-items: center;
`;
