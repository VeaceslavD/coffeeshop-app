import { useContext, useEffect, useState } from "react";
import classes from "./Checkout.module.css";
import Form from "../../components/FormTemplate/Form";
import { CartContext } from "../../contexts/cart.context";

function Checkout() {
    const cartContext = useContext(CartContext);
    const cartItems = cartContext.items;
    const [items, setItems] = useState([]);
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        setItems([...cartItems]);

    }, [cartItems]);

    console.log(cartItems);

    const handlePlaceOrder = (userDetails) => {
        const order = {
            id: orders.length,
            products: items,
            userDetails: userDetails
        };

        setOrders([...orders, order]);
        console.log(orders);
    };


    return (
        <div className={classes.checkout}>
            <div className={classes.checkoutContainer}>
                <div className={classes.shippingInfo}>
                    <h1>Checkout</h1>

                    <Form handlePlaceOrder={handlePlaceOrder} />

                    <button onClick={() => handlePlaceOrder()}>Buy now</button>
                </div>

                <div className={classes.cartSummary}>
                    <header className={classes.cartSummaryHeader}>
                        <h1>Items</h1>

                        <button>Edit</button>
                    </header>

                    <div className={classes.cartSummaryDetails}>
                        {items.map((item, index) => (
                            <div className={classes.cartItems} key={index}>
                                <img src={`/assets/coffeeImage/${item.image}`} alt={item.image} />

                                <div className={classes.cartItemsDetails}>
                                    <p>{item.price} lei</p>

                                    <h2>{item.name}</h2>

                                    <p>Quantity: <span>{item.quantity}</span></p>

                                    <p>Weight: <span>{item.weight}</span></p>
                                </div>
                            </div>
                        ))}

                        <h3>Subtotal <span>1000 lei</span></h3>

                        <h3>Delivery <span>Free</span></h3>

                        <h1>Total to pay <span>1000 lei</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;