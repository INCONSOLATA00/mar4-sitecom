const gallery_images = document.querySelectorAll('img');
const image_body = document.querySelector('main > div');

const end_exe = setInterval(_also, 10);

let i = 0;
let image_index = 0;
let last_index = image_index;

gallery_images[image_index].style.cssText =
`border-radius: 10px;`

image_body.style.cssText = `background-image: url("${gallery_images[0].src}");`

    // -----------------------------------

function navigate_right(){
console.log(`image index ${image_index}`);
console.log(`last index ${last_index}`);

if(image_index > -1 && image_index < 7) {

image_index += 1;
dynamic_interval();
end_exe();

gallery_images[image_index].style.cssText =
`border-radius: 10px;`
gallery_images[image_index - 1].style.cssText =
`border-radius: 0px;`
}};


function navigate_left(){ 
if(image_index > 0 && image_index < 9) {
    
image_index -= 1;
dynamic_interval();
end_exe();

gallery_images[image_index].style.cssText =
`border-radius: 10px;`
gallery_images[image_index + 1].style.cssText =
`border-radius: 0px;`
}
};

    // -----------------------------------

if(image_index == 1) {
function _also() {

(function(){
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${858 + i * 2}px ${0}px;
background-image: url("${gallery_images[0].src}"), url("${gallery_images[image_index].src}");` // initializer***
last_index = image_index;
})();
}};

    
if(image_index > last_index && image_index % 2 == 0) {
function _also() {

console.log('runs');
console.log(image_index);
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${858 + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index].src}"), url("${gallery_images[image_index + 1].src}");`
last_index = image_index;
}};

if (image_index > last_index && image_index % 2 !== 0) {
function _also() {

console.log('also runs');
console.log(image_index);
image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${858 + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index].src}"), url("${gallery_images[image_index + 1].src}");`
last_index = image_index;
}};

    // -----------------------------------

function dynamic_interval(multiplier = 1){
setTimeout(()=>{

if(i < 429 && i > -429) {
i -= 2;
dynamic_interval(i);

} else if(i <= -428) {
clearInterval(end_exe);
}}, multiplier * (multiplier / 8000));}



