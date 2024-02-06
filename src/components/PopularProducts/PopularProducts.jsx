import classes from "./PopularProducts.module.css";
import ProductCard from "../ProductCard/ProductCard";

function PopularProducts(props) {
    return (
        <section className={classes.popularProducts}>
            <div className={classes.popularProductsContainer}>
                <div className={classes.popularProductsTitle}>
                    <h1>Explore Popular Product Selection</h1>
                    <div className={classes.aboutFlavours}>
                        <p>Explore all flavours of coffee with us.</p>
                        <p>There is always a new cup worth experiencing</p>
                    </div>
                </div>

                <div className={classes.popularProductsInfo}>
                    {props.popularProducts.length === 0
                        ? <h2>Loading...</h2>
                        : props.popularProducts.map(item => (
                            <ProductCard key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default PopularProducts;