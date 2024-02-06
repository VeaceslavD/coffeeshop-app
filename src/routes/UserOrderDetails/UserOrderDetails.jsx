import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../services/orders.services";
import OrderDetails from "../../components/OrderDetails/OrderDetails";

function UserOrderDetails() {
    const [order, setOrder] = useState();
    const { id } = useParams();

    useEffect(() => {
        setOrder(getOrderById(+id));
    }, [id]);

    return (
        <>
            {order && (
                <OrderDetails order={order} />
            )}
        </>
    )
}

export default UserOrderDetails;