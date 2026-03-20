//HTML -> JS
// const resultH1 = document.getElementsByTagName("h1")[0];
const resultH1 = document.querySelector("h1");
// const resultH1 = document.querySelectorAll("h1")[0];
const plusButton = document.querySelector("button");

let count = 0;

// plusButton.addEventListener("click", () => {
//     count++;
//     resultH1.innerHTML = count;
// });
plusButton.onclick = () => {
    count++;
    resultH1.innerHTML = count;
};