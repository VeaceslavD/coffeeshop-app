import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppingCart") || '[]'));
    const [cartModal, setCartModal] = useState(false);

    useEffect(() => {
        localStorage.setItem('shoppingCart', JSON.stringify(items));
    }, [items]);

    const openCartModal = () => {
        setCartModal(true);
    };

    const closeCartModal = () => {
        setCartModal(false);
    };
    
    const addItem = (item) => {
        if (item.id !== undefined) {
            const existingItemIndex = items.findIndex((product) => product.id === item.id);

            if (existingItemIndex !== -1) {
                const updatedItems = [...items];
                updatedItems[existingItemIndex].quantity += 1;

                setItems(updatedItems);
            } else {
                setItems([...items, { ...item, quantity: 1 }]);
            }
        }
    };

    const deleteItem = (item) => {
        const foundItem = items.findIndex(product => product.id === item.id);
        if (foundItem !== -1) {
            items.splice(foundItem, 1);
        }
        setItems([...items]);
    };

    const removeAllItems = () => {
        setItems([]);
    };

    const decreaseQuantity = (item) => {
        const existingItemIndex = items.findIndex(product => product.id === item.id);

        if (existingItemIndex !== -1) {
            const updatedItems = [...items];

            if (updatedItems[existingItemIndex].quantity === 1) {
                return false;
            } else {
                updatedItems[existingItemIndex].quantity -= 1;
                setItems(updatedItems);
                return true;
            }
        }
    };

    const subTotal = items.reduce((total, item) => total += (item.price * item.quantity), 0);

    const cartCount = items.reduce((total, item) => total += item.quantity, 0);

    return (
        <CartContext.Provider value={{
            items: items,
            addItem: addItem,
            deleteItem: deleteItem,
            removeAllItems: removeAllItems,
            subTotal: subTotal,
            cartCount: cartCount,
            decreaseQuantity: decreaseQuantity,
            cartModal: cartModal,
            openCartModal: openCartModal,
            closeCartModal: closeCartModal
        }}>
            {props.children}
        </CartContext.Provider>
    );
};