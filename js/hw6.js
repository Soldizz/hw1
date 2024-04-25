let num = 0;
while (num <= 10) {
    console.log(num);
    num += 1
    // if (num == 15) {
    //     break
    // }
}
console.log("EX2");
for (let num2 = 2; num2 <= 20; num2 += 2){
    console.log(num2);
//     if (num2 == 30) {
//         break
//     }
}
console.log("EX3");
let seven = 7;
for (let i = 0; i < 10; i += 1){
    console.log(seven * i);
}

console.log("EX4");
let arrOne = [1, 2, 3, 4, 5,];
let n = 0;
while (n < 5) {
    console.log(arrOne[n]);
    n += 1;
}

console.log("EX5");
let arrTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
for (let i = 0; i < 10; i += 1) {
    if (i == 6){
        continue
    }
    console.log(arrTwo[i]);

}
console.log("EX6");
let num3 = prompt("number:")
for (let i = 0; num3 > i; i += 1){
    console.log(i);
}
console.log("EX7");
for (let i = 0;i <= 20 ; i += 1){
    if (i % 3 == 0) {
        continue
    }
    console.log(i);
}
