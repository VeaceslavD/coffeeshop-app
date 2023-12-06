import { useContext } from "react";
import classes from "./Cart.module.css";
import { CartContext } from "../../contexts/cart.context";
import { Link, useNavigate } from "react-router-dom";
import { FavoriteContext } from "../../contexts/favorite.context";

function Cart() {
    const cartContext = useContext(CartContext);
    const favoriteContext = useContext(FavoriteContext);
    const navigate = useNavigate();

    const deleteItemFromCart = (item) => {
        cartContext.deleteItem(item);
    };

    const addQuantityToItem = (item) => {
        cartContext.addItem(item);
    };

    const decreaseQuantityFromItem = (item) => {
        cartContext.decreaseQuantity(item);
    };

    const goToShopping = () => {
        navigate("/products/all");
    };

    const saveForLater = (item) => {
        favoriteContext.addFavoriteItem(item);
        cartContext.deleteItem(item);
    };

    const viewAllSavedItems = () => {
        navigate("/favorite");
    };

    const removeAllItems = () => {
        cartContext.removeAllItems();
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <>
            {cartContext.items.length > 0
                ? (<div className={classes.cart}>
                    <div className={classes.cartContainer}>
                        <div className={classes.cartHeader}>
                            <h2>My Bag</h2>

                            <button onClick={() => removeAllItems()}>Remove all items</button>
                        </div>
                        {cartContext.items.map((item, index) => (
                            <div className={classes.cartItem} key={index}>
                                <Link to={`/details/` + item.id}>
                                    <img src={`/assets/coffeeImage/${item.image}`} alt={item.image} />
                                </Link>

                                <div className={classes.cartItemDetails}>
                                    <h2>{item.price} lei</h2>

                                    <h1>{item.name}</h1>

                                    <div className={classes.aboutItem}>
                                        <h3>Country:<span>{item.country}</span></h3>
                                        <h3>Type:<span>{item.category}</span></h3>
                                        <h3>Weight:<span>{item.weight}</span></h3>
                                    </div>

                                    <div className={classes.cartItemQuantity}>
                                        <button onClick={() => decreaseQuantityFromItem(item)}>-</button>
                                        <h3>{item.quantity}</h3>
                                        <button onClick={() => addQuantityToItem(item)}>+</button>
                                    </div>

                                    <button className={classes.saveForLater} onClick={() => saveForLater(item)}>
                                        <img className={classes.favorite} src="/assets/media/favorite2.svg" alt="favorite" />
                                        Save for later
                                    </button>
                                </div>

                                <button onClick={() => deleteItemFromCart(item)} className={classes.deleteItem}>
                                    <img src="/assets/media/close.png" alt="close" />
                                </button>
                            </div>
                        ))}
                        <button className={classes.viewAllSavedItems} onClick={() => viewAllSavedItems()}>View all favorite items</button>
                    </div>

                    <div className={classes.cartTotal}>
                        <h1>Total</h1>

                        <h3>Sub-total<span>{cartContext.subTotal} lei</span></h3>

                        <h3>Delivery<span>Standart delivery (Free)</span></h3>

                        <button onClick={() => handleCheckout()}>Checkout</button>

                        <div className={classes.payment}>
                            <h4>We accept</h4>
                            <div className={classes.imgCards}>
                                <img src="/assets/media/Visa.svg" alt="visa" />
                                <img src="/assets/media/paynet.svg" alt="paynet" />
                                <img src="/assets/media/Mastercard.svg" alt="mastercard" />
                            </div>
                        </div>
                    </div>
                </div>)

                : (<div className={classes.noItems}>
                    <h3>Your bag is empty</h3>
                    <button onClick={() => goToShopping()}>Go to shopping</button>
                </div>)
            }
        </>
    )
};

export default Cart;