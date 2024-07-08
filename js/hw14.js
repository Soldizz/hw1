const getUserNames = (users) => users.map((user) => user.name);
const users = [
    {
        name: "John",
        age: 25,
        eyeColor: "blue",
        gender: "male",
        isActive: true,
        email: "john@example.com",
    },
    {
        name: "Jane",
        age: 30,
        eyeColor: "green",
        gender: "female",
        isActive: false,
        email: "jane@example.com",
    },
    {
        name: "Bob",
        age: 20,
        eyeColor: "brown",
        gender: "male",
        isActive: true,
        email: "bob@example.com",
    },
];
console.log(getUserNames(users));
const getUsersByEyeColor = (users, color) => users.filter((user) => user.eyeColor === color);
console.log(getUsersByEyeColor(users, "blue")); 


const getUserNamesByGender = (users, gender) => users.filter(user => user.gender === gender).map(user => user.name);
console.log(getUserNamesByGender(users, 'male'));


const getInactiveUsers = users => users.filter(user => !user.isActive);
console.log(getInactiveUsers(users));

const getUserByEmail = (users, email) => users.find(user => user.email === email);
console.log(getUserByEmail(users, 'jane@example.com'));

const getUsersWithAge = (users, min, max) => users.filter(user => user.age >= min && user.age <= max);
console.log(getUsersWithAge(users, 20, 30));