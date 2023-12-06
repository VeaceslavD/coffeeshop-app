import { Link, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";

function Header() {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const cartContext = useContext(CartContext);

    const handleSearch = () => {
        navigate(`/products/all?search=${inputValue}`);
        setInputValue('');
    };


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

                    <Link to="/favorite">
                        <img src="/assets/media/favorite.svg" alt="favoriteIcon" />
                    </Link>

                    <Link to="/cart">
                        <div className={classes.cart}>
                            <img src="/assets/media/cartIcon.svg" alt="Cart" />
                            <span className={classes.cartCount}>{cartContext.cartCount}</span>
                        </div>
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
                    <input type="text"
                        placeholder="Search for item or brands"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)} />

                    <button onClick={() => handleSearch()}>
                        <img src="/assets/media/search.svg" alt="searchIcon" />
                    </button>
                </div>
            </nav>
        </header>
    )
};

export default Header;