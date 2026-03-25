//HTML -> JS
// const resultH1 = document.getElementsByTagName("h1")[0];
// const resultH1 = document.querySelector("h1");
// const resultH1 = document.querySelectorAll("h1")[0];
const resultH1 = document.getElementById("result");
// const resultH1 = document.querySelector("#result");
// const plusButton = document.querySelector("button");
const plusButton = document.getElementsByClassName("plusButton")[0];
// const plusButton = document.querySelectorAll(".plusButton")[0];


let count = 0;

// plusButton.addEventListener("click", () => {
//     count++;
//     resultH1.innerHTML = count;
// });
plusButton.onclick = () => {
    count++;
    resultH1.innerHTML = count;
};