import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import NavBar from "../NavBar/NavBar";
import IconContainer from "../IconContainer/IconContainer";

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

            <IconContainer />

            <NavBar />
        </header>
    )
};

export default Header;