import { Link, useNavigate } from "react-router-dom";
import classes from "./SignUp.module.css";
import { useState } from "react";
import UserForm from "../../components/UserForm/UserForm";

function SignUp() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });
    const inputFields = [
        { label: 'First Name', type: 'text', placeholder: 'Enter first name', name: 'firstName' },
        { label: 'Last Name', type: 'text', placeholder: 'Enter last name', name: 'lastName' },
        { label: 'Email Address', type: 'email', placeholder: 'Enter your email', name: 'email' },
        { label: 'Phone', type: 'tel', placeholder: 'Enter your phone', name: 'phone' },
        { label: 'Create Password', type: 'password', placeholder: 'Create password', name: 'password' },
        { label: 'Confirm Password', type: 'password', placeholder: 'Confirm password', name: 'confirmPassword' }
    ];

    function handleSubmit() {
        navigate('/');
    };

    return (
        <div className={classes.signup}>
            <div className={classes.signupContainer}>
                <header className={classes.signupHeader}>
                    <Link to="/login">Login</Link>
                    <Link to="/sign-up">Sign Up</Link>
                </header>

                <UserForm user={user}
                    setUser={setUser}
                    inputFields={inputFields}
                    onSubmit={handleSubmit}
                    buttonName={'Sign Up'} />
            </div>
        </div>
    );
}

export default SignUp;