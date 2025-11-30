import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider ({children}) {
    
    const [user, setUser] = useState();
    
    const register = (newUser) => setUser(newUser);

    return ( 
        <UserContext.Provider value={{user, register}}>
            {children}
        </UserContext.Provider>
    )
}