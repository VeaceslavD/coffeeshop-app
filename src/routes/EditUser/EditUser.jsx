import { useNavigate, useParams } from "react-router-dom";
import classes from "./EditUser.module.css";
import { getUserById, saveOrUpdateUser, } from "../../services/users.services";
import { useEffect, useState } from "react";

function EditUser() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const existUser = getUserById(+id);

        setUser(existUser);
    }, [id]);

    function handleSaveUser(e) {
        e.preventDefault();

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password !== confirmPassword) {
            setErrorMessage('Passwords does not match!');
        } else {
            saveOrUpdateUser(firstName, lastName, email, phone, password);
            navigate("/manage-users");
        };
    }

    return (
        <div className={classes.addUser}>
            <h1>{id === "null" ? "Add new" : "Edit"} user</h1>

            {user && (
                <form onSubmit={handleSaveUser} className={classes.signupForm}>
                    <div className={classes.formRegister}>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text"
                            placeholder="..."
                            name="firstName"
                            value={user?.firstName}
                            onChange={(event) => setUser({ ...user, firstName: event.target.value })} />
                    </div>

                    <div className={classes.formRegister}>
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text"
                            placeholder="..."
                            name="lastName"
                            value={user?.lastName}
                            onChange={(event) => setUser({ ...user, lastName: event.target.value })} />
                    </div>

                    <div className={classes.formRegister}>
                        <label htmlFor="email">Email Address:</label>
                        <input type="email"
                            placeholder="..."
                            name="email"
                            value={user?.email}
                            onChange={(event) => setUser({ ...user, email: event.target.value })} />
                    </div>

                    <div className={classes.formRegister}>
                        <label htmlFor="phone">Mobile:</label>
                        <input type="tel"
                            placeholder="..."
                            name="phone"
                            value={user?.phone}
                            onChange={(event) => setUser({ ...user, phone: event.target.value })} />
                    </div>

                    <div className={classes.formRegister}>
                        <label htmlFor="password">Password:</label>
                        <input type="password"
                            placeholder="..."
                            name="password"
                            value={user?.password}
                            onChange={(event) => setUser({ ...user, password: event.target.value })} />
                    </div>

                    <div className={classes.formRegister}>
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password"
                            placeholder="..."
                            name="confirmPassword" />
                    </div>

                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <button type="submit">Save</button>
                </form>
            )}
        </div>
    )
}

export default EditUser;