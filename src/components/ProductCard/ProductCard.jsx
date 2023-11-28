import { Link } from "react-router-dom";
import classes from "./ProductCard.module.css";

function ProductCard(props) {
    return (
        <div className={classes.productCard}>
            <div className={classes.buttonActions}>
                <button>
                    <img src="/assets/media/cartIcon2.svg" alt="cartIcon" />
                </button>
                <button>
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