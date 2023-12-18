import classes from "./Categories.module.css";
import { Link } from "react-router-dom";

function Categories() {
    const categories = [
        {
            type: 'wholeBeans',
            title: 'Whole Beans',
            image: 'Robusta.png'
        },
        {
            type: 'groundBeans',
            title: 'Ground Beans',
            image: 'ground-coffee.jpg'
        },
        {
            type: 'capsules',
            title: 'Capsules',
            image: 'capsules.webp'
        }
    ];

    return (
        <section className={classes.categories}>
            <h1>Top Categories</h1>

            <div className={classes.categoriesContainer}>
                {categories.map((category, index) => (
                    <Link to={`products/${category.type}`} key={index}>
                        <div className={classes.categoriesDescription}>
                            <img src={`/assets/media/${category.image}`} alt={category.image} />
                            <div className={classes.typeCategories}>
                                <h2>{category.title}</h2>

                                <button>VIEW MORE</button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
};

export default Categories;