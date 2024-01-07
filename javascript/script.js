

const dynamicImage = document.querySelector('.overlay');
const activeImage =  document.querySelector('.background-image');

let intervalId;
let timeoutId;

let someValue = 0;

dynamicImage.addEventListener('mousemove', position_y);

function position_y(e) { // 0 - 745,  => (50.048 - 65.024)
let mod = 50 + e.offsetY / 20.5;
console.log(mod);

intervalId = setInterval(() => {
someValue += 1;
console.log(someValue);    

if(someValue == 10) {
clearInterval(intervalId);
someValue = 0;
}

},50)
dynamicImage.removeEventListener('mousemove', position_y);
timeoutId = setTimeout(() => {dynamicImage.addEventListener('mousemove', position_y);
clearTimeout(timeoutId);
},2000)
}