const h1 = document.getElementById('result');
const button = document.getElementsByClassName('plusBtn')[0];

let count = 0;

// button.addEventListener('click', () => {
//     count++;
//     h1.textContent = count;
// });

function counter(num = 1) {
    count += num;
    h1.textContent = count;
}
