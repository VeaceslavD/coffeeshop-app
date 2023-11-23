import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import cartIcon from "../../assets/media/cartIcon.svg";
import userIcon from "../../assets/media/user.svg";
import favoriteIcon from "../../assets/media/favorite.svg";
import searchIcon from "../../assets/media/search.svg";
import Logo from "../../assets/media/logo.png";

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
                <Link to="/"><img className={classes.logoImg} src={Logo} alt="Logo" /></Link>

                <h1>HUMAN COFFEE INTERACTION</h1>

                <div className={classes.widgets}>
                    <Link>
                        <img src={userIcon} alt="UserIcon" />
                    </Link>

                    <Link>
                        <img src={favoriteIcon} alt="favoriteIcon" />
                    </Link>

                    <Link>
                        <img src={cartIcon} alt="Cart" />
                    </Link>
                </div>
            </div>

            <nav className={classes.navContainer}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/">Blog</Link></li>
                </ul>

                <div className={classes.searchContainer}>
                    <input type="text" placeholder="Search for item or brands" />

                    <Link>
                        <img src={searchIcon} alt="searchIcon" />
                    </Link>
                </div>
            </nav>
        </header>
    )
};

export default Header;