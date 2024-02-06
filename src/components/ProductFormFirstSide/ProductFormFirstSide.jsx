import classes from "./ProductFormFirstSide.module.css";

function ProductFormFirstSide(props) {
    return (
        <div className={classes.productFormFirstSide}>
            <div className={classes.formRegister}>
                <label htmlFor="name">Name:</label>
                <input type="text"
                    placeholder="..."
                    name="name"
                    value={props.product.name}
                    onChange={(event) => props.setProduct({ ...props.product, name: event.target.value })} />
            </div>

            <div className={classes.formRegister}>
                <label htmlFor="brand">Brand:</label>
                <select name="brand"
                    value={props.product.brand}
                    onChange={(event) => props.setProduct({ ...props.product, brand: event.target.value })}
                >
                    <option value="">...</option>
                    <option value="Illy">Illy</option>
                    <option value="Lavazza">Lavazza</option>
                    <option value="Julius Meinl">Julius Meinl</option>
                    <option value="Melitta">Melitta</option>
                </select>
            </div>

            <div className={classes.formRegister}>
                <label htmlFor="category">Category:</label>
                <select name="category"
                    value={props.product.category}
                    onChange={(event) => props.setProduct({ ...props.product, category: event.target.value })}
                >
                    <option value="">...</option>
                    <option value="wholeBeans">Whole Beans</option>
                    <option value="groundBeans">Ground Beans</option>
                    <option value="capsules">Capsules</option>
                </select>
            </div>

            <div className={classes.formRegister}>
                <label htmlFor="weight">Weight:</label>
                <select name="weight"
                    value={props.product.weight}
                    onChange={(event) => props.setProduct({ ...props.product, weight: event.target.value })}
                >
                    <option value="">...</option>
                    <option value="1kg">1kg</option>
                    <option value="500g">500g</option>
                    <option value="250g">250g</option>
                    <option value="125g">125g</option>
                    <option value="8g">8g</option>
                </select>
            </div>

            <div className={classes.formRegister}>
                <label htmlFor="country">Country:</label>
                <select name="country"
                    value={props.product.country}
                    onChange={(event) => props.setProduct({ ...props.product, country: event.target.value })}
                >
                    <option value="">...</option>
                    <option value="Italy">Italy</option>
                    <option value="Germany">Germany</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Austria">Austria</option>
                </select>
            </div>

            <div className={classes.formRegister}>
                <label htmlFor="beans">Beans:</label>
                <input type="text"
                    placeholder="..."
                    name="beans"
                    value={props.product.beans}
                    onChange={(event) => props.setProduct({ ...props.product, beans: event.target.value })} />
            </div>

            <div className={classes.formRegister}>
                <label htmlFor="price">Price:</label>
                <input type="text"
                    placeholder="..."
                    name="price"
                    value={props.product.price}
                    onChange={(event) => props.setProduct({ ...props.product, price: event.target.value })} />
            </div>
        </div >
    )
}

export default ProductFormFirstSide;