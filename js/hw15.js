const users = [
    {
        name: "Mango",
        balance: 2400,
        friends: ["Poly", "Ajay"],
        skills: ["JavaScript", "React", "Node"],
    },
    {
        name: "Poly",
        balance: 3000,
        friends: ["Mango", "Jay"],
        skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
        name: "Ajay",
        balance: 1500,
        friends: ["Mango"],
        skills: ["Python", "Django"],
    },
    {
        name: "Jay",
        balance: 1800,
        friends: ["Poly"],
        skills: ["JavaScript", "Node", "Express"],
    },
    {
        name: "Ravi",
        balance: 1200,
        friends: ["Ajay"],
        skills: ["C#", "ASP.NET"],
    },
];

const totalBalance = users.reduce((acc, user) => acc + user.balance, 0);
console.log(`Загальна сума балансу всіх користувачів: ${totalBalance}`);

const getUsersWithFriend = (friendName) => {
    return users.filter((user) => user.friends.includes(friendName)).map((user) => user.name);
};

const usersWithFriend = getUsersWithFriend("Mango");
console.log(`Користувачі, у яких є друг Mango: ${usersWithFriend.join(", ")}`); 

const sortedByFriendsCount = users
    .map((user) => ({ name: user.name, friendsCount: user.friends.length }))
    .sort((a, b) => a.friendsCount - b.friendsCount)
    .map((user) => user.name);

console.log(`Користувачі, відсортовані за кількістю друзів: ${sortedByFriendsCount.join(", ")}`); 
const allSkills = users
    .flatMap((user) => user.skills)
    .filter((skill, index, skills) => skills.indexOf(skill) === index)
    .sort();

console.log(`Всі унікальні вміння користувачів: ${allSkills.join(", ")}`); 
