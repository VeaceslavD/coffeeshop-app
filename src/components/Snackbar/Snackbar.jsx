import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Snackbar.module.css";

function Snackbar(props) {

    return (
        <div className={`${classes.snackbar} ${props.isVisible ?  classes.show : ''}`}>
            <FontAwesomeIcon className={classes.icon} icon="fa-regular fa-circle-check" />
            <h1>The product is successfully added !</h1>
        </div>
    );
};

export default Snackbar;