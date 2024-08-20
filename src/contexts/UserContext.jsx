import { createContext, useEffect, useState } from "react";
import { findUser, saveOrUpdateUser } from "../services/users.services";

export const UserContext = createContext();

export function UserProvider(props) {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser') || null));
    const [userModal, setUserModal] = useState(false);

    const openUserModal = () => {
        setUserModal(true);
    };

    const closeUserModal = () => {
        setUserModal(false);
    };

    // Effect to update localStorage when currentUser changes
    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser || null))
    }, [currentUser]);

    // Effect to check if the user stored in localStorage is valid
    useEffect(() => {
        const storageUser = JSON.parse(localStorage.getItem('currentUser') || null);
        if (storageUser) {
            const user = findUser(storageUser.email, storageUser.password);

            if (!user) {
                setCurrentUser(null);
            }
        }
    }, []);

    // Function to sign up a new user
    const signUp = (user) => {
        const createdUser = saveOrUpdateUser(user);
        localStorage.setItem('currentUser', JSON.stringify(createdUser));
        setCurrentUser(createdUser);
        return createdUser;
    };

    // Function to sign out the current user
    const signOut = () => {
        setCurrentUser(null);
    };

    // Function to log in an existing user
    const login = (email, password) => {
        const user = findUser(email, password);
        setCurrentUser(user);
        return user;
    };

    return (
        <UserContext.Provider value={{
            currentUser: currentUser,
            setCurrentUser: setCurrentUser,
            signUp: signUp,
            signOut: signOut,
            login: login,
            userModal: userModal,
            openUserModal: openUserModal,
            closeUserModal: closeUserModal,
        }}>
            {props.children}
        </UserContext.Provider>
    )
};