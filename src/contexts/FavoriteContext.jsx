import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

export const FavoriteContext = createContext();

export function FavoriteProvider(props) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [favoriteItems, setFavoriteItems] = useState(JSON.parse(localStorage.getItem("favorites") || '[]'));

    // Effect to update favoriteItems when currentUser changes
    useEffect(() => {
        if (currentUser && currentUser.favorites) {
            setFavoriteItems(currentUser.favorites);
        }
    }, [currentUser]);

    // Effect to update localStorage when favoriteItems change
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favoriteItems || null));
    }, [favoriteItems]);

    // Function to add a new favorite item
    const addFavoriteItem = (item) => {
        // Check if the item already exists in favorites
        const findItemIndex = favoriteItems.findIndex(product => product.id === item.id);

        if (findItemIndex !== -1) {
            // If item exists, do nothing
            return null;
        } else {
            // If item doesn't exist, add it to favorites
            const updatedFavorites = [...favoriteItems, item];
            setFavoriteItems(updatedFavorites);

            // Update currentUser's favorites if currentUser exists
            if (currentUser) {
                setCurrentUser(prev => ({ ...prev, favorites: updatedFavorites }));
            }
        }
    };

    // Function to delete a favorite item
    const deleteFavoriteItem = (item) => {
        // Filter out the item to be deleted from favorites
        const updatedFavorites = favoriteItems.filter(product => product.id !== item.id);
        setFavoriteItems(updatedFavorites);

        // Update currentUser's favorites if currentUser exists
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