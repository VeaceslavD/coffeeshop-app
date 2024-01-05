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

export const saveOrUpdateUser = (firstName, lastName, email, phone, password) => {
    if (userExistsByEmail(email)) {
        return null;
    }

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        existingUser.firstName = firstName;
        existingUser.lastName = lastName;
        existingUser.phone = phone;
        existingUser.password = password;
        localStorage.setItem('users', JSON.stringify(users));
        return existingUser;
    }

    const newUser = {
        id: users.length + 1,
        firstName: firstName,
        lastName: lastName,
        email: email,
        role: "user",
        phone: phone,
        password: password,
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return newUser;
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
