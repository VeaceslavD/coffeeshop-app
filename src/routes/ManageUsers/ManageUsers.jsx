import { Link } from "react-router-dom";
import { deleteUser, getUsers, getUsersBySearchValue } from "../../services/users.services";
import classes from "./ManageUsers.module.css";
import { useState } from "react";
import UsersList from "../../components/UsersList/UsersList";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

function ManageUsers() {
    const [users, setUsers] = useState(getUsers());
    const [searchValue, setSearchValue] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const handleDeleteUser = (id) => {
        setUserToDelete(id);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        deleteUser(userToDelete);
        setUsers(getUsers());
        setShowDeleteModal(false);
    };

    const cancelDelete = () => {
        setShowDeleteModal(false);
        setUserToDelete(null);
    };

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        const filteredUsers = getUsersBySearchValue(value, getUsers());
        setUsers(filteredUsers);
    };

    return (
        <div className={classes.manageUsers}>
            <div className={classes.manageUsersContainer}>
                <header className={classes.manageUsersHeader}>
                    <div className={classes.manageUsersHeaderTitle}>
                        <h1>Manage Users</h1>

                        <input type="text"
                            placeholder="Search user"
                            value={searchValue}
                            onChange={handleSearch}
                        />
                    </div>

                    <Link to="/manage-users/EditUser/null" className={classes.addUserButton}>Add User</Link>
                </header>

                <UsersList users={users} handleDeleteUser={handleDeleteUser} />


                {showDeleteModal && (
                    <DeleteModal
                        userToDelete={userToDelete}
                        onConfirm={confirmDelete}
                        onClose={cancelDelete}
                    />
                )}
            </div>
        </div>
    )
}

export default ManageUsers;