import classes from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/products/all?search=${inputValue}`);
        setInputValue('');
    };
    
    return (
        <nav className={classes.navContainer}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products/all">Products</Link></li>
                <li><Link to="/">Blog</Link></li>
            </ul>

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
        </nav>
    )
}

export default NavBar;