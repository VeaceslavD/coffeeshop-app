export function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

let users = getUsers();

const admin = {
    id: users.length + 1,
    firstName: 'Admin',
    lastName: 'Admin',
    email: 'admin@gmail.com',
    role: 'admin',
    phone: '069202020',
    password: '12345'
};

if (!users.some(user => user.email === admin.email)) {
    users.push(admin);
}

localStorage.setItem('users', JSON.stringify(users));

export const saveOrUpdateUser = (user) => {
    if (user.id) {
        let existingUser = getUserById(user.id);

        if (existingUser) {
            existingUser.firstName = user.firstName;
            existingUser.lastName = user.lastName;
            existingUser.phone = user.phone;
            existingUser.password = user.password;
            localStorage.setItem('users', JSON.stringify(users));
            return existingUser;
        }
    }

    if (userExistsByEmail(user.email)) {
        return null;
    }

    const newUser = {
        id: users.length + 1,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: "user",
        phone: user.phone,
        password: user.password,
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return newUser;
};

export const deleteUser = (id) => {
    const foundIndex = users.findIndex(user => user.id === id);

    if (foundIndex > -1) {
        users.splice(foundIndex, 1);
        localStorage.setItem('users', JSON.stringify(users));
    }
};

export const getUserById = (id) => {
    const foundUser = users.find(user => user.id === id);
    const defaultUser = {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
    };

    return foundUser ? foundUser : defaultUser;
};

const userExistsByEmail = (email) => {
    return users.some(user => user.email === email);
};

export const findUser = (email, password) => {
    return users.find(user => user.email === email && user.password === password);
};

export const getUsersBySearchValue = (searchValue) => {
    const lowerCaseSearch = searchValue.toLowerCase();
    return users.filter(user => (user.firstName || user.lastName).toLowerCase().includes(lowerCaseSearch));
};

