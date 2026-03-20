const h1 = document.querySelector('h1');
const button = document.querySelector('button');

let count = 0;

// button.addEventListener('click', () => {
//     count++;
//     h1.textContent = count;
// });

button.onclick = () => {
    count++;
    h1.textContent = count;
};