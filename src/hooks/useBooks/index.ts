import {useCallback, useEffect, useState} from 'react';
import {getBooksByUserUid} from '../../utils/firestoreFunctions';

interface BooksInterface {
	name: string;
}

const useBooks = (userUid: string, immediate: boolean = false) => {
	const [isSearchingBooks, setIsSearchingBooks] = useState(false);
	const [books, setBooks] = useState<BooksInterface[] | null>(null);

	const getUserBooks = useCallback(async () => {
		try {
			setIsSearchingBooks(true);
			const booksAux = await getBooksByUserUid(userUid);
			setBooks(booksAux);
		} catch (err) {
			console.log(err);
		} finally {
			setIsSearchingBooks(false);
		}
	}, [userUid]);

	useEffect(() => {
		if (immediate && !books) {
			getUserBooks();
		}
	}, [immediate, getUserBooks, books]);

	return {
		getUserBooks,
		books,
		isSearching: isSearchingBooks,
	};
};

export default useBooks;
