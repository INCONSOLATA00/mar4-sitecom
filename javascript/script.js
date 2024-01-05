
console.log('?');
const dynamicImage = document.querySelector('.overlay');
const activeImage =  document.querySelector('.background-image');

dynamicImage.addEventListener('mousemove', position_y);

function position_y(e){ // 0 - 745

activeImage.style.cssText = `
background-position: 50% ${e.offsetY / 7.5}%;`
}