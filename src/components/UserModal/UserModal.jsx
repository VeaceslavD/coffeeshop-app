import { useContext } from "react";
import classes from "./UserModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function UserModal() {
    const { currentUser, signOut, userModal, closeUserModal } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut();
        navigate('/');
    };

    return (
        <div className={classes.userModal} style={{ transform: `scaleY(${userModal ? '1' : '0'})` }}>
            <header className={classes.userModalHeader}>
                {currentUser
                    ? (<div className={classes.signOutLink}>
                        <h2>Hello {currentUser.firstName}</h2>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>)
                    : (<div className={classes.authenticationLinks}>
                        <Link to="/login" onClick={closeUserModal}>Login</Link>
                        <h1>|</h1>
                        <Link to="/sign-up" onClick={closeUserModal}>Sign Up</Link>
                    </div>)
                }

                <FontAwesomeIcon onClick={closeUserModal} className={classes.closeModal} icon="fa-regular fa-circle-xmark" />
            </header>

            <div className={classes.userServiceAccount}>
                <Link to={currentUser ? '/my-account' : '/login'} onClick={closeUserModal}>
                    <FontAwesomeIcon icon="fa-solid fa-user" />
                    My Account
                </Link>

                <Link to={currentUser ? '/my-account/orders' : '/login'} onClick={closeUserModal}>
                    <FontAwesomeIcon icon="fa-solid fa-box" />
                    My Orders
                </Link>

                {currentUser?.role === 'admin'
                    ? (
                        <>
                            <Link to="/manage-users" onClick={closeUserModal}>
                                <FontAwesomeIcon icon="fa-solid fa-gear" />
                                Manage Users
                            </Link>

                            <Link to="/manage-products" onClick={closeUserModal}>
                                <FontAwesomeIcon icon="fa-solid fa-gear" />
                                Manage Products
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link onClick={closeUserModal}>
                                <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                                Return Information
                            </Link>

                            <Link onClick={closeUserModal}>
                                <FontAwesomeIcon icon="fa-solid fa-bell" />
                                Notification
                            </Link>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default UserModal;