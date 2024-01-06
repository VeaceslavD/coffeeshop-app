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

    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser || null))
    }, [currentUser]);

    useEffect(() => {
        const storageUser = JSON.parse(localStorage.getItem('currentUser') || null);
        if (storageUser) {
            const user = findUser(storageUser.email, storageUser.password);

            if (!user) {
                setCurrentUser(null);
            }
        }
    }, []);

    const signUp = (user) => {
        const createdUser = saveOrUpdateUser(user);
        localStorage.setItem('currentUser', JSON.stringify(createdUser));
        return createdUser;
    };

    const signOut = () => {
        setCurrentUser(null);
    };

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