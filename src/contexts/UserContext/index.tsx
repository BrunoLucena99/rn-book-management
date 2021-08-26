import React, {createContext, ReactNode} from 'react';
import {useState} from 'react';

interface UserInterface {
	userName: string;
	avatar?: string;
	email: string;
	uid: string;
}

interface UserContextData {
	user: UserInterface | null;
	saveUserAsync: (userAux: UserInterface) => void;
}

export const UserContext = createContext({} as UserContextData);

const UserProvider = ({children}: {children: ReactNode}) => {
	const [user, setUser] = useState<UserInterface | null>(null);

	const saveUserAsync = (userAux: UserInterface) => {
		setUser(userAux);
	};

	return (
		<UserContext.Provider value={{saveUserAsync, user}}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
