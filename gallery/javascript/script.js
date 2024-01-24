const gallery_images = document.querySelectorAll('img');
const image_body = document.querySelector('main > div');

const left_button = document.getElementsByClassName('left')[0];
const right_button = document.getElementsByClassName('right')[0];

left_button.addEventListener('click', navigate_left);
right_button.addEventListener('click', navigate_right);

let i = 0;
let image_index = 0;
let disable_other_button = false;

gallery_images[image_index].style.cssText =
`border-radius: 10px;`

image_body.style.cssText = `background-image: url("${gallery_images[0].src}");`


function navigate_left(){ console.log(image_index);
if(image_index > 0 && image_index < 9) {
left_button.removeEventListener('click', navigate_left);
    
image_index -= 1;
dynamic_interval();

gallery_images[image_index].style.cssText =
`border-radius: 10px;`
gallery_images[image_index + 1].style.cssText =
`border-radius: 0px;`
}};


function navigate_right(){
if(image_index > -1 && image_index < 7) {
right_button.removeEventListener('click', navigate_right);
    
image_index += 1;
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
case 1:
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${858 + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index - 1].src}"), url("${gallery_images[image_index].src}");`
last_index = image_index;
break;

case 2:
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${858 + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index - 1].src}"), url("${gallery_images[image_index].src}");`
last_index = image_index;
break;

case 3:
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${858 + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index - 1].src}"), url("${gallery_images[image_index].src}");`
last_index = image_index;
break;

case 4:
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${858 + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index - 1].src}"), url("${gallery_images[image_index].src}");`
last_index = image_index;
break;

case 5:
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${858 + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index - 1].src}"), url("${gallery_images[image_index].src}");`
last_index = image_index;
break;

case 6:
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${858 + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index - 1].src}"), url("${gallery_images[image_index].src}");`
last_index = image_index;
break;

case 7:
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${858 + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index - 1].src}"), url("${gallery_images[image_index].src}");`
last_index = image_index;
break;

default:
}};


function dynamic_interval(multiplier = 1){
setTimeout(()=>{
if(i < 429 && i > -429) {

disable_other_button = true;
dynamic_interval(i);
run_animation();
i -= 1;

left_button.removeEventListener('click', navigate_left);
right_button.removeEventListener('click', navigate_right);
} else if(i <= -428) {

i = 0;
disable_other_button = false;
left_button.addEventListener('click', navigate_left);
right_button.addEventListener('click', navigate_right);
}}, multiplier * (multiplier / 16000));}



