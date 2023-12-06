import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        if (item.id !== undefined) {
            const existingItemIndex = items.findIndex((product) => product.id === item.id);

            if (existingItemIndex !== -1) {

                const updatedItems = [...items];
                updatedItems[existingItemIndex].quantity += 1;
                setItems(updatedItems);
            } else {

                setItems([...items, { ...item, quantity: 1 }]);
            };
        };
    };

    const deleteItem = (item) => {
        const canDelete = window.confirm("Are you sure you want to delete the product?")

        if (canDelete) {
            const foundItem = items.findIndex(product => product.id === item.id);
            if (foundItem !== -1) {
                items.splice(foundItem, 1);
            };

            setItems([...items]);
        };
    };

    const removeAllItems = () => {
        const canDeleteAll = window.confirm("Are you sure you want to delete all products?");

        if (canDeleteAll) {
            setItems([]);
        };
    };

    const decreaseQuantity = (item) => {
        const existingItem = items.findIndex(product => product.id === item.id);

        if (existingItem !== -1) {
            const updatedItems = [...items];
            updatedItems[existingItem].quantity -= 1;
            if (updatedItems[existingItem].quantity === 0) {

                const canDelete = window.confirm("Are you sure you want to delete the product?");
                if (canDelete) {
                    updatedItems.splice(updatedItems, 1);
                } else {
                    return 1;
                };
            };
            setItems(updatedItems);
        };
    };

    const subTotal = (items.length > 0) ? items.reduce((total, item) => total + (item.price * item.quantity), 0) : 0;

    const cartCount = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            items: items,
            addItem: addItem,
            deleteItem: deleteItem,
            removeAllItems: removeAllItems,
            subTotal: subTotal,
            cartCount: cartCount,
            decreaseQuantity: decreaseQuantity,
        }}>
            {props.children}
        </CartContext.Provider>
    );
};