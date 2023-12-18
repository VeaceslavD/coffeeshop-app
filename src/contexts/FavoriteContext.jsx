import { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext();

export function FavoriteProvider(props) {
    const [favoriteItems, setFavoriteItems] = useState(JSON.parse(localStorage.getItem('favorites') || '[]'));

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favoriteItems));
    }, [favoriteItems]);

    const addFavoriteItem = (item) => {
        const findItemIndex = favoriteItems.findIndex(product => product.id === item.id);

        if (findItemIndex !== -1) {
            return null;
        } else {
            setFavoriteItems([...favoriteItems, item]);
        }
    };

    const deleteFavoriteItem = (item) => {
        const findIndexItem = favoriteItems.findIndex(product => product.id === item.id);

        if (findIndexItem !== -1) {
            favoriteItems.splice(findIndexItem, 1);
        }
        setFavoriteItems([...favoriteItems]);
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


