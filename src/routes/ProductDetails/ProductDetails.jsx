import classes from "./ProductDetails.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../Products/products.services";

function ProductDetails() {
    const [product, setProduct] = useState();
    const { id } = useParams();

    useEffect(() => {
        const foundProduct = getProductById(+id);

        setProduct(foundProduct);
    }, [id])


    return (
        <div className={classes.productDetailsPage}>
            {product && (
                <>
                    <div className={classes.productDetailsContainer}>
                        <img src={(`/assets/coffeeImage/${product.image}`)}alt={product.image} />

                        <div className={classes.productDetails}>
                            <h1>{product.name}</h1>

                            <p>{product.short_description}</p>

                            <h3>{product.price} lei</h3>

                            <button>Add to cart</button>

                            <div className={classes.productSpecifications}>
                                <h3>Specifications</h3>

                                <ul>
                                    <li>Beans</li>
                                    <li>{product.beans}</li>
                                    <li>Flavor</li>
                                    <li>{product.flavor}</li>
                                    <li>Weight</li>
                                    <li>{product.weight}</li>
                                    <li>Country</li>
                                    <li>{product.country}</li>
                                    <li>Brand</li>
                                    <li>{product.brand}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p className={classes.productDescription}>{product.description}</p>
                </>
            )}
        </div>
    )
};

export default ProductDetails;