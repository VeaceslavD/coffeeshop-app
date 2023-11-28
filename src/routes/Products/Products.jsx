import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Filters from "../../components/Filters/Filters";
import classes from "./Products.module.css"
import { useParams } from "react-router-dom";
import { filterByBrand, filterByCategory, filterByWeight, getProductsByCategory, getProductsBySort } from "./products.services";


function Products() {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const fetchProducts = () => {
            setProducts(getProductsByCategory(category));
        };

        fetchProducts();
    }, [category]);

    const handleFilters = (filters) => {
        let filteredProducts = products;

        if (filters.sort) {
            filteredProducts = getProductsBySort(products, filters.sort);
        }

        if (filters.brand) {
            filteredProducts = filterByBrand(products, filters.brand);
        };

        if (filters.category) {
            filteredProducts = filterByCategory(products, filters.category);
        };

        if (filters.weight) {
            filteredProducts = filterByWeight(products, filters.weight);
        };

        setProducts(filteredProducts);
    };

    const handleClearFilters = () => {
        setProducts(getProductsByCategory(category));
    };

    return (
        <div className={classes.menuPage}>
            <Filters handleFilters={handleFilters}
                handleClearFilters={handleClearFilters} />

            <div className={classes.listProducts}>
                {products.length === 0
                    ? <h2>No products found!</h2>
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

export default Products;