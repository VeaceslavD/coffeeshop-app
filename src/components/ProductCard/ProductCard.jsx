import { Link } from "react-router-dom";
import classes from "./ProductCard.module.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { FavoriteContext } from "../../contexts/favorite.context";

function ProductCard(props) {
    const cartContext = useContext(CartContext);
    const favoriteContext = useContext(FavoriteContext);

    const addToCart = (item) => {
        cartContext.addItem(item);
    };

    const addToFavorite = (item) => {
        favoriteContext.addFavoriteItem(item);
    };

    return (
        <div className={classes.productCard}>
            <div className={classes.buttonActions}>
                <button onClick={() => addToCart(props.item)}>
                    <img src="/assets/media/cartIcon2.svg" alt="cartIcon" />
                </button>
                <button onClick={() => addToFavorite(props.item)}>
                    <img src="/assets/media/favorite2.svg" alt="favorite" />
                </button>
            </div>

            <Link to={"/details/" + props.id}>
                <img src={`/assets/coffeeImage/${props.image}`} alt={props.image} />

                <div className={classes.productCardInformation}>
                    <h4>{props.brand}</h4>

                    <h2>{props.title}</h2>

                    <h3>{props.price} lei</h3>
                </div>
            </Link>
        </div>
    )
};

export default ProductCard;