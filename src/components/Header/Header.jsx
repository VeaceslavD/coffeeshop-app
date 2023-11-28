import { Link } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
    return (
        <header className={classes.headerContainer}>
            <div className={classes.infoLinks}>
                <Link>
                    <h4>ABOUT US</h4>
                </Link>
                <Link>
                    <h4>CONTACT US</h4>
                </Link>
            </div>

            <div className={classes.header}>
                <Link to="/"><img className={classes.logoImg} src="/assets/media/logo.png" alt="Logo" /></Link>

                <h1>HUMAN COFFEE INTERACTION</h1>

                <div className={classes.widgets}>
                    <Link>
                        <img src="/assets/media/user.svg" alt="UserIcon" />
                    </Link>

                    <Link>
                        <img src="/assets/media/favorite.svg" alt="favoriteIcon" />
                    </Link>

                    <Link>
                        <img src="/assets/media/cartIcon.svg" alt="Cart" />
                    </Link>
                </div>
            </div>

            <nav className={classes.navContainer}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products/all">Products</Link></li>
                    <li><Link to="/">Blog</Link></li>
                </ul>

                <div className={classes.searchContainer}>
                    <input type="text" placeholder="Search for item or brands" />

                    <Link>
                        <img src="/assets/media/search.svg" alt="searchIcon" />
                    </Link>
                </div>
            </nav>
        </header>
    )
};

export default Header;