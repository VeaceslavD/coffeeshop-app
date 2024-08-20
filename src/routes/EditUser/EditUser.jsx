import { Link, useNavigate, useParams } from "react-router-dom";
import classes from "./EditUser.module.css";
import { getUserById, saveOrUpdateUser, } from "../../services/users.services";
import { useEffect, useState } from "react";
import UserForm from "../../components/UserForm/UserForm";

function EditUser() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const inputFields = [
        { label: 'First Name', type: 'text', placeholder: '...', name: 'firstName' },
        { label: 'Last Name', type: 'text', placeholder: '...', name: 'lastName' },
        { label: 'Email Address', type: 'email', placeholder: '...', name: 'email' },
        { label: 'Mobile ', type: 'tel', placeholder: '...', name: 'phone' },
        { label: 'Password', type: 'password', placeholder: '...', name: 'password' },
        { label: 'Confirm Password', type: 'password', placeholder: '...', name: 'confirmPassword' }
    ];

    useEffect(() => {
        const existUser = getUserById(+id);
        setUser(existUser);
    }, [id]);

    function handleSaveUser(user) {
        saveOrUpdateUser(user);
        navigate("/manage-users");
    }

    return (
        <div className={classes.addUser}>
            <div className={classes.addUserContainer}>
                <Link to="/manage-users">Back</Link>

                <div className={classes.userFormContainer}>
                    <h1>{id === "null" ? "Add new" : "Edit"} user</h1>

                    {user && (
                        <UserForm user={user}
                            inputFields={inputFields}
                            onSubmit={handleSaveUser}
                            setUser={setUser}
                            buttonName={'Save Changes'}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default EditUser;