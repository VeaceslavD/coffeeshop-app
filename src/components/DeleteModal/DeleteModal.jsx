import classes from "./DeleteModal.module.css";

function DeleteModal({ onConfirm, onClose, productToDelete, userToDelete, item, items }) {
    const handleConfirm = () => {
        onConfirm();
        onClose();
    };

    return (
        <div className={classes.canDeleteModal}>
            <div className={classes.canDeleteModalContainer}>
                <header className={classes.canDeleteModalHeader}>
                    {productToDelete && <h1>Are you sure you want to delete the product ?</h1>}
                    {userToDelete && <h1>Are you sure you want to delete the user ?</h1>}
                    {item && <h1>Are you sure you want to delete the product ?</h1>}
                    {items && <h1>Are you sure you want to delete all products ?</h1>}
                </header>
                <div className={classes.canDeleteModalActions}>
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={handleConfirm}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;