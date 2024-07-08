
let user = {
    name: "John",
    age: 30,
    hobby: "reading",
    premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
for (let key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}

function countProps(obj) {
    return Object.keys(obj).length;
}
console.log(countProps({ name: 'Alice', age: 25, job: 'Developer' }));

function findBestEmployee(employees) {
    let bestEmployee = '';
    let maxTasks = 0;
    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = name;
        }
    }
    return bestEmployee;
}
const employees = {
    John: 10,
    Jane: 15,
    Bob: 7,
    Alice: 20
};
console.log(findBestEmployee(employees));


function countTotalSalary(employees) {
    let totalSalary = 0;
    for (const salary of Object.values(employees)) {
        totalSalary += salary;
    }
    return totalSalary;
}
const salaries = {
    John: 1000,
    Jane: 1500,
    Bob: 1200,
    Alice: 2000
};
console.log(countTotalSalary(salaries));


function getAllPropValues(arr, prop) {
    const values = [];
    for (const obj of arr) {
        if (prop in obj) {
            values.push(obj[prop]);
        }
    }
    return values;
}
const products = [
    { name: 'Apple', price: 50, quantity: 10 },
    { name: 'Banana', price: 30, quantity: 20 },
    { name: 'Orange', price: 40, quantity: 15 }
];
console.log(getAllPropValues(products, 'name')); 


function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
    for (const product of allProducts) {
        if (product.name === productName) {
            totalPrice = product.price * product.quantity;
            break;
        }
    }
    return totalPrice;
}

const product = [
    { name: 'Apple', price: 50, quantity: 10 },
    { name: 'Banana', price: 30, quantity: 20 },
    { name: 'Orange', price: 40, quantity: 15 }
];
console.log(calculateTotalPrice(products, 'Banana'));