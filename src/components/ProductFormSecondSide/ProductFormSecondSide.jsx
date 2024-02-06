import classes from "./ProductFormSecondSide.module.css";

function ProductFormSecondSide(props) {
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const fileName = file.name;
        props.setProduct({ ...props.product, image: fileName });
    };

    return (
        <div className={classes.productFormSecondSide}>
            <div className={classes.formRegister}>
                <label htmlFor="flavor">Flavor:</label>
                <input type="text"
                    placeholder="..."
                    name="flavor"
                    value={props.product.flavor}
                    onChange={(event) => props.setProduct({ ...props.product, flavor: event.target.value })} />
            </div>

            <div className={classes.formRegister}>
                <label htmlFor="description">Description:</label>
                <textarea
                    placeholder="..."
                    name="description"
                    value={props.product.description}
                    onChange={(event) => props.setProduct({ ...props.product, description: event.target.value })}>
                </textarea>
            </div>

            <div className={classes.formRegister}>
                <label htmlFor="short_description">Short description:</label>
                <textarea
                    placeholder="..."
                    name="short_description"
                    value={props.product.short_description}
                    onChange={(event) => props.setProduct({ ...props.product, short_description: event.target.value })}>
                </textarea>
            </div>

            <div className={classes.formRegister}>
                <label htmlFor="image">Image:</label>
                <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                />
                {props.product.image && (
                    <img src={`/assets/coffeeImage/${props.product.image}`} alt={props.product.image} />
                )}
            </div>
        </div>
    )
}

export default ProductFormSecondSide;