import React, {useState} from 'react';
import {Alert} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {ManageBookProps} from '../../types/navigation';
import {
	BtnWrapper,
	FormContainer,
	MainContainer,
	Title,
	Wrapper,
} from './styles';

const ManageBook = ({route, navigation}: ManageBookProps) => {
	const book = route.params?.book;
	const isEdit = !!book;
	const [isLoading, setIsLoading] = useState(false);
	const [name, setName] = useState(book?.name ?? '');
	const [author, setAuthor] = useState(book?.author ?? '');
	const [publishBy, setPublishBy] = useState(book?.publishBy ?? '');
	const [edition, setEdition] = useState(book?.edition ?? '');

	const {goBack} = navigation;

	const verifyIfIsEmpty = () => !name || !author || !publishBy || !edition;

	const handleRemoveBook = async () => {
		try {
			setIsLoading(true);
			await route.params.onRemove(book!.id);
			goBack();
		} catch {
			Alert.alert('Atenção', 'Ocorreu um erro ao remover o livro');
			setIsLoading(false);
		}
	};

	const handleEditBook = async () => {
		await route.params.onEdit({
			id: book!.id,
			name,
			publishBy,
			edition,
			author,
		});
	};

	const handleAddBook = async () => {
		await route.params.onAdd({
			name,
			publishBy,
			edition,
			author,
		});
	};

	const submit = async () => {
		if (verifyIfIsEmpty()) {
			Alert.alert('Atenção', 'Preencha todos os dados do livro para continuar');
			return;
		}

		try {
			setIsLoading(true);
			isEdit ? await handleEditBook() : await handleAddBook();
			goBack();
		} catch (err) {
			console.log(err);
			Alert.alert(
				'Atenção',
				`Ocorreu um erro ao ${isEdit ? 'Editar' : 'Salvar'} o livro`,
			);
			setIsLoading(false);
		}
	};

	return (
		<MainContainer>
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
				<BtnWrapper />
				{!isEdit ? (
					<Button
						label="ADICIONAR LIVRO"
						isLoading={isLoading}
						onPress={submit}
					/>
				) : (
					<>
						<Button
							label="EDITAR LIVRO"
							isLoading={isLoading}
							onPress={submit}
						/>
						<Wrapper />
						<Button
							label="REMOVER LIVRO"
							bgColor="secondary"
							textColor="white"
							onPress={handleRemoveBook}
							isLoading={isLoading}
						/>
					</>
				)}
			</FormContainer>
		</MainContainer>
	);
};

export default ManageBook;
