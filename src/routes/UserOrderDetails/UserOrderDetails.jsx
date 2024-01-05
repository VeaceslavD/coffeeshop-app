import { useEffect, useState } from "react";
import AccountServices from "../../components/AccountServices/AccountServices";
import classes from "./UserOrderDetails.module.css";
import { Link, useParams } from "react-router-dom";
import { getOrderById } from "../../services/orders.services";


function UserOrderDetails() {
    const [order, setOrder] = useState();
    const { id } = useParams();

    useEffect(() => {
        setOrder(getOrderById(+id));
    }, [id]);

    return (
        <div className={classes.userOrderDetails}>
            <div className={classes.userOrderDetailsContainer}>
                <AccountServices />

                {order && (
                    <div className={classes.showOrderDetails}>
                        <header className={classes.showOrderDetailsHeader}>
                            <h1>Order Details</h1>
                            <h3>Thanks for your order! Check out the details below.</h3>
                        </header>

                        <div className={classes.orderInformation}>
                            <div className={classes.orderProducts}>
                                <h2>Products:</h2>

                                <div className={classes.productsContainer}>
                                    {order.products.map((item, index) => (
                                        <div className={classes.productDetails} key={index}>
                                            <Link to={"/details/" + item.id}>
                                                <img src={`/assets/coffeeImage/${item.image}`} alt={item.image} />

                                                <div className={classes.productCardInformation}>
                                                    <h4>{item.brand}</h4>

                                                    <h2>{item.name}</h2>

                                                    <p>Quantity: {item.quantity}</p>

                                                    <h3>{item.price} lei</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={classes.shippingDetails}>
                                <h1>Shipping Details:</h1>

                                <ul>
                                    <li>Name: <span>{order.userDetails.firstName} {order.userDetails.lastName}</span></li>
                                    <li>City: <span>{order.userDetails.city}</span></li>
                                    <li>Address: <span>{order.userDetails.address}</span></li>
                                    <li>Email Address: <span>{order.userDetails.email}</span></li>
                                    <li>Phone: <span>{order.userDetails.phone}</span> </li>
                                    <li>Message: <span>{order.userDetails.userMessage}</span></li>
                                    <li>Payment: <span>{order.userDetails.paymentMethod}</span></li>
                                </ul>
                            </div>

                            <h1 className={classes.orderTotal}>Total: <span>{order.orderTotalPrice} lei</span></h1>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default UserOrderDetails;