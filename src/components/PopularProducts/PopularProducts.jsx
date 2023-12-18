import classes from "./PopularProducts.module.css";
import ProductCard from "../ProductCard/ProductCard";

function PopularProducts(props) {
    return (
        <section className={classes.popularProducts}>
            <h1>Take a look for popular products</h1>

            <div className={classes.popularProductsContainer}>
                {props.popularProducts.length === 0
                    ? <h2>Loading...</h2>
                    : props.popularProducts.map(item => (
                        <ProductCard key={item.id} item={item} />
                    ))
                }
            </div>
        </section>
    )
};

export default PopularProducts;