import classes from "./TasteCoffee.module.css"
import { Link } from "react-router-dom";

function TasteCoffee() {
    return (
        <section className={classes.tasteCoffe}>
            <div className={classes.background}>
                <div className={classes.title}>
                    <h1>TASTE THE BEST COFFEE IN TOWN</h1>

                    <h2>HIGH QUALITY FOR YOU</h2>
                </div>

                <Link className={classes.buttonOrder} to="/products/all">Order Now</Link>
            </div>
        </section>
    )
};

export default TasteCoffee;