import { Link, useNavigate } from "react-router-dom";
import classes from "./SignUp.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

function SignUp() {
    const [errorMessage, setErrorMessage] = useState('');
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const user = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            password: e.target.password.value,
            confirmPassword: e.target.confirmPassword.value,
        }

        if (user.password !== user.confirmPassword) {
            setErrorMessage('Passwords does not match!');
        } else {
            const createdUser = userContext.signUp(user);

            if (createdUser === null) {
                setErrorMessage('Sign Up Failed!')
            } else {
                navigate('/')
            }
        }
    }

    return (
        <div className={classes.signup}>
            <div className={classes.signupContainer}>
                <header className={classes.signupHeader}>
                    <Link to="/login">Login</Link>
                    <h1>|</h1>
                    <Link>Sign Up</Link>
                </header>

                <form onSubmit={handleSubmit} className={classes.signupForm}>
                    <div className={classes.formRegister}>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" placeholder="..." name="firstName" />
                    </div>

                    <div className={classes.formRegister}>
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" placeholder="..." name="lastName" />
                    </div>

                    <div className={classes.formRegister}>
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" placeholder="..." name="email" />
                    </div>

                    <div className={classes.formRegister}>
                        <label htmlFor="phone">Mobile:</label>
                        <input type="tel" placeholder="..." name="phone" />
                    </div>

                    <div className={classes.formRegister}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" placeholder="..." name="password" />
                    </div>

                    <div className={classes.formRegister}>
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" placeholder="..." name="confirmPassword" />
                    </div>

                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp; 
