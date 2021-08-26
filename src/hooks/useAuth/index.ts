import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {useContext} from 'react';
import {Alert} from 'react-native';
import {UserContext} from '../../contexts/UserContext';
import {RootStackParamList} from '../../types/navigation';
import {addFirestoreUser, getUserByUid} from '../../utils/firestoreFunctions';

const useAuth = () => {
	const {saveUserAsync} = useContext(UserContext);

	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	const loginWithEmail = async (email: string, password: string) => {
		try {
			const {user} = await auth().signInWithEmailAndPassword(email, password);
			const userFirestore = await getUserByUid(user.uid);
			saveUserAsync(userFirestore);

			console.log(await getUserByUid(user.uid));
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
		if (errorCode === 'auth/email-already-in-use') {
			Alert.alert('Atenção', 'Usuário já está cadastrado');
			return;
		}
		Alert.alert(
			'Atenção',
			'Não foi possível realizar sua solicitação, tente novamente mais tarde',
		);
		console.warn(errorCode);
	};

	return {
		loginWithEmail,
		registerUser,
	};
};

export default useAuth;
