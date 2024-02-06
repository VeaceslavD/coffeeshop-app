import { useEffect, useState } from "react";
import classes from "./EditProduct.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById, saveOrUpdateProduct } from "../../services/products.services";
import ProductFormFirstSide from "../../components/ProductFormFirstSide/ProductFormFirstSide";
import ProductFormSecondSide from "../../components/ProductFormSecondSide/ProductFormSecondSide";

function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const existProduct = getProductById(+id);

        setProduct(existProduct);
    }, [id]);

    function handleSaveProduct(e) {
        e.preventDefault();

        saveOrUpdateProduct(product);
        navigate('/manage-products');
    };

    return (
        <div className={classes.addProduct}>
            <div className={classes.addProductContainer}>
                <Link to="/manage-products">Back</Link>
                <h1>{id === "null" ? "Add new" : "Edit"} product</h1>

                {product && (
                    <form onSubmit={handleSaveProduct} className={classes.productForm}>
                        <div className={classes.productFormContainer}>
                            <ProductFormFirstSide product={product} setProduct={setProduct} />
                            <ProductFormSecondSide product={product} setProduct={setProduct} />
                        </div>

                        <button type="submit">Save</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default EditProduct;