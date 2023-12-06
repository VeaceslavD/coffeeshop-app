import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Filters from "../../components/Filters/Filters";
import classes from "./Products.module.css"
import { useParams, useSearchParams } from "react-router-dom";
import { getProductsByCategory, getProductsByFilters, getProductsBySearch } from "./products.services";


function Products() {
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get('search');

    useEffect(() => {
        if (searchValue) {

            setProducts(getProductsBySearch(searchValue));
        } else {

            setProducts(getProductsByCategory(category));
        }

    }, [category, searchValue]);

    const handleFilters = (filters) => {
        const filteredProducts = getProductsByFilters(filters);

        setProducts(filteredProducts);
    };

    const handleClearAllFilters = () => {
        setProducts(getProductsByCategory(category));
    };

    return (
        <div className={classes.menuPage}>
            <Filters handleFilters={handleFilters}
                handleClearAllFilters={handleClearAllFilters} />

            <div className={classes.listProducts}>
                {products.length === 0
                    ? <h2>No products found!</h2>
                    : products.map(item => (
                        <ProductCard key={item.id}
                            item={item}
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

export default Products;