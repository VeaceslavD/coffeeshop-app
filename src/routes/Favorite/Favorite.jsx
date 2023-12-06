import { useContext } from "react";
import classes from "./Favorite.module.css"
import { FavoriteContext } from "../../contexts/favorite.context";
import { CartContext } from "../../contexts/cart.context";
import { Link, useNavigate } from "react-router-dom";

function Favourite() {
    const favoriteContext = useContext(FavoriteContext);
    const cartContext = useContext(CartContext);
    const navigate = useNavigate();

    const deleteFavoriteItem = (item) => {
        favoriteContext.deleteFavoriteItem(item);
    };

    const moveToBag = (item) => {
        cartContext.addItem(item);
        favoriteContext.deleteFavoriteItem(item);
    };

    const goToShopping = () => {
        navigate("/products/all");
    };

    return (
        <>
            {favoriteContext.favoriteItems.length > 0
                ? (<div className={classes.favorite}>
                    <h1>Favorite Products</h1>

                    <div className={classes.favoriteContainer}>
                        {favoriteContext.favoriteItems.map((item, index) => (
                            <div className={classes.favoriteItems} key={index}>
                                <div className={classes.imgContainer}>
                                    <Link to={`/details/` + item.id}>
                                        <img src={`/assets/coffeeImage/${item.image}`} alt={item.image} />
                                    </Link>
                                    <button className={classes.deleteItem} onClick={() => deleteFavoriteItem(item)}>
                                        <img src="/assets/media/delete.svg" alt="delete" />
                                    </button>
                                </div>

                                <div className={classes.favoriteItemsDetails}>
                                    <h2>{item.name}</h2>

                                    <p>{item.brand}</p>

                                    <h3>{item.price} lei</h3>

                                    <h4>Weight: <span>{item.weight}</span></h4>

                                    <button onClick={() => moveToBag(item)}>Move to bag</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>)

                : (<div className={classes.noItems}>
                    <h3>you don't have favorite items</h3>
                    <button onClick={() => goToShopping()}>Go to shopping</button>
                </div>)
            }
        </>
    );
};

export default Favourite;