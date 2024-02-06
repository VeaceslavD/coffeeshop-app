import classes from "./Categories.module.css";
import { Link } from "react-router-dom";

function Categories() {
    const categories = [
        {
            type: 'wholeBeans',
            title: 'Whole Beans',
            image: 'Robusta.png',
        },
        {
            type: 'groundBeans',
            title: 'Ground Beans',
            image: 'ground-coffee.jpg',
        },
        {
            type: 'capsules',
            title: 'Capsules',
            image: 'capsules.webp',
        }
    ];

    return (
        <section className={classes.categories}>
            <div className={classes.categoriesContainer}>
                <div className={classes.categoriesTitle}>
                    <h1>Our Delicious Categories</h1>

                    <p>we offer a carefully curated collection that showcases the distinct characteristics of beans sourced from specific regions.</p>
                </div>

                <div className={classes.categoriesSelect}>
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
            </div>
        </section>
    )
};

export default Categories;