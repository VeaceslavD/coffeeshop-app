import { Link } from "react-router-dom";
import classes from "./ManageProducts.module.css";
import { deleteProduct, getProducts, getProductsBySearchValue } from "../../services/products.services";
import { useState } from "react";
import ProductsList from "../../components/ProductsList/ProductsList";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

function ManageProducts() {
    const [products, setProducts] = useState(getProducts());
    const [searchValue, setSearchValue] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    // Function to handle initiating user deletion
    const handleDeleteProduct = (id) => {
        setProductToDelete(id);
        setShowDeleteModal(true);
    };

    // Function to confirm and execute user deletion
    const confirmDelete = () => {
        deleteProduct(productToDelete);
        setProducts([...getProducts()]);
        setShowDeleteModal(false);
    };

    // Function to cancel user deletion
    const cancelDelete = () => {
        setShowDeleteModal(false);
        setProductToDelete(null);
    };

    // Function to handle searching for users
    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        const filteredProducts = getProductsBySearchValue(value, getProducts());
        setProducts(filteredProducts);
    };

    return (
        <div className={classes.manageProducts}>
            <div className={classes.manageProductsContainer}>
                <header className={classes.manageProductsHeader}>
                    <div className={classes.manageProductsHeaderTitle}>
                        <h1>Manage Products</h1>

                        <input type="text"
                            placeholder="Search product"
                            value={searchValue}
                            onChange={handleSearch}
                        />
                    </div>

                    <Link to="/manage-products/editProduct/null" className={classes.addProductButton}>Add Product</Link>
                </header>

                <ProductsList products={products}
                    handleDeleteProduct={handleDeleteProduct}
                />

                {showDeleteModal && (
                    <DeleteModal
                        productToDelete={productToDelete}
                        onConfirm={confirmDelete}
                        onClose={cancelDelete}
                    />
                )}
            </div>
        </div>
    )
}

export default ManageProducts;