const gallery_images = document.querySelectorAll('img');
const image_body = document.querySelector('main > div');

const left_button = document.getElementsByClassName('left')[0];
const right_button = document.getElementsByClassName('right')[0];

left_button.addEventListener('click', navigate_left);
right_button.addEventListener('click', navigate_right);



let j = 0;
function fader(multiplier = 1){
setTimeout(()=>{

if(j < 10) {
j += 0.5;
fade();

fader(j);
console.log(j);
}

}, multiplier * multiplier * (multiplier / 0.4));
}

//fader();

for(let i = 0; i < gallery_images.length; i++) {
gallery_images[i].addEventListener('mouseenter', gallery_hover00);
}

for(let i = 0; i < gallery_images.length; i++) {
gallery_images[i].addEventListener('mouseout', gallery_hover01);
}


function gallery_hover00(e){
value = 0;
reset();
fader();
e.target.style.cssText = 
`border-radius: ${10}px `;
}


function gallery_hover01(e){
reset();
fader();
e.target.style.cssText = 
`border-radius: ${0}px `;
}


let i = 1;
let image_index = 0;
let last_index = image_index;

let image_position;
let disable_other_button = false;

let navigateRight = false;
let navigateLeft = false;

function reset(){
gallery_images[image_index].style.cssText =
`border-radius: 0px;`
}
gallery_images[image_index].style.cssText =
`border-radius: 10px;`

image_body.style.cssText = `background-image: url("${gallery_images[0].src}");`


function navigate_left(){
if(image_index > 0) {

navigateLeft = true;
left_button.removeEventListener('click', navigate_left);

image_position = -858;
image_index--;
dynamic_interval();

gallery_images[image_index].style.cssText =
`border-radius: 10px;`
gallery_images[image_index + 1].style.cssText =
`border-radius: 0px;`
}
};


function navigate_right(){
if(image_index < 7) {

navigateRight = true;
right_button.removeEventListener('click', navigate_right);

image_position = 858;
image_index++;
dynamic_interval();
    
gallery_images[image_index].style.cssText =
`border-radius: 10px;`
gallery_images[image_index - 1].style.cssText =
`border-radius: 0px;`
}};



(function(){
image_body.style.cssText = `background-image: url("${gallery_images[0].src}"), url("${gallery_images[image_index].src}");`
})();

function run_animation(){

switch(image_index) {
case 0:
if(navigateRight == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index -1].src}"), url("${gallery_images[image_index].src}");`
}

if(navigateLeft == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index +1].src}"), url("${gallery_images[image_index].src}");`
}
break;

case 1:
if(navigateRight == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index -1].src}"), url("${gallery_images[image_index].src}");`
}

if(navigateLeft == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index +1].src}"), url("${gallery_images[image_index].src}");`
}
break;

case 2:
if(navigateRight == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index -1].src}"), url("${gallery_images[image_index].src}");`
}

if(navigateLeft == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index +1].src}"), url("${gallery_images[image_index].src}");`
}
break;

case 3:
if(navigateRight == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index -1].src}"), url("${gallery_images[image_index].src}");`
}

if(navigateLeft == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index +1].src}"), url("${gallery_images[image_index].src}");`
}
break;

case 4:
if(navigateRight == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index -1].src}"), url("${gallery_images[image_index].src}");`
}

if(navigateLeft == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index +1].src}"), url("${gallery_images[image_index].src}");`
}
break;

case 5:
if(navigateRight == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index -1].src}"), url("${gallery_images[image_index].src}");`
}

if(navigateLeft == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index +1].src}"), url("${gallery_images[image_index].src}");`
}
break;

case 6:
if(navigateRight == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index -1].src}"), url("${gallery_images[image_index].src}");`
}

if(navigateLeft == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index +1].src}"), url("${gallery_images[image_index].src}");`
}
break;

case 7:
if(navigateRight == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index -1].src}"), url("${gallery_images[image_index].src}");`
}

if(navigateLeft == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index +1].src}"), url("${gallery_images[image_index].src}");`
}
break;

default:
}};


function dynamic_interval(){ console.log(image_position);
setTimeout(()=>{
if(i < 429 && i > -430) {

disable_other_button = true;
dynamic_interval(i);
run_animation();

if(navigateLeft == true) {
i += 1.5;}

if(navigateRight == true) {
i -= 1.5;}

left_button.removeEventListener('click', navigate_left);
right_button.removeEventListener('click', navigate_right);
} else if(i <= 1 - image_position / 2) {

i = 1;

disable_other_button = false;
navigateLeft = false;
navigateRight = false;


left_button.addEventListener('click', navigate_left);
right_button.addEventListener('click', navigate_right);
}}, i * (i / 16000));}



