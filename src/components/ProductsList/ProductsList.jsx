import { Link } from "react-router-dom";
import classes from "./ProductsList.module.css";

function ProductsList(props) {
    return (
        <div className={classes.manageProductsList}>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.length !== 0
                        ? (
                            props.products.map((product, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src={`/assets/coffeeImage/${product.image}`} alt={product.image} />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price} lei</td>
                                    <td>
                                        <Link to={"/details/" + product.id} className={classes.viewProductButton}>View</Link>
                                        <Link to={"/manage-products/editProduct/" + product.id} className={classes.editProductButton}>Edit</Link>
                                        <button className={classes.deleteProductButton} onClick={() => props.handleDeleteProduct(product.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td style={{ color: 'red' }}>No products found!</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductsList;