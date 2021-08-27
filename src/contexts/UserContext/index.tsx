import React, {createContext, ReactNode} from 'react';
import {useCallback, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserInterface {
	userName: string;
	avatar?: string;
	email: string;
	uid: string;
}

interface UserContextData {
	user: UserInterface | null;
	saveUserAsync: (userAux: UserInterface) => void;
	logoutUser: () => void;
}

const USER_KEY = '@BookManagamentUser';

export const UserContext = createContext({} as UserContextData);

const UserProvider = ({children}: {children: ReactNode}) => {
	const [user, setUser] = useState<UserInterface | null>(null);

	const saveUserAsync = async (userAux: UserInterface) => {
		await AsyncStorage.setItem(USER_KEY, JSON.stringify(userAux));
		setUser(userAux);
	};

	const loadUser = useCallback(async () => {
		const userStorage = await AsyncStorage.getItem(USER_KEY);
		if (userStorage) {
			setUser(JSON.parse(userStorage));
		}
	}, []);

	useEffect(() => {
		loadUser();
	}, [loadUser]);

	const logoutUser = async () => {
		try {
			setUser(null);
			await AsyncStorage.removeItem(USER_KEY);
		} catch {}
	};

	return (
		<UserContext.Provider value={{saveUserAsync, user, logoutUser}}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
