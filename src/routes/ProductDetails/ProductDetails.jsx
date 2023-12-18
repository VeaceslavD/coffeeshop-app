import classes from "./ProductDetails.module.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products.services";
import { CartContext } from "../../contexts/CartContext";
 
function ProductDetails() {
    const [product, setProduct] = useState();
    const { id } = useParams();
    const cartContext = useContext(CartContext);

    useEffect(() => {
        const foundProduct = getProductById(+id);

        setProduct(foundProduct);
    }, [id]);

    const addProductToCart = (product) => {
        cartContext.addItem(product);
    };

    return (
        <div className={classes.productDetailsPage}>
            {product && (
                <>
                    <div className={classes.productDetailsContainer}>
                        <img src={(`/assets/coffeeImage/${product.image}`)} alt={product.image} />

                        <div className={classes.productDetails}>
                            <h1>{product.name}</h1>

                            <p>{product.short_description}</p>

                            <h3>{product.price} lei</h3>

                            <button onClick={() => addProductToCart(product)}>Add to cart</button>

                            <div className={classes.productSpecifications}>
                                <h3>Specifications</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Beans</td>
                                            <td>{product.beans}</td>
                                        </tr>
                                        <tr>
                                            <td>Flavor</td>
                                            <td>{product.flavor}</td>
                                        </tr>
                                        <tr>
                                            <td>Weight</td>
                                            <td>{product.weight}</td>
                                        </tr>
                                        <tr>
                                            <td>Country</td>
                                            <td>{product.country}</td>
                                        </tr>
                                        <tr>
                                            <td>Brand</td>
                                            <td>{product.brand}</td>
                                        </tr>
                                    </tbody>
                                </table>
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