import classes from "./AccountServices.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function AccountServices() {
    const { currentUser, signOut } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const isDetailsPage = location.pathname.includes('/my-account/my-details');
    const isOrdersPage = location.pathname.includes('/my-account/orders');
    const styleForMediaScreen = window.innerWidth <= 991 ? { display: (isDetailsPage || isOrdersPage) ? 'none' : 'block' } : {};

    const handleSignOut = () => {
        signOut();
        navigate('/');
    };

    return (
        <div className={classes.accountServices} style={styleForMediaScreen}>
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
                {currentUser.role === 'admin'
                    ? (
                        <>
                            <Link to="/manage-users" >
                                <li>
                                    <FontAwesomeIcon icon="fa-solid fa-gear" />
                                    Manage Users
                                </li>
                            </Link>
                            <Link to="/manage-products">
                                <li>
                                    <FontAwesomeIcon icon="fa-solid fa-gear" />
                                    Manage Products
                                </li>
                            </Link>
                        </>
                    ) : (
                        <>
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
                        </>
                    )
                }

                <button className={classes.signOutButtonForSmallDevices} onClick={handleSignOut}>
                    <FontAwesomeIcon className={classes.iconSignOut} icon="fa-solid fa-arrow-up-from-bracket" />
                    Sign Out
                </button>
            </ul >
        </div >
    )
}

export default AccountServices;