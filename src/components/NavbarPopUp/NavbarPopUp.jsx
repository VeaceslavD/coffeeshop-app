import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./NavbarPopUp.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavbarPopUp({ openPopUp, onClosePopUp }) {
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
        <div className={classes.navMenuSearch} style={{ transform: `scaleY(${openPopUp ? '1' : '0'})` }}>
            <div className={classes.navMenuSearchContainer}>
                <ul className={classes.navContainer}>
                    <li><Link to="/" onClick={onClosePopUp}>Home</Link></li>
                    <li><Link to="/products/all" onClick={onClosePopUp}>Products</Link></li>
                    <li><Link to="/about-us" onClick={onClosePopUp}>About Us</Link></li>
                    <li><Link to="/contact-us" onClick={onClosePopUp}>Contact Us</Link></li>
                </ul>

                <form className={classes.searchContainer} onSubmit={(event) => {
                    event.preventDefault();
                    handleSearch();
                }}>
                    <input type="text"
                        placeholder="Search for item or brands"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)} />

                    <button type="submit" onClick={onClosePopUp}>
                        <FontAwesomeIcon className={classes.searchIcon} icon="fa-solid fa-magnifying-glass" />
                    </button>
                </form>

                <FontAwesomeIcon className={classes.closePopUp} icon="fa-solid fa-xmark" onClick={onClosePopUp} />
            </div>
        </div>
    )
}

export default NavbarPopUp;
