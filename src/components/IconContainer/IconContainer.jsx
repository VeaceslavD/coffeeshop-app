import classes from "./IconContainer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import CartModal from "../CartModal/CartModal";
import UserModal from "../UserModal/UserModal";
import { UserContext } from "../../contexts/UserContext";

function IconContainer() {
    const navigate = useNavigate();
    const { openCartModal, closeCartModal, cartCount, } = useContext(CartContext);
    const { openUserModal, closeUserModal } = useContext(UserContext);
    const favoriteContext = useContext(FavoriteContext);
    const {currentUser} = useContext(UserContext);

    const handleOpenUserModal = () => {
        if (window.innerWidth <= 768) {
           currentUser ? navigate('/my-account') : navigate('/login');
        } else {
            closeCartModal();
            openUserModal();
        }
    };

    const handleOpenCartModal = () => {
        if (window.innerWidth <= 991) {
            navigate('/cart');
            closeUserModal();
        } else {
            closeUserModal();
            openCartModal();
        }
    };

    return (
        <div className={classes.iconContainer}>
            <div className={classes.userContainer}>
                <FontAwesomeIcon onClick={handleOpenUserModal} className={classes.icon} icon="fa-solid fa-user" />

                <UserModal />
            </div>

            <Link to="/favorite">
                <div className={classes.favorite}>
                    <FontAwesomeIcon className={classes.icon} icon="fa-regular fa-heart" />
                    <span className={classes.productCount}>{favoriteContext.favoriteCount}</span>
                </div>
            </Link>

            <div className={classes.cartContainer}>
                <button onClick={handleOpenCartModal} className={classes.cart}>
                    <FontAwesomeIcon className={classes.icon} icon="fa-solid fa-basket-shopping" />
                    <span className={classes.productCount}>{cartCount}</span>
                </button>

                <CartModal />
            </div>
        </div>
    )
}

export default IconContainer;