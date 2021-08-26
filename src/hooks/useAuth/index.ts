import auth from '@react-native-firebase/auth';

const useAuth = () => {
	const handleLoginWithEmail = async (email: string, password: string) => {
		try {
			const user = await auth().signInWithEmailAndPassword(email, password);
			console.log(user);
		} catch (err) {
			handleFirebaseErrors(err.code);
		}
	};

	const handleFirebaseErrors = (errorCode?: string) => {
		if (errorCode === 'auth/user-not-found') {
			console.log('Usuário não encontrado');
		} else {
			console.log('Erro não identificado');
		}
	};

	return {
		handleLoginWithEmail,
	};
};

export default useAuth;
