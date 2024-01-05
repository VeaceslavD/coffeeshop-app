import { Link } from "react-router-dom";
import { getUsers } from "../../services/users.services";
import classes from "./ManageUsers.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ManageUsers() {
    const users = getUsers();

    return (
        <div className={classes.manageUsers}>
            <div className={classes.manageUsersContainer}>
                <header className={classes.manageUsersHeader}>
                    <div className={classes.manageUsersHeaderTitle}>
                        <h1>Manage Users</h1>

                        <div className={classes.searchUser}>
                            <input type="text" placeholder="Search user" />
                            <button>
                                <FontAwesomeIcon className={classes.searchIcon} icon="fa-solid fa-magnifying-glass" />
                            </button>
                        </div>
                    </div>

                    <Link to="/manage-users/EditUser/null" className={classes.addUserButton}>Add User</Link>
                </header>

                <div className={classes.manageUsersList}>
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Password</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.password}</td>
                                    <td>
                                        <Link to={"/manage-users/viewUser/" + user.id} className={classes.viewUserButton}>View</Link>
                                        <Link to={"/manage-users/editUser/" + user.id} className={classes.editUserButton}>Edit</Link>
                                        <button className={classes.deleteUserButton}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageUsers;