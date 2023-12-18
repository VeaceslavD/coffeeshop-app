import { Link, useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

function Login() {
    const [errorMessage, setErrorMessage] = useState('');
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const user = userContext.login(email, password);

        if (user) {
            navigate('/')
        } else {
            setErrorMessage('User does not exist!')
        }
    }


    return (
        <div className={classes.login}>
            <div className={classes.loginContainer}>
                <header className={classes.loginHeader}>
                    <Link>Login</Link>
                    <h1>|</h1>
                    <Link to="/sign-up">Sign Up</Link>
                </header>

                <form className={classes.loginForm} onSubmit={handleSubmit}>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <div className={classes.formRegister}>
                        <label htmlFor="email">Email Address:</label>
                        <input type="text" placeholder="..." name="email" />
                    </div>

                    <div className={classes.formRegister}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" placeholder="..." name="password" />
                    </div>

                    <button>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login;