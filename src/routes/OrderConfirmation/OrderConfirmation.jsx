import { useParams } from "react-router-dom";
import classes from "./OrderConfirmation.module.css";
import { useEffect, useState } from "react";
import { getOrderById } from "../../services/orders.services";

function OrderConfirmation() {
    const [order, setOrder] = useState();
    const { id } = useParams();

    useEffect(() => {
        setOrder(getOrderById(+id));
    }, [id]);

    return (
        <div className={classes.confirmation}>
            <div className={classes.confirmationContainer}>
                {order && (
                    <>
                        <header className={classes.headerConfirmation}>
                            <h1>It's ordered!</h1>

                            <h1>Hi  <span>{order.userDetails.firstName}</span> - thanks for your order, we hope you enjoyed shopping with us.</h1>
                        </header>

                        <div className={classes.orderDetailsContainer}>
                            <div className={classes.orderDetails}>
                                <h1>Your Products</h1>

                                {order.products.map(product => (
                                    <div className={classes.productDetails} key={product.id}>
                                        <img src={`/assets/coffeeImage/${product.image}`} alt={product.image} />
                                        <div className={classes.aboutProduct}>
                                            <h3>{product.name}</h3>
                                            <p>Quantity: {product.quantity}</p>
                                            <p>Price: {product.price} lei</p>
                                        </div>
                                    </div>
                                ))}
                                <h3>Total: {order.orderTotalPrice} lei</h3>
                            </div>

                            <div className={classes.userDetails}>
                                <h1>Shipping To</h1>

                                <ul>
                                    <li>Name: <span>{order.userDetails.firstName} {order.userDetails.lastName}</span></li>
                                    <li>City: <span>{order.userDetails.city}</span></li>
                                    <li>Address: <span>{order.userDetails.address}</span></li>
                                    <li>Email address: <span>{order.userDetails.emailAddress}</span></li>
                                    <li>Phone: <span>{order.userDetails.phone}</span></li>
                                    <li>User message: <span>{order.userDetails.userMessage}</span></li>
                                    <li>Payment: <span>{order.userDetails.paymentMethod}</span></li>
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default OrderConfirmation;