console.log("hw5:");

let select = prompt('Кава,чай чи сік?');
if (select == 'Кава') {
    console.log(1);
}
else if (select == 'чай'){
    console.log(2);
}
else{
    console.log(3);
}

let day = prompt('Який сьогодні день за порядком?')
switch (day) {
    case 1:
        console.log('вихідний');
        break;
    case 2:
        console.log('вихідний');
        break;
    case 3:
        console.log('вихідний');
        break;
    case 4:
        console.log('вихідний');
        break;
    case 5:
        console.log('вихідний');
        break;
    case 6:
        console.log('робочий день');
        break;
    default:
        console.log('робочий день');
        break;
}
let monat = prompt("вкажіть номер місяця");
switch (monat) {
    case 1:
        console.log("зима");
        break;
    case 2:
        console.log("зима");
        break;
    case 3:
        console.log("весна");
        break;
    case 4:
        console.log("весна");
        break;
    case 5:
        console.log("весна");
        break;
    case 6:
        console.log("літо");
        break;
    case 7:
        console.log("літо");
        break;
    case 8:
        console.log("літо");
        break;
    case 9:
        console.log("осінь");
        break;
    case 10:
        console.log("осінь");
        break;
    case 11:
        console.log("осінь");
        break;
    default:
        console.log("зима");
        break;
}

let color = prompt("червоний,зелений чи жовтий?");
if (color == "червоний") {
    console.log('стоп');
} else if (color == "зелений") {
    console.log('йти');
} else {
    console.log('зачекай');
}

let number1 = 10;
let number2 = 5;
let move = prompt("+,-,*,/")
switch (move) {
    case "+":
        console.log(number1 + number2);
        break;
    case "-":
        console.log(number1 - number2);
        break;
    case "*":
        console.log(number1 * number2);
        break;
    default:
        console.log(number1 / number2);
        break;
}