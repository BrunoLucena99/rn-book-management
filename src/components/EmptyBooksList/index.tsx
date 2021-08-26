import React from 'react';
import {Container, RegisterBooksBtn, RegisterBookText, Title} from './styles';

interface EmptyBookListProps {
	onAdd: () => void;
}

const EmptyBooksList = ({onAdd}: EmptyBookListProps) => (
	<Container>
		<Title>Você ainda não tem livros cadastrados</Title>
		<RegisterBooksBtn onPress={onAdd}>
			<RegisterBookText>
				Clique aqui e comece a cadastrar agora!
			</RegisterBookText>
		</RegisterBooksBtn>
	</Container>
);

export default EmptyBooksList;
