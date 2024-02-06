import { Outlet } from "react-router-dom";
import classes from "./MyAccountLayout.module.css";
import AccountServices from "../../components/AccountServices/AccountServices";

function MyAccountLayout() {

    return (
        <div className={classes.myAccountLayout}>
            <div className={classes.myAccountLayoutContainer}>
                <AccountServices />

                <div className={classes.showAccountDetails}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MyAccountLayout;
