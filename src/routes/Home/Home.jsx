import classes from "./Home.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPopularProducts } from "../Products/products.services";

function Home() {
    const [popularProducts, setPopularProducts] = useState([]);
    const wholeBeans = "wholeBeans";

    useEffect(() => {
        const data = getPopularProducts();

        setPopularProducts(data);
    }, [])


    return (
        <div className={classes.home}>
            <div className={classes.homeContainer}>
                <section className={classes.tasteCoffe}>
                    <div className={classes.background}>
                        <div className={classes.title}>
                            <h1>TASTE THE BEST COFFEE IN TOWN</h1>

                            <h2>HIGHT QUALITY FOR YOU</h2>
                        </div>

                        <Link className={classes.buttonOrder} to="/products/all">Order Now</Link>
                    </div>

                </section>

                <section className={classes.popularProducts}>
                    <h1>Take a look for popular products</h1>

                    <div className={classes.popularProductsContainer}>
                        {popularProducts.length === 0
                            ? <h2>Loading...</h2>
                            : popularProducts.map(item => (
                                <ProductCard key={item.id}
                                    item={item}
                                    id={item.id}
                                    title={item.name}
                                    subTitle={item.short_description}
                                    price={item.price}
                                    image={item.image}
                                    brand={item.brand} />
                            ))
                        }
                    </div>
                </section>

                <section className={classes.start}>
                    <h1>START YOUR DAY WITH A BLACK COFFEE</h1>

                    <div className={classes.lineImg}>
                        <img src="/assets/media/Line 7.png" alt="lineIcon" />
                        <img src="/assets/media/Line 7.png" alt="lineIcon" />
                    </div>

                    <div className={classes.startDescr}>
                        <h2>LOCALLY SOURCE</h2>

                        <img src="/assets/media/Ellipse 1.png" alt="ellipseIcon" />

                        <h2>ROASTED WITH LOVE</h2>
                    </div>
                </section>

                <section className={classes.categories}>
                    <h1>Top Categories</h1>

                    <div className={classes.categoriesContainer}>
                        <Link to={`/products/${wholeBeans}`}>
                            <div className={classes.categoriesDescription}>
                                <img src="/assets/media/Robusta.png" alt="wholeBeans" />
                                <div className={classes.typeCategories}>
                                    <h2>Whole beans</h2>

                                    <button>VIEW MORE</button>
                                </div>
                            </div>
                        </Link>
                        <Link to="/products/groundBeans">
                            <div className={classes.categoriesDescription}>
                                <img src="/assets/media/ground-coffee.jpg" alt="groundBeans" />
                                <div className={classes.typeCategories}>
                                    <h2>Ground beans</h2>

                                    <button>VIEW MORE</button>
                                </div>
                            </div>
                        </Link>
                        <Link to="/products/capsules">
                            <div className={classes.categoriesDescription}>
                                <img src="/assets/media/capsules.webp" alt="capsules" />
                                <div className={classes.typeCategories}>
                                    <h2>Capsules</h2>

                                    <button>VIEW MORE</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;