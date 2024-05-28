
let arr = [1, 2, 3, 4, 5];
let resultFor = "";
for (let i = 0; i < arr.length; i++) {
    resultFor += arr[i];
    if (i !== arr.length - 1) {
        resultFor += ",";
    }
}
let resultJoin = arr.join(",");
console.log("Результат через for:", resultFor);
console.log("Результат через join():", resultJoin);



let cards = ["k1", "k2", "k3", "k4", "k5"];
cards.splice(2, 1);
cards.splice(5, 0, "k6");
cards[3] = "k7";
console.log(cards);
