import classes from "./IconContainer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import CartModal from "../CartModal/CartModal";
import UserModal from "../UserModal/UserModal";
import { UserContext } from "../../contexts/UserContext";

function IconContainer() {
    const { openCartModal, closeCartModal, cartCount, } = useContext(CartContext);
    const { openUserModal,closeUserModal } = useContext(UserContext);
    const favoriteContext = useContext(FavoriteContext);

    const handleOpenUserModal = () => {
        closeCartModal();
        openUserModal();
    };
    const handleOpenCartModal = () => {
        closeUserModal();
        openCartModal();
    };

    return (
        <div className={classes.header}>
            <Link to="/"><img className={classes.logoImg} src="/assets/media/logo.png" alt="Logo" /></Link>

            <h1>HUMAN COFFEE INTERACTION</h1>

            <div className={classes.iconContainer}>
                <div className={classes.userContainer}>
                    <FontAwesomeIcon onClick={handleOpenUserModal} className={classes.icon} icon="fa-solid fa-user" />

                    <UserModal />
                </div>

                <Link to="/favorite">
                    <div className={classes.favorite}>
                        <FontAwesomeIcon className={classes.icon} icon="fa-regular fa-heart" />
                        <span className={classes.favoriteCount}>{favoriteContext.favoriteCount}</span>
                    </div>
                </Link>

                <div className={classes.cartContainer}>
                    <button onClick={handleOpenCartModal} className={classes.cart}>
                        <FontAwesomeIcon className={classes.icon} icon="fa-solid fa-basket-shopping" />
                        <span className={classes.cartCount}>{cartCount}</span>
                    </button>

                    <CartModal />
                </div>
            </div>
        </div>
    )
}

export default IconContainer;