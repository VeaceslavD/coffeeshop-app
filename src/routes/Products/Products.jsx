import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Filters from "../../components/Filters/Filters";
import classes from "./Products.module.css"
import { useParams, useSearchParams } from "react-router-dom";
import { getProductsByFilters } from "../../services/products.services";

function Products() {
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get('search');

    useEffect(() => {
        // Handling filters when category or searchValue changes
        handleFilters({
            category: category,
            searchValue: searchValue
        })
    }, [category, searchValue]);

    // Function to handle filters and update products
    const handleFilters = (filters) => {
        // Fetching products based on filters
        const filteredProducts = getProductsByFilters(filters);
        setProducts(filteredProducts);
    };

    return (
        <div className={classes.productsPage}>
            <Filters handleFilters={handleFilters} category={category} />

            <div className={classes.listProducts}>
                {products.length === 0
                    ? <h2>No products found!</h2>
                    : products.map(item => (
                        <ProductCard key={item.id} item={item} />
                    ))
                }
            </div>
        </div >
    );
};

export default Products;