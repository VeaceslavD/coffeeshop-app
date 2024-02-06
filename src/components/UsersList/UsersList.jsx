import { Link } from "react-router-dom";
import classes from "./UsersList.module.css";

function UsersList(props) {
    return (
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
                    {props.users.length !== 0
                        ? (
                            props.users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.password}</td>
                                    <td>
                                        <Link to={"/manage-users/viewUser/" + user.id} className={classes.viewUserButton}>View</Link>
                                        <Link to={"/manage-users/editUser/" + user.id} className={classes.editUserButton}>Edit</Link>
                                        <button className={classes.deleteUserButton} onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td style={{ color: 'red' }}>No users found!</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UsersList;