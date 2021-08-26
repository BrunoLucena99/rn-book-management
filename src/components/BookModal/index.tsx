import React from 'react';
import {useState} from 'react';
import {Alert} from 'react-native';
import Modal from 'react-native-modal';
import {BookInterface, NewBookProps} from '../../types/book';
import Button from '../Button';
import Input from '../Input';
import {Container, FormContainer, Wrapper, Title} from './styles';

interface BookModalProps {
	book?: BookInterface | null;
	onCloseRequest: () => void;
	onEditBook: (book: BookInterface) => void;
	onAddBook: (book: NewBookProps) => void;
	onRemoveBook: (bookId: string) => void;
}

const BookModal = ({
	book,
	onCloseRequest,
	onEditBook,
	onRemoveBook,
	onAddBook,
}: BookModalProps) => {
	const isEdit = !!book;

	const [isLoading, setIsLoading] = useState(false);
	const [name, setName] = useState(book?.name ?? '');
	const [author, setAuthor] = useState(book?.author ?? '');
	const [publishBy, setPublishBy] = useState(book?.publishBy ?? '');
	const [edition, setEdition] = useState(book?.edition ?? '');

	const verifyIfIsEmpty = () => !name || !author || !publishBy || !edition;

	const handleEditBook = async () => {
		if (verifyIfIsEmpty()) {
			Alert.alert('Atenção', 'Preencha todos os campos');
			return;
		}
		try {
			setIsLoading(true);
			await onEditBook({name, author, publishBy, edition, id: book!.id});
			onCloseRequest();
		} catch {
			Alert.alert('Atenção', 'Ocorreu um erro ao editar o livro');
			setIsLoading(false);
		}
	};

	const handleAddBook = async () => {
		if (verifyIfIsEmpty()) {
			Alert.alert('Atenção', 'Preencha todos os campos');
			return;
		}

		try {
			setIsLoading(true);
			await onAddBook({name, author, publishBy, edition});
			onCloseRequest();
		} catch {
			Alert.alert('Atenção', 'Ocorreu um erro ao salvar o livro');
			setIsLoading(false);
		}
	};

	const removeUserBook = async () => {
		try {
			setIsLoading(true);
			await onRemoveBook(book!.id);
			onCloseRequest();
		} catch {
			Alert.alert('Atenção', 'Ocorreu um erro ao remover o livro');
			setIsLoading(false);
		}
	};

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
					<Input
						value={name}
						onChangeText={setName}
						placeholder="Insira o nome do livro"
						label="Nome do Livro"
					/>
					<Wrapper />
					<Input
						value={author}
						onChangeText={setAuthor}
						placeholder="Insira o nome do autor"
						label="Autor"
					/>
					<Wrapper />
					<Input
						value={publishBy}
						onChangeText={setPublishBy}
						placeholder="Nome da editora"
						label="Editora"
					/>
					<Wrapper />
					<Input
						value={edition}
						onChangeText={setEdition}
						placeholder="Edição"
						label="Nome da edição"
					/>
					<Wrapper />
				</FormContainer>
				{!isEdit ? (
					<Button
						label="ADICIONAR LIVRO"
						isLoading={isLoading}
						onPress={handleAddBook}
					/>
				) : (
					<>
						<Button label="EDITAR LIVRO" onPress={handleEditBook} />
						<Wrapper />
						<Button
							label="REMOVER LIVRO"
							bgColor="secondary"
							textColor="white"
							onPress={removeUserBook}
						/>
					</>
				)}
			</Container>
		</Modal>
	);
};

export default BookModal;
