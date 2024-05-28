let numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers);

let array = [
    "Рядок 1",
    "Рядок 2",
    "Рядок 3"
];
array.push("Рядок 4");
console.log(array);


let numbersArray = [1, 2, 3, 4, 5];
let sum = 0;

for (let number of numbersArray) {
    if (typeof number === 'number') { 
        sum += number;
    }
}

console.log("Сума чисел у масиві:", sum);


let arrayNum = [10, 20, 30, 40, 50];
for (let i = 0; i < arrayNum.length; i += 1) {
    console.log("Елемент " + i + ":", arrayNum[i]);
}


let arrayStr = [
    "Р1",
    "Дуже довгий рядок 2",
    "Р3",
    "Ще один довгий рядок 4",
    "P5"
];
for (let str of arrayStr) {
    if (str.length > 5) {
        console.log(str);
    }
}


let arrayMax = [15, 7, 23, 10, 45, 8, 32, 19, 6, 28];
let max = arrayMax[0];
for (let num of arrayMax) {
    if (num > max) {
        max = num;
    }
}
console.log("Максимальне значення у масиві:", max);

let numberArray = [15, 7, 23, 10, 45, 8, 32, 19, 6, 28];
console.log("Парні числа у масиві:");
for (let number of numberArray) {
    if (number % 2 === 0) {
        console.log(number);
    }
}
