function logItems(array) {
    for (let i = 0; i < array.length; i += 1) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}
const items = ["Mango", "Poly", "Ajax"];
logItems(items);

function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(" ");
    const totalPrice = words.length * pricePerWord;
    return totalPrice;
}

const message = "Hello world";
const pricePerWord = 10;
const totalCost = calculateEngravingPrice(message, pricePerWord);
console.log(totalCost);

function findLongestWord(string) {
    const words = string.split(" ");
    let longestWord = "";
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
const string = "The quick brown fox jumped over the lazy dog";
const longest = findLongestWord(string);
console.log(longest);

function formatString(string) {
    const maxLength = 40;
    if (string.length <= maxLength) {
        return string;
    } else {
        const trimmedString = string.slice(0, maxLength) + "...";
        return trimmedString;
    }
}
const longString =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const formattedString = formatString(longString);
console.log(formattedString);

function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
        return true;
    } else {
        return false;
    }
}
console.log(checkForSpam("Get your free spam now"));
console.log(checkForSpam("Amazing sale on our website"));
console.log(checkForSpam("Check out our new products"));



const numbers = [];
let input;
let total = 0;

do {
    input = prompt("Введіть число:");
    if (input === null) {
        break;
    }
    if (isNaN(input)) {
        alert("Було введено не число, попробуйте ще раз");
        continue;
    }
    numbers.push(Number(input));
} while (true);

if (numbers.length > 0) {
    for (const number of numbers) {
        total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log("Масив чисел порожній.");
}