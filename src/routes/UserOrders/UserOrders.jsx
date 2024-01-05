import classes from "./UserOrders.module.css";
import AccountServices from "../../components/AccountServices/AccountServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { findOrderByUserId } from "../../services/orders.services";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

function UserOrders() {
    const [userOrders, setUserOrders] = useState([]);
    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        if (currentUser && currentUser.id) {
            const ordersByUserId = findOrderByUserId(currentUser.id);
            setUserOrders(ordersByUserId);
        }
    }, [currentUser]);

    return (
        <div className={classes.orders}>
            <div className={classes.ordersContainer}>
                <AccountServices />

                <div className={classes.showOrdersDetails}>
                    <header className={classes.showOrdersDetailsHeader}>
                        <FontAwesomeIcon className={classes.icon} icon="fa-solid fa-box" />
                        <h1>My Orders</h1>
                    </header>

                    <h3>Displaying {userOrders.length} orders</h3>

                    {userOrders.map((order, index) => (
                        <div className={classes.ordersInformation} key={index}>
                            <div className={classes.aboutOrder}>
                                <div className={classes.aboutOrderInfo}>
                                    <h1>Order No.: {order.id}</h1>
                                    <h2>Total: {order.orderTotalPrice} lei</h2>
                                </div>

                                <div className={classes.aboutOrderImg}>
                                    {order.products.map(product => (
                                        <img src={`/assets/coffeeImage/${product.image}`} alt={product.image} key={product.id} />
                                    ))}
                                </div>
                            </div>

                            <Link to={"/my-account/orders/" + order.id}>Details</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserOrders;