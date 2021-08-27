import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {useContext} from 'react';
import {Alert} from 'react-native';
import {UserContext} from '../../contexts/UserContext';
import {RootStackParamList} from '../../types/navigation';
import {addFirestoreUser, getUserByUid} from '../../utils/firestoreFunctions';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const useAuth = () => {
	const {saveUserAsync} = useContext(UserContext);

	GoogleSignin.configure({
		webClientId:
			'953237648442-ifbetb6d6h4lpd93euemftjca44u861q.apps.googleusercontent.com',
	});

	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	const userSignout = async () => {
		return await auth().signOut();
	};

	const loginWithGoogle = async () => {
		try {
			const {idToken} = await GoogleSignin.signIn();
			const credentials = await auth.GoogleAuthProvider.credential(idToken);
			const {user} = await auth().signInWithCredential(credentials);
			const userTemp = {
				userName: user.displayName ?? '',
				avatar: user.photoURL ?? '',
				email: user.email!,
			};
			const userFirestore = await addFirestoreUser(user.uid, userTemp);
			saveUserAsync(userFirestore);
		} catch (e) {
			handleFirebaseErrors(e.code);
		}
	};

	const loginWithEmail = async (email: string, password: string) => {
		try {
			const {user} = await auth().signInWithEmailAndPassword(email, password);
			const userFirestore = await getUserByUid(user.uid);
			saveUserAsync(userFirestore);
		} catch (err) {
			if (err.code === 'auth/user-not-found') {
				navigation.navigate('RegisterUser', {email, password});
			} else {
				handleFirebaseErrors(err.code);
			}
		}
	};

	const registerUser = async (
		email: string,
		password: string,
		userName: string,
	) => {
		try {
			const {user} = await auth().createUserWithEmailAndPassword(
				email,
				password,
			);
			const userFirestore = await addFirestoreUser(user.uid, {
				email,
				userName,
			});
			saveUserAsync(userFirestore);
		} catch (err) {
			handleFirebaseErrors(err.code);
		}
	};
	const handleFirebaseErrors = (errorCode?: string) => {
		if (errorCode) {
			switch (errorCode) {
				case 'auth/email-already-in-use':
					Alert.alert('Atenção', 'Usuário já está cadastrado');
					return;

				case 'auth/weak-password':
					Alert.alert(
						'Atenção',
						'Senha fraca, tente uma igual ou maior que 6 dígitos',
					);
					return;

				case 'auth/wrong-password':
					Alert.alert('Atenção', 'Senha incorreta');
					return;
			}
		}

		Alert.alert(
			'Atenção',
			'Não foi possível realizar sua solicitação, tente novamente mais tarde',
		);
	};

	return {
		loginWithEmail,
		registerUser,
		userSignout,
		loginWithGoogle,
	};
};

export default useAuth;
