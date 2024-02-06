import classes from "./UserOrders.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { findOrderByUserId } from "../../services/orders.services";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import OrdersInformation from "../../components/OrdersInformation/OrdersInformation";
import { Link } from "react-router-dom";

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
        <div className={classes.showOrdersDetails}>
            <header className={classes.showOrdersDetailsHeader}>
                <Link to='/my-account'>Back</Link>
                <FontAwesomeIcon className={classes.icon} icon="fa-solid fa-box" />
                <h1>My Orders</h1>
            </header>

            <h3>Displaying {userOrders.length} orders</h3>

            {userOrders.map((order, index) => (
                <OrdersInformation key={index} order={order} />
            ))}
        </div>
    )
}

export default UserOrders;