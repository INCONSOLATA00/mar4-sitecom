

const dynamicImage = document.querySelector('.overlay');
const activeImage =  document.querySelector('.background-image');

let bgPositionY = +activeImage.style.backgroundPositionY;
let initializer = true;
let fixedValue = true;

let mouseMove = false

let pastValue;
let operator;

dynamicImage.addEventListener('mousemove', position_y);

function position_y(e) {
let dynaMap = e.offsetY;
mouseMove = true;

if(pastValue > dynaMap) {
console.log('decrease');
operator = '-';
} else if (pastValue < dynaMap) {
console.log('increase');
operator = '+';
}

pastValue = dynaMap;

activeImage.style.cssText =
`background-position-y: ${dynaMap / 50}%;`
}

(function toggleRecursion (){
setTimeout(() => {
if(initializer  == true && mouseMove == true) {

setTimeout(() => {
fixedValue = false;
}, 20);

mouseMove = false; 
toggleRecursion();
}}, 500);} ) // SEE IMPORTANT
();

(function setCondition (){
setTimeout(() => {
if(fixedValue  == true) {
mouseMove = false; 
setCondition();
}}, 1000);} )
();

(function getCondition (){
setTimeout(() => {
if(fixedValue  == true) {
getCondition();

if(mouseMove == true) {
seeDelay();
}
}}, 20);} )(); 

function seeDelay() {
setTimeout(() => {
if (operator == '+') {
activeImage.style.backgroundPositionY = (bgPositionY -= 1) + "px";
console.log('runs');
} else if (operator == '-') {
activeImage.style.backgroundPositionY = (bgPositionY += 1) + "px";
console.log('runs');
}
}, 100);}

// defaultColor.style.backgroundColor = color;
// let alsoDefaultColor = +defaultColor.style.opacity;
// defaultColor.style.opacity = alsoDefaultColor += 0.1;

