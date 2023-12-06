import { createContext, useState } from "react";

export const FavoriteContext = createContext();

export function FavoriteProvider(props) {
    const [favoriteItems, setFavoriteItems] = useState([]);

    const addFavoriteItem = (item) => {
        const findItemIndex = favoriteItems.findIndex(product => product.id === item.id);

        if (findItemIndex !== -1) {
            return null;
        } else {

            setFavoriteItems([...favoriteItems, item]);
        };
    };

    const deleteFavoriteItem = (item) => {
        const findIndexItem = favoriteItems.findIndex(product => product.id === item.id);

        if (findIndexItem !== -1) {
            favoriteItems.splice(findIndexItem, 1);
        }

        setFavoriteItems([...favoriteItems]);
    };

    return (
        <FavoriteContext.Provider value={{
            favoriteItems: favoriteItems,
            addFavoriteItem: addFavoriteItem,
            deleteFavoriteItem: deleteFavoriteItem
        }}>
            {props.children}
        </FavoriteContext.Provider>
    )
};
