import classes from "./AccountServices.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function AccountServices() {
    const { currentUser } = useContext(UserContext);

    return (
        <div className={classes.accountServices}>
            <header className={classes.accountServicesHeader}>
                <img src="/assets/media/AccountUser.png" alt="AccountUser" />

                <div className={classes.accountServicesHeaderTitle}>
                    <h2>Hi,</h2>
                    <h1>{currentUser.firstName} {currentUser.lastName}</h1>
                </div>
            </header>

            <ul className={classes.services}>
                <Link to="/my-account">
                    <li>
                        <FontAwesomeIcon icon="fa-solid fa-user" />
                        Account overview
                    </li>
                </Link>
                <Link to="/my-account/orders">
                    <li>
                        <FontAwesomeIcon icon="fa-solid fa-box" />
                        My orders
                    </li>
                </Link>
                <Link to="/my-account/my-details">
                    <li>
                        <FontAwesomeIcon icon="fa-solid fa-id-card" />
                        My details
                    </li>
                </Link>
                <Link>
                    <li>
                        <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                        Return Information
                    </li>
                </Link>
                <Link>
                    <li>
                        <FontAwesomeIcon icon="fa-solid fa-bell" />
                        Notification
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default AccountServices;