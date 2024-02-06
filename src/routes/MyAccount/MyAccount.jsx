import classes from "./MyAccount.module.css";

function MyAccount() {
    return (
        <div className={classes.showAccountDetails}>
            <h1>Welcome to your account</h1>
            <h2>We appreciate your joining our Coffee Store</h2>
        </div>
    )
}

export default MyAccount;