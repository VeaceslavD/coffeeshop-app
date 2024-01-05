import classes from "./MyAccount.module.css";
import AccountServices from "../../components/AccountServices/AccountServices";

function MyAccount() {

    return (
        <div className={classes.myAccount}>
            <div className={classes.myAccountContainer}>
                <AccountServices />

                <div className={classes.showAccountDetails}>
                    <div>
                        <h1>WELCOME TO</h1>
                        <h1>YOUR ACCOUNT</h1>
                    </div>
                    <h2>We appreciate your joining our Coffee Shop</h2>
                </div>
            </div>
        </div>
    )
}

export default MyAccount;