import { useContext, useState } from "react";
import classes from "./Cart.module.css";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import CartTotal from "../../components/CartTotal/CartTotal";
import CartProduct from "../../components/CartProduct/CartProduct";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

function Cart() {
    const { deleteItem, addItem, removeAllItems, items, subTotal, decreaseQuantity } = useContext(CartContext);
    const favoriteContext = useContext(FavoriteContext);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const openDeleteModal = () => {
        setShowDeleteModal(true);
    };

    const closeDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const removeAllItemsFromCart = () => {
        openDeleteModal();
    };

    const confirmDelete = () => {
        removeAllItems();
        closeDeleteModal();
    };

    const saveForLater = (item) => {
        favoriteContext.addFavoriteItem(item);
        deleteItem(item);
    };

    return (
        <>
            {items.length > 0
                ? (<div className={classes.cart}>
                    <div className={classes.cartContainer}>
                        <div className={classes.cartProductContainer}>
                            <div className={classes.cartHeader}>
                                <h2>My Bag</h2>

                                <button onClick={() => removeAllItemsFromCart()}>Remove all items</button>
                            </div>
                            {items.map((item, index) => (
                                <CartProduct item={item}
                                    key={index}
                                    addItem={addItem}
                                    deleteItem={deleteItem}
                                    saveForLater={saveForLater}
                                    decreaseQuantity={decreaseQuantity}
                                />
                            ))}
                            <Link to="/favorite" className={classes.viewAllSavedItems}>View all favorite items</Link>
                        </div>
                        <CartTotal subTotal={subTotal} />
                    </div>
                </div>)

                : (<div className={classes.noItems}>
                    <h3>Your bag is empty</h3>
                    <Link to="/products/all">Go to shopping</Link>
                </div>)
            }

            {showDeleteModal && (
                <DeleteModal
                    items={items}
                    onConfirm={confirmDelete}
                    onClose={closeDeleteModal}
                />
            )}
        </>
    )
};

export default Cart;