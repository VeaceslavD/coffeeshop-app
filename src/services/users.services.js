function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

export const saveUser = (firstName, lastName, email, password) => {
    if (userExistsByEmail(email)) {
        return null;
    }
    const users = getUsers();

    const user = {
        id: users.length + 1,
        firstName: firstName,
        lastName: lastName,
        email: email, 
        password: password,
    };

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return user;
};

const userExistsByEmail = (email) => {
    return getUsers().some(user => user.email === email);
};

export const findUser = (email, password) => {
    return getUsers().find(user => user.email === email && user.password === password);
};
