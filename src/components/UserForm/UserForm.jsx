import { useContext, useState } from "react";
import classes from "./UserForm.module.css";
import { UserContext } from "../../contexts/UserContext";

function UserForm({ user, onSubmit, inputFields, setUser, buttonName }) {
    const userContext = useContext(UserContext);
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
        });

        if (user.firstName === "") {
            setErrors((prevErrors) => ({ ...prevErrors, firstName: 'Please enter your first name' }));
            return;
        }

        if (user.lastName === "") {
            setErrors((prevErrors) => ({ ...prevErrors, lastName: 'Please enter your last name' }));
            return;
        }

        if (user.email === "") {
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Please enter your email address' }));
            return;
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Please enter a valid email address' }));
            return;
        }

        if (user.phone === "") {
            setErrors((prevErrors) => ({ ...prevErrors, phone: 'Please enter your phone number' }));
            return;
        } else if (!/^\+?(\d{0,3})?[-.\s]?(\d{1,})[-.\s]?(\d{1,})[-.\s]?(\d{1,})$/.test(user.phone)) {
            setErrors((prevErrors) => ({ ...prevErrors, phone: 'Invalid phone number format!' }));
            return;
        }

        if (user.password === "") {
            setErrors((prevErrors) => ({ ...prevErrors, password: 'Please enter a password' }));
            return;
        } else if (user.password.length < 8) {
            setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be at least 8 characters' }));
            return;
        } else if (!/[a-z]/.test(user.password) || !/[A-Z]/.test(user.password) || !/\d/.test(user.password)) {
            setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must contain at least one lowercase letter, one uppercase letter, and one number' }));
            return;
        } else if (user.confirmPassword === "") {
            setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: 'Please confirm your password' }));
            return;
        } else if (user.password !== user.confirmPassword) {
            setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: 'Passwords do not match' }));
            return;
        } else {
            const createdUser = userContext.signUp(user);

            if (createdUser === null) {
                setErrors((prevErrors) => ({ ...prevErrors, email: 'Email already in use' }));
            } else
                onSubmit(user);
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className={classes.signupForm}>
            {inputFields.map((field) => (
                <div key={field.name} className={classes.formRegister}>
                    <label htmlFor={field.name}>{field.label}:</label>
                    <input
                        type={field.type}
                        placeholder={field.placeholder}
                        name={field.name}
                        value={user[field.name]}
                        onChange={(event) => setUser({ ...user, [field.name]: event.target.value })}
                    />
                    {errors[field.name] && <p className={classes.error}>{errors[field.name]}</p>}
                </div>
            ))}

            <button type="submit">{buttonName}</button>
        </form>
    );
}

export default UserForm;