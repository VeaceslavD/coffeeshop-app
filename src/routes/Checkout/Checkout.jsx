import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Checkout.module.css";
import Form from "../../components/FormTemplate/Form";
import { CartContext } from "../../contexts/CartContext";
import { placeOrder, orders } from "../../services/orders.services";
import { UserContext } from "../../contexts/UserContext";

function Checkout() {
    const { items, subTotal, removeAllItems } = useContext(CartContext);
    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);
    const cartItems = items;
    const orderTotalPrice = subTotal;
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handlePlaceOrder = (userDetails) => {
        const order = {
            id: orders.length + 1,
            products: cartItems,
            userDetails: {
                ...currentUser,
                ...userDetails
            },
            orderTotalPrice: orderTotalPrice
        };

        placeOrder(order);
        navigate("/confirmation/" + order.id);
        removeAllItems();
    };

    return (
        <div className={classes.checkout}>
            <div className={classes.checkoutContainer}>
                <div className={classes.shippingInfo}>
                    <h1>Checkout</h1>

                    <Form handlePlaceOrder={handlePlaceOrder} currentUser={currentUser} />
                </div>

                <div className={classes.cartSummary}>
                    <header className={classes.cartSummaryHeader}>
                        <h1>{totalItems} Items</h1>
                    </header>

                    <div className={classes.cartSummaryDetails}>
                        {cartItems.map((item, index) => (
                            <div className={classes.cartItems} key={index}>
                                <img src={`/assets/coffeeImage/${item.image}`} alt={item.image} />

                                <div className={classes.cartItemsDetails}>
                                    <p>{item.price} lei</p>

                                    <h2>{item.name}</h2>

                                    <p>Quantity: <span>{item.quantity}</span></p>
                                </div>
                            </div>
                        ))}

                        <h3>Subtotal <span>{orderTotalPrice} lei</span></h3>

                        <h3>Delivery <span>Free</span></h3>

                        <h1>Total to pay <span>{orderTotalPrice} lei</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;