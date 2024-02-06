import { Link } from "react-router-dom";
import classes from "./OrderDetails.module.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function OrderDetails(props) {
    const { currentUser } = useContext(UserContext);

    return (
        <div className={classes.showOrderDetails}>
            <header className={classes.showOrderDetailsHeader}>
                <h1>Order Details</h1>
                
                {currentUser.role !== "admin" && (<h3>Thanks for your order! Check out the details below.</h3>)}
            </header>

            <div className={classes.orderInformation}>
                <div className={classes.orderProducts}>
                    <h2>Products:</h2>

                    <div className={classes.productsContainer}>
                        {props.order.products.map((item, index) => (
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
                        <li>Name: <span>{props.order.userDetails.firstName} {props.order.userDetails.lastName}</span></li>
                        <li>City: <span>{props.order.userDetails.city}</span></li>
                        <li>Address: <span>{props.order.userDetails.address}</span></li>
                        <li>Email Address: <span>{props.order.userDetails.email}</span></li>
                        <li>Phone: <span>{props.order.userDetails.phone}</span> </li>
                        <li>Message: <span>{props.order.userDetails.userMessage}</span></li>
                        <li>Payment: <span>{props.order.userDetails.paymentMethod}</span></li>
                    </ul>
                </div>

                <h1 className={classes.orderTotal}>Total: <span>{props.order.orderTotalPrice} lei</span></h1>
            </div>
        </div>
    )
}

export default OrderDetails;