import classes from "./FavoriteProduct.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FavoriteProduct(props) {
    return (
        <div className={classes.favoriteItems}>
            <div className={classes.imgContainer}>
                <Link to={`/details/` + props.item.id}>
                    <img src={`/assets/coffeeImage/${props.item.image}`} alt={props.item.image} />
                </Link>
                <button className={classes.deleteItem} onClick={() => props.deleteFavoriteItem(props.item)}>
                    <FontAwesomeIcon className={classes.iconDelete} icon="fa-solid fa-trash-can" />
                </button>
            </div>

            <div className={classes.favoriteItemsDetails}>
                <h2>{props.item.name}</h2>

                <p>{props.item.brand}</p>

                <h3>{props.item.price} lei</h3>

                <h4>Weight: <span>{props.item.weight}</span></h4>

                <button onClick={() => props.moveToBag(props.item)}>Move to bag</button>
            </div>
        </div>
    )
}

export default FavoriteProduct;