import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountServices from "../../components/AccountServices/AccountServices";
import classes from "./UserDetails.module.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function UserDetails() {
    const { currentUser, setCurrentUser, signUp } = useContext(UserContext);

    const handleSaveNewUserDetails = (e) => {
        e.preventDefault();

        const user = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            password: e.target.password.value,
        };

        signUp(user);
    };

    return (
        <div className={classes.userDetails}>
            <div className={classes.userDetailsContainer}>
                <AccountServices />

                <div className={classes.showUserDetails}>
                    <header className={classes.showUserDetailsHeader}>
                        <FontAwesomeIcon className={classes.icon} icon="fa-solid fa-id-card" />
                        <h1>My Details</h1>
                    </header>

                    <form onSubmit={handleSaveNewUserDetails} className={classes.signupForm}>
                        <div className={classes.formRegister}>
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text"
                                placeholder="..."
                                name="firstName"
                                value={currentUser.firstName}
                                onChange={(event) => setCurrentUser({ ...currentUser, firstName: event.target.value })}
                            />
                        </div>

                        <div className={classes.formRegister}>
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text"
                                placeholder="..."
                                name="lastName"
                                value={currentUser.lastName}
                                onChange={(event) => setCurrentUser({ ...currentUser, lastName: event.target.value })}
                            />
                        </div>

                        <div className={classes.formRegister}>
                            <label htmlFor="email">Email Address:</label>
                            <input type="email"
                                placeholder="..."
                                name="email"
                                value={currentUser.email}
                                onChange={(event) => setCurrentUser({ ...currentUser, email: event.target.value })}
                            />
                        </div>

                        <div className={classes.formRegister}>
                            <label htmlFor="phone">Mobile:</label>
                            <input type="tel"
                                placeholder="..."
                                name="phone"
                                value={currentUser.phone}
                                onChange={(event) => setCurrentUser({ ...currentUser, phone: event.target.value })}
                            />
                        </div>

                        <div className={classes.formRegister}>
                            <label htmlFor="password">Password:</label>
                            <input type="password"
                                placeholder="..."
                                name="password"
                                value={currentUser.password}
                                onChange={(event) => setCurrentUser({ ...currentUser, password: event.target.value })}
                            />
                        </div>

                        <button type="submit">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;