 // 0 - 745,  => (50.048 - 65.024)
const dynamicImage = document.querySelector('.overlay');
const activeImage =  document.querySelector('.background-image');

let intervalId;
let someValue = 0;

dynamicImage.addEventListener('mousemove', position_y);

function position_y(e) {
let mod = 50 + e.offsetY / 20.5;

intervalId = setInterval(() => {
someValue += 1;

// logic

},50)
dynamicImage.removeEventListener('mousemove', position_y);
}