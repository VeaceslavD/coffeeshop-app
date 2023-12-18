import { Link } from "react-router-dom";
import classes from "./ProductCard.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import { UserContext } from "../../contexts/UserContext";

function ProductCard(props) {
    const cartContext = useContext(CartContext);
    const favoriteContext = useContext(FavoriteContext);
    const userContext = useContext(UserContext);

    const addToCart = (item) => {
        cartContext.addItem(item);
        cartContext.openCartModal();
        userContext.closeUserModal();
    };

    const addToFavorite = (item) => {
        favoriteContext.addFavoriteItem(item);
    };

    return (
        <div className={classes.productCard}>
            <div className={classes.buttonActions}>
                <button onClick={() => addToCart(props.item)}>
                    <FontAwesomeIcon className={classes.productCardIconCart} icon="fa-solid fa-basket-shopping" />
                </button>
                <button onClick={() => addToFavorite(props.item)}  className={classes.favoriteButton}>
                    <FontAwesomeIcon className={classes.productCardIconFavorite} icon="fa-regular fa-heart" />
                    <FontAwesomeIcon className={classes.productCardIconFavoriteSolid} icon="fa-solid fa-heart" />
                </button>
            </div>

            <Link to={"/details/" + props.item.id}>
                <img src={`/assets/coffeeImage/${props.item.image}`} alt={props.item.image} />

                <div className={classes.productCardInformation}>
                    <h4>{props.item.brand}</h4>

                    <h2>{props.item.name}</h2>

                    <h3>{props.item.price} lei</h3>
                </div>
            </Link>
        </div>
    )
};

export default ProductCard;