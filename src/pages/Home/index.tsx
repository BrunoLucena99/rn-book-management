import React, {useState} from 'react';
import {useContext} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import AddBookButton from '../../components/AddBookButton';
import BookModal from '../../components/BookModal';
import EmptyBooksList from '../../components/EmptyBooksList';
import Loading from '../../components/Loading';
import RenderBook from '../../components/RenderBook';
import {UserContext} from '../../contexts/UserContext';
import useBooks from '../../hooks/useBooks';
import {BookInterface} from '../../types/book';
import {HomePageProps} from '../../types/navigation';
import {Header, MainContainer, TextHeader} from './styles';

const HomePage = ({route}: HomePageProps) => {
	const {books, isSearching, addBook, editBook, removeBook} = useBooks(
		route.params.userUid,
		true,
	);
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedBook, setSelectedBook] = useState<BookInterface | null>(null);
	const {logoutUser} = useContext(UserContext);

	const onCloseModal = () => {
		setModalVisible(false);
		setSelectedBook(null);
	};

	const onOpenModal = () => setModalVisible(true);

	const onSelectedBook = (index: number) => {
		if (books) {
			const bookAux = books[index];
			setSelectedBook(bookAux);
			onOpenModal();
		} else {
			setSelectedBook(null);
		}
	};

	if (isSearching) {
		return <Loading />;
	}

	return (
		<>
			<MainContainer>
				<Header>
					<TextHeader>Book Managament List</TextHeader>
					<TouchableOpacity onPress={logoutUser}>
						<Text>Sair</Text>
					</TouchableOpacity>
				</Header>
				{!!books && (
					<FlatList
						contentContainerStyle={{flexGrow: 1, marginHorizontal: 15}}
						data={books}
						keyExtractor={(book, index) => `${book.name}-${index}`}
						renderItem={({item, index}) => (
							<TouchableOpacity
								activeOpacity={0.7}
								onPress={() => onSelectedBook(index)}>
								<RenderBook book={item} />
							</TouchableOpacity>
						)}
						ListEmptyComponent={() => <EmptyBooksList onAdd={onOpenModal} />}
					/>
				)}
				<AddBookButton onPress={onOpenModal} />
			</MainContainer>
			{modalVisible && (
				<BookModal
					onRemoveBook={removeBook}
					onEditBook={editBook}
					onAddBook={addBook}
					onCloseRequest={onCloseModal}
					book={selectedBook}
				/>
			)}
		</>
	);
};

export default HomePage;
