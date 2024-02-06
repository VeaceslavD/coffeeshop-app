import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./UserDetails.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { saveOrUpdateUser } from "../../services/users.services";
import { Link, useNavigate } from "react-router-dom";
import UserForm from "../../components/UserForm/UserForm";

function UserDetails() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [user, setUser] = useState(currentUser);
    const navigate = useNavigate();
    const inputFields = [
        { label: 'First Name', type: 'text', placeholder: '...', name: 'firstName' },
        { label: 'Last Name', type: 'text', placeholder: '...', name: 'lastName' },
        { label: 'Email Address', type: 'email', placeholder: '...', name: 'email' },
        { label: 'Mobile ', type: 'tel', placeholder: '...', name: 'phone' },
        { label: 'Password', type: 'password', placeholder: '...', name: 'password' },
        { label: 'Confirm Password', type: 'password', placeholder: '...', name: 'confirmPassword' }
    ];

    const handleSaveUserDetails = (user) => {
        const savedUser = saveOrUpdateUser(user);
        setCurrentUser(savedUser);
        navigate('/my-account');
    };

    return (
        <div className={classes.showUserDetails}>
            <header className={classes.showUserDetailsHeader}>
                <Link to="/my-account">Back</Link>
                <FontAwesomeIcon className={classes.icon} icon="fa-solid fa-id-card" />
                <h1>My Details</h1>
            </header>
            <div className={classes.userFormContainer}>
                <UserForm user={user}
                    inputFields={inputFields}
                    onSubmit={handleSaveUserDetails}
                    setUser={setUser} 
                    buttonName={'Save'}/>
            </div>
        </div >

    )
}

export default UserDetails;