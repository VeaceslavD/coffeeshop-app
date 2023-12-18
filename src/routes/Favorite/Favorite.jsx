import { useContext } from "react";
import classes from "./Favorite.module.css"
import { FavoriteContext } from "../../contexts/FavoriteContext";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import FavoriteProduct from "../../components/FavoriteProduct/FavoriteProduct";

function Favorite() {
    const { deleteFavoriteItem, favoriteItems } = useContext(FavoriteContext);
    const cartContext = useContext(CartContext);

    const moveToBag = (item) => {
        cartContext.addItem(item);
        deleteFavoriteItem(item);
    };

    return (
        <>
            {favoriteItems.length > 0
                ? (<div className={classes.favorite}>
                    <h1>Favorite Products</h1>

                    <div className={classes.favoriteContainer}>
                        {favoriteItems.map((item, index) => (
                            <FavoriteProduct key={index}
                                item={item}
                                deleteFavoriteItem={deleteFavoriteItem}
                                moveToBag={moveToBag}
                            />
                        ))}
                    </div>
                </div>)

                : (<div className={classes.noItems}>
                    <h3>you don't have favorite items</h3>
                    <Link to="/products/all">Go to shopping</Link>
                </div>)
            }
        </>
    );
};

export default Favorite;