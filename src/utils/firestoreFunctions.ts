import {fireDb, userCollection} from '../config/firebase';
import {BookInterface} from '../types/book';

interface FirestoreUser {
	email: string;
	userName: string;
	avatar?: string;
}

export const addFirestoreUser = async (uid: string, user: FirestoreUser) => {
	try {
		await userCollection.doc(uid).set(user);
		return {
			uid,
			...user,
		};
	} catch (err) {
		throw err.code;
	}
};

export const getUserByUid = async (uid: string) => {
	try {
		const user = await userCollection.doc(uid).get();
		if (user.exists) {
			return {
				...user.data(),
				uid,
			};
		}
		throw 'Usuário não encontrado';
	} catch (err) {
		throw err.code ?? err.toString();
	}
};

export const getBooksByUserUid = async (uid: string) => {
	try {
		const books: BookInterface[] = [];
		const collectionData = await fireDb()
			.collection('users')
			.doc(uid)
			.collection('books')
			.get();

		collectionData.forEach(doc => {
			books.push(doc.data());
		});

		return books;
	} catch (error) {
		throw error.code ? error.code : error.toString();
	}
};

export const addBookToUser = async (userUid: string, book: BookInterface) => {
	return await fireDb()
		.collection('users')
		.doc(userUid)
		.collection('books')
		.add(book);
};
