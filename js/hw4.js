console.log("hw4:");
let string = prompt("текст чи нічого");
if (string == "") {
    console.log("нічого");
}
else {
    console.log("текст");
}


let number1 = 10;
let number2 = 3;
if (number1 + number2 > 10) {
    console.log("Сума більша за 10");
}
else {
    console.log("Сума менша або дорівнює 10");
}

let str = prompt("введіть текст")
if (str.includes('JavaScript')) {
    console.log("Текст містить слово JavaScript");
}
else {
    console.log("Текст не містить слово JavaScript");
}


let MyNumber = prompt('вкажіть число');
if (20 > MyNumber > 10) {
    console.log("Число входить в діапазон від 10 до 20");
}
else {
    console.log("Число не входить в діапазон від 10 до 20");
}

let name = prompt("name:");
let email = prompt("email:");
let password = prompt("password:");
if (name.length < 3) {
    console.log('error')
}
else if (!email.includes("@") || !email.includes(".")) {
    console.log('error')
}
else if (password.length < 7) {
    console.log('error')
}
else {
    console.log('no errors');
}