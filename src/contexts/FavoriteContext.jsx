import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

export const FavoriteContext = createContext();

export function FavoriteProvider(props) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [favoriteItems, setFavoriteItems] = useState(JSON.parse(localStorage.getItem("favorites") || '[]'));

    useEffect(() => {
        if (currentUser && currentUser.favorites) {
            setFavoriteItems(currentUser.favorites);
        }
    }, [currentUser]);
    
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favoriteItems || null));
    }, [favoriteItems]);

    const addFavoriteItem = (item) => {
        const findItemIndex = favoriteItems.findIndex(product => product.id === item.id);

        if (findItemIndex !== -1) {
            return null;
        } else {
            const updatedFavorites = [...favoriteItems, item];
            setFavoriteItems(updatedFavorites);

            if (currentUser) {
                setCurrentUser(prev => ({ ...prev, favorites: updatedFavorites }));
            }
        }
    };

    const deleteFavoriteItem = (item) => {
        const updatedFavorites = favoriteItems.filter(product => product.id !== item.id);
        setFavoriteItems(updatedFavorites);

        if (currentUser) {
            setCurrentUser(prev => ({ ...prev, favorites: updatedFavorites }));
        }
    };

    const favoriteCount = favoriteItems.length;

    return (
        <FavoriteContext.Provider value={{
            favoriteItems: favoriteItems,
            addFavoriteItem: addFavoriteItem,
            deleteFavoriteItem: deleteFavoriteItem,
            favoriteCount: favoriteCount,
        }}>
            {props.children}
        </FavoriteContext.Provider>
    )
};