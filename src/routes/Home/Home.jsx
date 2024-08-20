import classes from "./Home.module.css";
import { useEffect, useState } from "react";
import { getPopularProducts } from "../../services/products.services";
import DiscoverCoffee from "../../components/DiscoverCoffee/DiscoverCoffee";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import Categories from "../../components/Categories/Categories";

function Home() {
    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        const data = getPopularProducts();
        setPopularProducts(data);
    }, []);

    return (
        <div className={classes.home}>
            <DiscoverCoffee />
            <Categories />
            <div className={classes.picture}></div>
            <PopularProducts popularProducts={popularProducts} />
        </div>
    );
};

export default Home;