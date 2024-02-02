const gallery_images = document.querySelectorAll('img');
const image_body = document.querySelector('main > div');

const left_button = document.getElementsByClassName('left')[0];
const right_button = document.getElementsByClassName('right')[0];

left_button.addEventListener('click', button_used_left);
right_button.addEventListener('click', button_used_right);

let i = 1;
let image_index = 0;
let last_index;

let image_position;
let disable_other_button = false;

let navigateRight = false;
let navigateLeft = false;

let buttonUsed;
let buttonState = true;

let count = 0;
let value = false;
let value_index;

let j = 0;
function fader(multiplier = 1){
setTimeout(() =>{

if(j < 10) {
animating = true;
j += 0.5;
fader(j);
}}, multiplier * multiplier * (multiplier / 6));}

for(let i = 0; i < gallery_images.length; i++) {
gallery_images[i].addEventListener('click', gallery_select00);
gallery_images[i].id = i;}

function mouse_used(){ 
buttonUsed = false;}

function button_used_left(){ 
buttonUsed = true;
navigate_left();}

function button_used_right(){ 
buttonUsed = true;
navigate_right();}

let last_image_index;
let first_image_index = 0;
let initializer = false;

function gallery_select00(e){
mouse_used();
last_image_index = first_image_index;
first_image_index = e.target.id;

if(first_image_index > last_image_index && first_image_index < 7 && initializer == true){
value_index = image_index;
image_index = +first_image_index;
navigateRight = true;
navigate_right();

} else if (first_image_index > last_image_index && first_image_index == 7 && initializer == true) {
navigateRight = true;
navigate_right();

if(j < 10){
customInterval00();}

fader();
function customInterval00 (){
if(j < 10) {
setTimeout(() =>{
document.getElementById(image_index).style.cssText = 
`border-radius: ${j}px`;
customInterval00();
},1);
}}}


if(initializer == false){
document.getElementById(0).style.cssText = 
`border-radius: 0px`;
initializer = true;

value_index = image_index;
image_index = +first_image_index;
navigateRight = true;
navigate_right();
}


if(first_image_index < last_image_index && first_image_index > 0){

value_index = image_index;
image_index = +first_image_index;
navigateLeft = true;
navigate_left();

} else if(first_image_index < last_image_index && first_image_index == 0){
image_index = 0;
navigateLeft = true;
navigate_left();

if(j < 10){
customInterval00();}

fader();
function customInterval00 (){
if(j < 10) {
setTimeout(() =>{
document.getElementById(image_index).style.cssText = 
`border-radius: ${j}px`;
customInterval00();
},1);
}}}};

function navigate_left(){ console.log(count);

if(buttonState !== buttonUsed) {
if(count > 0){
value = true;
console.log(value);
}} else {
value = false;
console.log(value);
};

buttonState = buttonUsed;
last_index = image_index;
count++


for(i = 0; i < gallery_images.length; i++){
gallery_images[i].style.cssText =
`border-radius: 0px;`};

if(image_index > 0 || first_image_index == 0) {

navigateLeft = true;
left_button.removeEventListener('click', navigate_left);
image_position = -858;

if(buttonUsed == true) {
image_index--;
value_index = image_index;

if(image_index !== last_index){
gallery_images[last_index].style.cssText =
`border-radius: 0px;`
dynamic_interval();}}

if (buttonUsed == false) {
dynamic_interval();};}

if(j < 10 || image_index){
customInterval00();}

fader();
function customInterval00 (){
if(j < 10 && image_index > -1) {
setTimeout(() =>{
document.getElementById(image_index).style.cssText = 
`border-radius: ${j}px`;
customInterval00();
},1);
}}};

function navigate_right(){ console.log(count); // current

if(buttonState !== buttonUsed) {
if(count > 0){
value = true;
console.log(value);
}} else {
value = false;
console.log(value);
};

buttonState = buttonUsed;
last_index = image_index;
count++


for(i = 0; i < gallery_images.length; i++){
gallery_images[i].style.cssText =
`border-radius: 0px;`};

if(image_index < 7 || first_image_index == 7) {

navigateRight = true;
right_button.removeEventListener('click', navigate_right);
image_position = 858;

if(buttonUsed == true) {
image_index++;
value_index = image_index;

if(image_index !== last_index){
gallery_images[last_index].style.cssText =
`border-radius: 0px;`
dynamic_interval();}}

if (buttonUsed == false) {
dynamic_interval();};}

if(j < 10){
customInterval00();}

fader();
function customInterval00 (){
if(j < 10 && image_index < 8) {
setTimeout(() =>{
document.getElementById(image_index).style.cssText = 
`border-radius: ${j}px`;
customInterval00();
},1);
}}};

(function(){
gallery_images[0].style.cssText =
`border-radius: 10px;`

image_body.style.cssText = `background-image: url("${gallery_images[0].src}"), url("${gallery_images[image_index].src}");`
})();

function run_animation(){
switch(image_index) { 
case 0:
if(navigateRight == true && buttonUsed == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index -1].src}"), url("${gallery_images[image_index].src}");`
} else if(navigateRight == true && buttonUsed == false && value == true){
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[value_index].src}"), url("${gallery_images[image_index].src}");`}
else if(navigateRight == true && buttonUsed == false && value == false){
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[last_image_index].src}"), url("${gallery_images[image_index].src}");`}

if(navigateLeft == true && buttonUsed == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index +1].src}"), url("${gallery_images[image_index].src}");`
} else if(navigateLeft == true && buttonUsed == false && value == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[value_index].src}"), url("${gallery_images[image_index].src}");`}
else if(navigateLeft == true && buttonUsed == false && value == false) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[last_image_index].src}"), url("${gallery_images[image_index].src}");`}
break;

case 1:
if(navigateRight == true && buttonUsed == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index -1].src}"), url("${gallery_images[image_index].src}");`
} else if(navigateRight == true && buttonUsed == false && value == true){
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[value_index].src}"), url("${gallery_images[image_index].src}");`}
else if(navigateRight == true && buttonUsed == false && value == false){
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[last_image_index].src}"), url("${gallery_images[image_index].src}");`}

if(navigateLeft == true && buttonUsed == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index +1].src}"), url("${gallery_images[image_index].src}");`
} else if(navigateLeft == true && buttonUsed == false && value == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[value_index].src}"), url("${gallery_images[image_index].src}");`}
else if(navigateLeft == true && buttonUsed == false && value == false) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[last_image_index].src}"), url("${gallery_images[image_index].src}");`}
break;

case 2:
if(navigateRight == true && buttonUsed == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index -1].src}"), url("${gallery_images[image_index].src}");`
} else if(navigateRight == true && buttonUsed == false && value == true){
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[value_index].src}"), url("${gallery_images[image_index].src}");`}
else if(navigateRight == true && buttonUsed == false && value == false){
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[last_image_index].src}"), url("${gallery_images[image_index].src}");`}

if(navigateLeft == true && buttonUsed == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index +1].src}"), url("${gallery_images[image_index].src}");`
} else if(navigateLeft == true && buttonUsed == false && value == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[value_index].src}"), url("${gallery_images[image_index].src}");`}
else if(navigateLeft == true && buttonUsed == false && value == false) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[last_image_index].src}"), url("${gallery_images[image_index].src}");`}
break;

case 3:
if(navigateRight == true && buttonUsed == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index -1].src}"), url("${gallery_images[image_index].src}");`
} else if(navigateRight == true && buttonUsed == false && value == true){
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[value_index].src}"), url("${gallery_images[image_index].src}");`}
else if(navigateRight == true && buttonUsed == false && value == false){
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[last_image_index].src}"), url("${gallery_images[image_index].src}");`}

if(navigateLeft == true && buttonUsed == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index +1].src}"), url("${gallery_images[image_index].src}");`
} else if(navigateLeft == true && buttonUsed == false && value == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[value_index].src}"), url("${gallery_images[image_index].src}");`}
else if(navigateLeft == true && buttonUsed == false && value == false) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[last_image_index].src}"), url("${gallery_images[image_index].src}");`}
break;

case 4:
if(navigateRight == true && buttonUsed == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index -1].src}"), url("${gallery_images[image_index].src}");`
} else if(navigateRight == true && buttonUsed == false && value == true){
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[value_index].src}"), url("${gallery_images[image_index].src}");`}
else if(navigateRight == true && buttonUsed == false && value == false){
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[last_image_index].src}"), url("${gallery_images[image_index].src}");`}

if(navigateLeft == true && buttonUsed == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index +1].src}"), url("${gallery_images[image_index].src}");`
} else if(navigateLeft == true && buttonUsed == false && value == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[value_index].src}"), url("${gallery_images[image_index].src}");`}
else if(navigateLeft == true && buttonUsed == false && value == false) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[last_image_index].src}"), url("${gallery_images[image_index].src}");`}
break;

case 5:
if(navigateRight == true && buttonUsed == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index -1].src}"), url("${gallery_images[image_index].src}");`
} else if(navigateRight == true && buttonUsed == false && value == true){
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[value_index].src}"), url("${gallery_images[image_index].src}");`}
else if(navigateRight == true && buttonUsed == false && value == false){
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[last_image_index].src}"), url("${gallery_images[image_index].src}");`}

if(navigateLeft == true && buttonUsed == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index +1].src}"), url("${gallery_images[image_index].src}");`
} else if(navigateLeft == true && buttonUsed == false && value == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[value_index].src}"), url("${gallery_images[image_index].src}");`}
else if(navigateLeft == true && buttonUsed == false && value == false) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[last_image_index].src}"), url("${gallery_images[image_index].src}");`}
break;

case 6:
if(navigateRight == true && buttonUsed == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index -1].src}"), url("${gallery_images[image_index].src}");`
} else if(navigateRight == true && buttonUsed == false && value == true){
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[value_index].src}"), url("${gallery_images[image_index].src}");`}
else if(navigateRight == true && buttonUsed == false && value == false){
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[last_image_index].src}"), url("${gallery_images[image_index].src}");`}

if(navigateLeft == true && buttonUsed == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index +1].src}"), url("${gallery_images[image_index].src}");`
} else if(navigateLeft == true && buttonUsed == false && value == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[value_index].src}"), url("${gallery_images[image_index].src}");`}
else if(navigateLeft == true && buttonUsed == false && value == false) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[last_image_index].src}"), url("${gallery_images[image_index].src}");`}
break;

case 7:
if(navigateRight == true && buttonUsed == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index -1].src}"), url("${gallery_images[image_index].src}");`
} else if(navigateRight == true && buttonUsed == false && value == true){
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[value_index].src}"), url("${gallery_images[image_index].src}");`}
else if(navigateRight == true && buttonUsed == false && value == false){
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[last_image_index].src}"), url("${gallery_images[image_index].src}");`}

if(navigateLeft == true && buttonUsed == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index +1].src}"), url("${gallery_images[image_index].src}");`
} else if(navigateLeft == true && buttonUsed == false && value == true) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[value_index].src}"), url("${gallery_images[image_index].src}");`}
else if(navigateLeft == true && buttonUsed == false && value == false) {
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${image_position + i * 2}px ${0}px;
background-image: url("${gallery_images[last_image_index].src}"), url("${gallery_images[image_index].src}");`}
break;

// default:
}};

function dynamic_interval(){
setTimeout(() =>{
if(i < 429 && i > -430) {

disable_other_button = true;
dynamic_interval(i);
run_animation();

if(navigateLeft == true) {
i += 1.5;}

if(navigateRight == true) {
i -= 1.5;}

left_button.removeEventListener('click', button_used_left);
right_button.removeEventListener('click', button_used_right);
for(let i = 0; i < gallery_images.length; i++) {
gallery_images[i].removeEventListener('click', gallery_select00);}

} else if(i <= 1 - image_position / 2) {
i = 1;
j = 0;

disable_other_button = false;
navigateLeft = false;
navigateRight = false;

if(image_index > 0) { left_button.addEventListener('click', button_used_left);}
if(image_index < 7) { right_button.addEventListener('click', button_used_right);}

for(let i = 0; i < gallery_images.length; i++) {
gallery_images[i].addEventListener('click', gallery_select00);}

}}, i * (i / 16000));}

// console.log(`image_index: ${image_index} last_index: ${last_index} first_image_index: ${first_image_index} last_image_index: ${last_image_index}`);
