import {fireDb, userCollection} from '../config/firebase';

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
		const books: {name: string}[] = [];
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
