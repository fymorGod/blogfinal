import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export function AuthContextProvider ({ children }) {
    const [ user, setUser ] = useState({});

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <UserContext.Provider value={{ createUser, user, logout, signIn}}>
            { children }
        </UserContext.Provider>
    );
}

export const UserAuth = () => {
    return useContext(UserContext);
}