

const dynamicImage = document.querySelector('.overlay');
const activeImage =  document.querySelector('.background-image');

mouseMove = false;
let iterations = 0;
dynamicImage.addEventListener('mousemove', position_y);

function position_y(e) {
let dynaMap = e.offsetY; // to add ramp value*
mouseMove = true;

activeImage.style.cssText =
`background-position-y: ${dynaMap / 50}%;`

setTimeout(() => {
mouseMove = false;
console.log('see false after delay')

}, 100);  // create a seperate value that +=  position-y

function counter(){

setTimeout(() => {
iterations += 1;
console.log(iterations);

if(iterations < 10) {
counter();

} else if(iterations > 10) { // WAS HERE*
}

}, 1000);
} 
counter();

} // position_y


