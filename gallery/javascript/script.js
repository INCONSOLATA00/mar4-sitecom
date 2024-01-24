const gallery_images = document.querySelectorAll('img');
const image_body = document.querySelector('main > div');


let i = 0;
let image_index = 0;
let last_index = image_index;


gallery_images[image_index].style.cssText =
`border-radius: 10px;`

image_body.style.cssText = `background-image: url("${gallery_images[0].src}");`

    // -----------------------------------

function navigate_right(){
if(image_index > -1 && image_index < 7) {

image_index += 1;
dynamic_interval();

gallery_images[image_index].style.cssText =
`border-radius: 10px;`
gallery_images[image_index - 1].style.cssText =
`border-radius: 0px;`
}};

if(image_index > 0 && image_index < 9) {
    
image_index -= 1;
dynamic_interval();

gallery_images[image_index].style.cssText =
`border-radius: 10px;`
gallery_images[image_index + 1].style.cssText =
`border-radius: 0px;`
};

    // -----------------------------------

function run_animation(){
if(image_index == 1) {

image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${858 + i * 2}px ${0}px;
background-image: url("${gallery_images[0].src}"), url("${gallery_images[image_index].src}");`
last_index = image_index;
};

    //

if(image_index > last_index && image_index % 2 == 0) { console.log('runs');

image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${858 + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index].src}"), url("${gallery_images[image_index + 1].src}");`
last_index = image_index;
}

    //

if (image_index > last_index && image_index % 2 !== 0) {

image_body.style.cssText = `background-position: ${i * 2}px ${0}px, ${858 + i * 2}px ${0}px;
background-image: url("${gallery_images[image_index].src}"), url("${gallery_images[image_index + 1].src}");`
last_index = image_index;
}
};

    // -----------------------------------

function dynamic_interval(multiplier = 1){
setTimeout(()=>{
if(i < 429 && i > -429) {

dynamic_interval(i);
run_animation();
i -= 2;

// } else if(i <= -428) {

console.log(i);
}}, multiplier * (multiplier / 8000));}



