import classes from "./Home.module.css";
import { useEffect, useState } from "react";
import { getPopularProducts } from "../../services/products.services";
import TasteCoffee from "../../components/TasteCoffee/TasteCoffee";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import Start from "../../components/Start/Start";
import Categories from "../../components/Categories/Categories";

function Home() {
    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        const data = getPopularProducts();

        setPopularProducts(data);
    }, []);

    return (
        <div className={classes.home}>
            <div className={classes.homeContainer}>
                <TasteCoffee />
                <PopularProducts popularProducts={popularProducts} />
                <Start />
                <Categories />
            </div>
        </div>
    );
};

export default Home;