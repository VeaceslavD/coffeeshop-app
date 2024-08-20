import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../services/orders.services";
import classes from "./ViewUserOrderDetails.module.css";
import OrderDetails from "../../components/OrderDetails/OrderDetails";

function ViewUserOrderDetails() {
    const [order, setOrder] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setOrder(getOrderById(+id));
    }, [id]);

    return (
        <div className={classes.viewUserOrderDetails}>
            <div className={classes.viewUSerOrderDetailsContainer}>
                {order && (
                    <OrderDetails order={order} />
                )}
            </div>
        </div>
    )
}
export default ViewUserOrderDetails;