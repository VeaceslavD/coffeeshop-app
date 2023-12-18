import classes from "./CartModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

function CartModal() {
    const { items, subTotal, cartCount, cartModal, closeCartModal, deleteItem } = useContext(CartContext);

    return (
        <>
            {items.length > 0
                ? (<div className={classes.cartModal} style={{ transform: `scaleY(${cartModal ? '1' : '0'})` }}>
                    <header className={classes.cartModalHeader}>
                        <h2>My Bag,<span>{cartCount} Items</span></h2>

                        <FontAwesomeIcon onClick={closeCartModal} className={classes.closeModal} icon="fa-regular fa-circle-xmark" />
                    </header>

                    <div className={classes.cartModalItems}>
                        {items.map((item, index) => (
                            <div className={classes.cartModalItemsDetails} key={index}>
                                <Link to={"/details/" + item.id} onClick={closeCartModal}>
                                    <img src={`/assets/coffeeImage/${item.image}`} alt={item.image} />

                                    <div className={classes.aboutItem}>
                                        <h2>{item.price} lei</h2>

                                        <h3>{item.name}</h3>

                                        <h3>Quantity: {item.quantity}</h3>
                                    </div>
                                </Link>

                                <FontAwesomeIcon onClick={() => deleteItem(item)} className={classes.deleteItem} icon="fa-solid fa-trash-can" />
                            </div>
                        ))}
                    </div>

                    <h4>Sub-total: <span>{subTotal} lei</span></h4>

                    <div className={classes.cartModalLinks}>
                        <Link to="/cart" onClick={closeCartModal} className={classes.viewBagLink}>View Bag</Link>
                        <Link to="/checkout" onClick={closeCartModal} className={classes.checkoutLink}>Checkout</Link>
                    </div>
                </div>)
                : (<div style={{ transform: `scaleY(0)` }}></div>)
            }
        </>
    )
}

export default CartModal;