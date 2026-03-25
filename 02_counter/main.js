const h1 = document.getElementById('result');
const button = document.getElementsByClassName('plusBtn')[0];

let count = 0;

// button.addEventListener('click', () => {
//     count++;
//     h1.textContent = count;
// });

button.onclick = () => {
    count++;
    h1.textContent = count;
};