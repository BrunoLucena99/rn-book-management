import React from 'react';
import {Container, RegisterBooksBtn, RegisterBookText, Title} from './styles';

const EmptyBooksList = () => (
	<Container>
		<Title>Você ainda não tem livros cadastrados</Title>
		<RegisterBooksBtn>
			<RegisterBookText>
				Clique aqui e comece a cadastrar agora!
			</RegisterBookText>
		</RegisterBooksBtn>
	</Container>
);

export default EmptyBooksList;
