import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./NavBar.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (inputValue === '') {
            return null;
        }
        navigate(`/products/all?search=${inputValue}`);
        setInputValue('');
    };

    return (
        <div className={classes.navMenuSearch}>
            <nav className={classes.navContainer}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products/all">Products</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </nav>

            <form className={classes.searchContainer} onSubmit={(event) => {
                event.preventDefault();
                handleSearch();
            }}>
                <input type="text"
                    placeholder="Search for item or brands"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)} />

                <button type="submit">
                    <FontAwesomeIcon className={classes.searchIcon} icon="fa-solid fa-magnifying-glass" />
                </button>
            </form>
        </div>
    )
}

export default NavBar;