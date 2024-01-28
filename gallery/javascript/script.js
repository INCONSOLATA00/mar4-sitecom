const gallery_images = document.querySelectorAll('img');
const image_body = document.querySelector('main > div');

const left_button = document.getElementsByClassName('left')[0];
const right_button = document.getElementsByClassName('right')[0];

left_button.addEventListener('click', button_used_left);
right_button.addEventListener('click', button_used_right);


let i = 1;
let image_index = 0;
let last_index = image_index;

let image_position;
let disable_other_button = false;

let navigateRight = false;
let navigateLeft = false;
let buttonUsed;


let j = 0;
function fader(multiplier = 1){
setTimeout(() =>{

if(j < 10) {
animating = true;
j += 0.5;

fader(j);
console.log(j);

}}, multiplier * multiplier * (multiplier / 6));
}


for(let i = 0; i < gallery_images.length; i++) {
gallery_images[i].addEventListener('click', gallery_select00);
gallery_images[i].id = i;}


function button_used_left(){ 
buttonUsed = true;
navigate_left();}

function button_used_right(){ 
buttonUsed = true;
navigate_right();}

    // --------------------------

let last_image_index;
let first_image_index;

let initializer = false;
function gallery_select00(e){
function mouse_used(){ buttonUsed = false;} // current


last_image_index = first_image_index;
first_image_index = e.target.id;

if(first_image_index > last_image_index && buttonUsed == false){ console.log('CHECK ERR');
navigate_right();}

if(initializer == false && buttonUsed == false){ console.log('CHECK ERR');
document.getElementById(0).style.cssText = 
`border-radius: 0px`;
initializer = true;

image_index = first_image_index -1;
navigate_right();

}else if(first_image_index !== last_image_index && buttonUsed == false){ console.log('CHECK ERR');
j = 0; // SEE HERE

document.getElementById(last_image_index).style.cssText = 
`border-radius: 0px`;}

if(first_image_index < last_image_index && buttonUsed == false){ console.log('CHECK ERR');
navigate_left();}

    // --------------------------

if(j < 10){
customInterval00();}

reset();
fader();
function customInterval00 (){
if(j < 10) {
setTimeout(() =>{
document.getElementById(first_image_index).style.cssText = 
`border-radius: ${j}px`;
customInterval00();
},1);
}}};


function reset(){
gallery_images[image_index].style.cssText =
`border-radius: 0px;`
}
gallery_images[image_index].style.cssText =
`border-radius: 10px;`

image_body.style.cssText = `background-image: url("${gallery_images[0].src}");`

function navigate_left(){ console.log('navigate_left');
if(image_index > 0) {

navigateLeft = true;
left_button.removeEventListener('click', navigate_left);
image_position = -858;

if(buttonUsed == true) {
image_index--;

gallery_images[image_index].style.cssText =
`border-radius: 10px;`
gallery_images[image_index + 1].style.cssText =
`border-radius: 0px;`
dynamic_interval();
}
else if (buttonUsed == false) {
image_index = first_image_index;

dynamic_interval();
};}};


function navigate_right(){ console.log('navigate_right');
if(image_index < 7) {

navigateRight = true;
right_button.removeEventListener('click', navigate_right); // DO THIS FOR THE MOUSE TO DISABLE INPUT UNTIL INTERVAL ENDS*
image_position = 858;

if(buttonUsed == true) { console.log('runs00');
image_index++;

gallery_images[image_index].style.cssText =
`border-radius: 10px;`
gallery_images[image_index - 1].style.cssText =
`border-radius: 0px;`
dynamic_interval();

}else if (buttonUsed == false) { console.log('runs01');
image_index = first_image_index;

dynamic_interval();
};}};



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


function dynamic_interval(){ // later remove mouse event***
setTimeout(() =>{
if(i < 429 && i > -430) {

disable_other_button = true;
dynamic_interval(i);
run_animation();


console.log('WARNING');
if(navigateLeft == true) {
i += 1.5;}

if(navigateRight == true) {
i -= 1.5;}

left_button.removeEventListener('click', button_used_left);
right_button.removeEventListener('click', button_used_right);

} else if(i <= 1 - image_position / 2) {

i = 1;
disable_other_button = false;
navigateLeft = false;
navigateRight = false;

left_button.addEventListener('click', button_used_left);
right_button.addEventListener('click', button_used_right);

}}, i * (i / 16000));}