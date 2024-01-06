
console.log('?');
const dynamicImage = document.querySelector('.overlay');
const activeImage =  document.querySelector('.background-image');

dynamicImage.addEventListener('mousemove', position_y);

function position_y(e){ // 0 - 745,  => (50.048 - 65.024)

let baseline = 60;
let mod = 50 + e.offsetY / 20.5;

// console.log(mod);
// activeImage.style.cssText = `
// background-position: 50% ${50 + e.offsetY / 20.5}%;`

if(mod >= 60) {
setInterval(()  => {
console.log(`pos == ${baseline}`)

while(baseline < 65) {
baseline += 1;
}},2000);}

if(mod <= 60) {
setInterval(()  => {
console.log(`neg == ${baseline}`)

while(baseline > 50) {
baseline -= 1;
}},2000);}
}