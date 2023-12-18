import { createContext, useContext, useEffect, useState } from "react";
import { findUser, saveUser } from "../services/users.services";
import { FavoriteContext } from "./FavoriteContext";
import { CartContext } from "./CartContext";
import { orders } from "../services/orders.services";

export const UserContext = createContext();

export function UserProvider(props) {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser') || null));
    const [userModal, setUserModal] = useState(false);
    const favoriteContext = useContext(FavoriteContext);
    const cartContext = useContext(CartContext);

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

    const signUp = (firstName, lastName, email, password) => {
        const user = saveUser(firstName, lastName, email, password);

        user.shoppingCart = cartContext?.items;
        user.favorites = favoriteContext?.favoriteItems;
        user.orders = orders;

        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
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
            signUp: signUp,
            signOut: signOut,
            login: login,
            userModal: userModal,
            openUserModal: openUserModal,
            closeUserModal: closeUserModal
        }}>
            {props.children}
        </UserContext.Provider>
    )
};