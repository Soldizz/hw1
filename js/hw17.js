
const textInput = document.getElementById("textInput");
const changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", () => {
    changeButton.textContent = textInput.value;
});


const image = document.getElementById("image");
image.src = "https://via.placeholder.com/300";


const link = document.getElementById("link");
const linkedImage = document.getElementById("linkedImage");

link.href = "https://new-url.com";
linkedImage.alt = "Новий опис зображення";


const list = document.getElementById("list");
const firstListItem = list.querySelector("li:first-child");
firstListItem.textContent = "Новий текст для першого елемента";
