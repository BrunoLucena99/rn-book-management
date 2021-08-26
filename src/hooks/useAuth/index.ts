import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParamList} from '../../types/navigation';

const useAuth = () => {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	const loginWithEmail = async (email: string, password: string) => {
		try {
			const user = await auth().signInWithEmailAndPassword(email, password);
			console.log(user);
		} catch (err) {
			if (err.code === 'auth/user-not-found') {
				navigation.navigate('RegisterUser', {email, password});
			} else {
				handleFirebaseErrors(err.code);
			}
		}
	};

	const registerUser = async (email, password) => {
		try {
			const {user} = await auth().createUserWithEmailAndPassword(
				email,
				password,
			);
			console.log(user);
		} catch (err) {
			handleFirebaseErrors(err.code);
		}
	};

	const handleFirebaseErrors = (errorCode?: string) => {
		console.log('Erro não identificado', errorCode);
	};

	return {
		loginWithEmail,
		registerUser,
	};
};

export default useAuth;
