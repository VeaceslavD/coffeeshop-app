import { useParams } from "react-router-dom";
import classes from "./ViewUser.module.css";
import { useEffect, useState } from "react";
import { getUserById } from "../../services/users.services";
import { findOrderByUserId } from "../../services/orders.services";
import OrdersInformation from "../../components/OrdersInformation/OrdersInformation";

function ViewUser() {
    const { id } = useParams();
    const [userDetails, setUserDetails] = useState();

    useEffect(() => {
        const user = getUserById(+id);
        setUserDetails(user);

        const orders = findOrderByUserId(user.id);
        setUserDetails(prevUser => ({ ...prevUser, orders }));
    }, [id]);


    return (
        <div className={classes.viewUser}>
            <div className={classes.viewUserContainer}>
                {userDetails && (
                    <>
                        <header className={classes.viewUserContainerHeader}>
                            <h2> User: {userDetails.firstName} {userDetails.lastName}</h2>
                        </header>

                        <div className={classes.viewUserInformation}>
                            <div className={classes.userInformation}>
                                <h3>Information:</h3>

                                <table>
                                    <tbody>
                                        <tr>
                                            <th>User id</th>
                                            <td>{userDetails.id}</td>
                                        </tr>
                                        <tr>
                                            <th>First Name</th>
                                            <td>{userDetails.firstName}</td>
                                        </tr>
                                        <tr>
                                            <th>Last Name</th>
                                            <td>{userDetails.lastName}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{userDetails.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>{userDetails.phone}</td>
                                        </tr>
                                        <tr>
                                            <th>Role</th>
                                            <td>{userDetails.role}</td>
                                        </tr>
                                        <tr>
                                            <th>Password</th>
                                            <td>{userDetails.password}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className={classes.userOrders}>
                                <h3>Orders: </h3>

                                {userDetails.orders.map((order, index) => (
                                    <OrdersInformation order={order} key={index} />
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default ViewUser;