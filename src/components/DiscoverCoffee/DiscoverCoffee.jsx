import classes from "./DiscoverCoffee.module.css"
import { Link } from "react-router-dom";

function DiscoverCoffee() {
    return (
        <section className={classes.discoverCoffee}>
            <div className={classes.discoverCoffeeContainer}>
                <div className={classes.discoverInformationCoffee}>
                    <h1>Discover the Art of Perfect Coffee.</h1>

                    <p>Experience the difference as we meticulously select and roast the finest beans to create a truly unforgettable cup of coffee. Join us on a journey of taste and awaken your senses, one sip at a time.</p>

                    <div className={classes.aboutDigits}>
                        <Link className={classes.buttonOrder} to="/products/all">
                            Order Now
                            <img src="/assets/media/iconoir_arrow-tr.svg" alt="arrow.svg" />
                        </Link>

                        <div className={classes.infoDigits}>
                            <div className={classes.digitsSpecific}>
                                <h1>1K<span>+</span></h1>
                                <h3>Review</h3>
                            </div>
                            <div className={classes.digitsSpecific}>
                                <h1>3K<span>+</span></h1>
                                <h3>Best Sell</h3>
                            </div>
                            <div className={classes.digitsSpecific}>
                                <h1>150K<span>+</span></h1>
                                <h3>Products</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.discoverCoffeeImage}>
                    <div className={classes.picture}>
                        <img src="/assets/media/image39.png" alt="image39" />
                    </div>
                    <div className={classes.coffeeTitle}>
                        <h1>Coffee</h1>
                        <h1>Coffee</h1>
                        <h1>Coffee</h1>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default DiscoverCoffee;