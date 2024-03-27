const colors = ["red", "black", "blue"];
const min = 0;
const max = colors.length - 1;
const index = Math.round(Math.random() * (max - min) + min);
console.log(index);
const color = colors[index];
console.log(color);
document.body.style.backgroundColor = color;


// hw2:
