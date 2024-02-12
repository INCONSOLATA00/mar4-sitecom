const form = document.querySelector('.sticky-wrapper'); // find way to change variable in other javascript document***

function setVisibilityTrue() {
visibility = 'visible';
form.style.visibility = visibility;}

const gallery_images = document.querySelectorAll('img');
const image_body = document.querySelector('main > div');
const image_info = document.querySelector('.image-info-wrapper + div > p')

const left_button = document.getElementsByClassName('left')[0];
const right_button = document.getElementsByClassName('right')[0];

const gallery_text = [

{ text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit elit eros, suscipit vestibulum libero dictum ut.(1)" },
{ text: "Duis lobortis sem nec sem bibendum, a sollicitudin nulla pretium. Mauris in orci eget neque posuere fermentum. Suspendisse ultrices posuere dignissim. Sed id ex risus.(2)" },
{ text: "Morbi egestas ex et urna pellentesque, nec euismod tellus pellentesque. Integer venenatis libero vel diam sodales, sit amet pretium massa pretium. Duis vel dui vel eros condimentum sagittis.(3)" },
{ text: "Vestibulum quis gravida lacus. Mauris euismod mattis dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.(4)" },
{ text: "Maecenas efficitur lacus vel nulla pretium, sed feugiat leo interdum.(5)" },
{ text: "Etiam consequat sem vitae orci volutpat consectetur. Vestibulum viverra eros a iaculis bibendum.(6)" },
{ text: "Curabitur rhoncus feugiat nisl, a malesuada nisi molestie sit amet. Donec tincidunt quis justo sit amet pulvinar.(7)" },
{ text: "Mauris a nisl vel urna ultricies sollicitudin. Vivamus fringilla leo at odio lobortis, a vulputate mauris lobortis. Ut accumsan justo vel dui convallis, pharetra aliquam ipsum ullamcorper.(8)" },
];

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
let value_index; // true last index*

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
image_index = 7;
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

if(first_image_index < last_image_index || first_image_index < image_index && first_image_index > 0){ // || allows conditional while value offset

value_index = image_index;
image_index = +first_image_index;
navigateLeft = true;
navigate_left();

} else if(first_image_index < last_image_index || first_image_index < image_index && first_image_index == 0){ // || allows conditional while value offset
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

function navigate_left(){

if(buttonState !== buttonUsed) {
if(count > 0){
value = true;
}} else {
value = false;
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

function navigate_right(){

if(buttonState !== buttonUsed) {
if(count > 0){
value = true;
}} else {
value = false;
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

image_info.textContent = `${gallery_text[image_index].text}`;

for(let i = 0; i < gallery_images.length; i++) {
gallery_images[i].addEventListener('click', gallery_select00);}

}}, i * (i / 16000));}

