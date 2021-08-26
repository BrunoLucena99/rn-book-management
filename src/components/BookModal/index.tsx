import React from 'react';
import Modal from 'react-native-modal';
import {BookInterface} from '../../types/book';
import Button from '../Button';
import Input from '../Input';
import {Container, FormContainer, Wrapper, Title} from './styles';

interface BookModalProps {
	book?: BookInterface;
	onCloseRequest: () => void;
	onEditBook: () => void;
	onAddBook: () => void;
	onRemoveBook: () => void;
}

const BookModal = ({
	book,
	onCloseRequest,
	onEditBook,
	onRemoveBook,
	onAddBook,
}: BookModalProps) => {
	const isEdit = !!book;

	return (
		<Modal
			isVisible
			style={{margin: 0}}
			animationInTiming={800}
			animationOutTiming={800}
			onBackButtonPress={onCloseRequest}
			onBackdropPress={onCloseRequest}
			useNativeDriver>
			<Container>
				<Title>{isEdit ? 'Editar/Remover livro' : 'Adicionar um livro'}</Title>
				<FormContainer>
					<Input placeholder="Insira o nome do livro" label="Nome do Livro" />
					<Wrapper />
					<Input placeholder="Insira o nome do autor" label="Autor" />
					<Wrapper />
					<Input placeholder="Nome da editora" label="Editora" />
					<Wrapper />
					<Input placeholder="Edição" label="Nome da edição" />
					<Wrapper />
				</FormContainer>
				{!isEdit ? (
					<Button label="ADICIONAR LIVRO" onPress={onAddBook} />
				) : (
					<>
						<Button label="EDITAR LIVRO" onPress={onEditBook} />
						<Wrapper />
						<Button
							label="REMOVER LIVRO"
							bgColor="secondary"
							textColor="white"
							onPress={onRemoveBook}
						/>
					</>
				)}
			</Container>
		</Modal>
	);
};

export default BookModal;
