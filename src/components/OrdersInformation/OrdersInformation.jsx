import { Link } from "react-router-dom";
import classes from "./OrdersInformation.module.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function OrdersInformation(props) {
    const { currentUser } = useContext(UserContext);

    return (
        <div className={classes.ordersInformation}>
            <div className={classes.aboutOrder}>
                <div className={classes.aboutOrderInfo}>
                    <h1>Order No.: {props.order.id}</h1>
                    <h2>Total: {props.order.orderTotalPrice} lei</h2>
                </div>

                <div className={classes.aboutOrderImg}>
                    {props.order.products.map(product => (
                        <img src={`/assets/coffeeImage/${product.image}`} alt={product.image} key={product.id} />
                    ))}
                </div>
            </div>

            <Link to={currentUser.role === "admin" ? "/manage-users/viewUserOrder/" + props.order.id : "/my-account/orders/" + props.order.id}>Details</Link>
        </div>
    )
}

export default OrdersInformation;