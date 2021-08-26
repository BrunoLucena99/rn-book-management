import {userCollection} from '../config/firebase';

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
		return null;
	} catch (err) {
		throw err.code;
	}
};
