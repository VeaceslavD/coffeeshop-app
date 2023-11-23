import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Filters from "../../components/Filters/Filters";
import classes from "./Menu.module.css"
import { getProducts } from "./Menu.services";

function Menu() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();

            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div className={classes.menuPage}>
            <Filters setProducts={setProducts} />

            <div className={classes.listProducts}>
                {products.length === 0
                    ? <h2>Loading...</h2>
                    : products.map(item => (
                        <ProductCard key={item.id}
                            id={item.id}
                            title={item.name}
                            subTitle={item.short_description}
                            price={item.price}
                            image={item.image}
                            brand={item.brand} />
                    ))
                }
            </div>
        </div >
    );
};

export default Menu;