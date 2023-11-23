import { Link } from "react-router-dom";
import classes from "./ProductCard.module.css";
import cartIcon from "../../assets/media/cartIcon2.svg";
import favorite from "../../assets/media/favorite2.svg";

function ProductCard(props) {
    return (
        <div className={classes.productCard}>
            <div className={classes.buttonActions}>
                <button>
                    <img src={cartIcon} alt="cartIcon" />
                </button>
                <button>
                    <img src={favorite} alt="favorite" />
                </button>
            </div>
            
            <Link to={"/details/product/" + props.id}>
                <img src={require(`../../assets/coffeeImage/${props.image}`)} alt={props.image} />

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