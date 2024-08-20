import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppingCart") || '[]'));
    const [cartModal, setCartModal] = useState(false);

    // Effect to update localStorage whenever items change
    useEffect(() => {
        localStorage.setItem('shoppingCart', JSON.stringify(items));
    }, [items]);

    const openCartModal = () => {
        setCartModal(true);
    };

    const closeCartModal = () => {
        setCartModal(false);
    };

    // Function to add an item to the cart
    const addItem = (item) => {
        if (!item.id) {
            // Check if item is already in the cart
            const existingItemIndex = items.findIndex((product) => product.id === item.id);

            if (existingItemIndex !== -1) {
                // If item is already in the cart, increase its quantity
                const updatedItems = [...items];
                updatedItems[existingItemIndex].quantity += 1;

                setItems(updatedItems);
            } else {
                // If item is not in the cart, add it with quantity 1
                setItems([...items, { ...item, quantity: 1 }]);
            }
        }
    };

    // Function to delete an item from the cart
    const deleteItem = (item) => {
        const foundItem = items.findIndex(product => product.id === item.id);
        if (foundItem !== -1) {
            items.splice(foundItem, 1);
        }
        setItems([...items]);
    };

    // Function to remove all items from the cart
    const removeAllItems = () => {
        setItems([]);
    };

    // Function to decrease the quantity of an item in the cart
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