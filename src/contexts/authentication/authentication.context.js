import React, { useState, createContext } from "react";
import { FIREBASE_AUTH } from "../../../firebase.config";

export const AuthenticationContext = createContext();

/**
 * Context set up for handling authentication
 * @returns 
 */
export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const onLogin = (email, password) => {
        setIsLoading(true);
        FIREBASE_AUTH.signInWithEmailAndPassword( email, password )
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e.toString());
            });
    };

    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true);
        if (password !== repeatedPassword) {
            setError("Error: Passwords do not match");
            return;
        }
        FIREBASE_AUTH.createUserWithEmailAndPassword(email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e.toString());
            });
    };

    const onLogout = () => {
        FIREBASE_AUTH.signOut()
          .then(() => {
            setUser(null);
            setError(null);
        });
    };

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout
            }}>
            {children}
        </AuthenticationContext.Provider>
    );
};