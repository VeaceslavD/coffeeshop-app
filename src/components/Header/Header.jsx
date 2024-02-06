import classes from "./Header.module.css";
import NavBar from "../NavBar/NavBar";
import IconContainer from "../IconContainer/IconContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavbarPopUp from "../NavbarPopUp/NavbarPopUp";

function Header() {
    const [openPopUp, setOpenPopUp] = useState(false);

    const handleOpenPopUp = () => {
        setOpenPopUp(true);
    };

    const handleClosePopUp = () => {
        setOpenPopUp(false);
    };

    return (
        <header className={classes.header}>
            <div className={classes.headerContainer}>
                <div className={classes.headerLogoIcons}>
                    <Link to='/' className={classes.headerLogo}>
                        <img src="/assets/media/image 48.png" alt="logo" />
                        <h2><span>The</span> Coffee Store </h2>
                    </Link>

                    <div>
                        <FontAwesomeIcon className={classes.sideMenuIcon} icon="fa-solid fa-bars" onClick={handleOpenPopUp} />

                        <NavbarPopUp openPopUp={openPopUp} onClosePopUp={handleClosePopUp} />
                    </div>

                    <IconContainer />
                </div>

                <NavBar />
            </div>
        </header>
    )
};

export default Header;