const gallery_images = document.querySelectorAll('img');
const image_body = document.querySelector('main > div');


let i = 0;
let image_index = 0;


gallery_images[image_index].style.cssText =
`border-radius: 10px;`

image_body.style.cssText = `background-image: url("${gallery_images[0].src}");`

function navigate_right(){ 
if(image_index > -1 && image_index < 7) {

image_index += 1;
dynamic_interval();

gallery_images[image_index].style.cssText =
`border-radius: 10px;`
gallery_images[image_index - 1].style.cssText =
`border-radius: 0px;`
}
};  // -----------------------------------

function navigate_left(){ 
if(image_index > 0 && image_index < 9) {
    
image_index -= 1;
dynamic_interval();

gallery_images[image_index].style.cssText =
`border-radius: 10px;`
gallery_images[image_index + 1].style.cssText =
`border-radius: 0px;`
}
};

const end_exe00 = setInterval(()=>{
    console.log('running00');
    image_body.style.cssText = `background-position: ${i * 2}px ${0}px;
    background-image: url("${gallery_images[image_index].src}");
    `
    },10); // continue to update the location for a fixed period of time*

const end_exe01 = setInterval(()=>{
    console.log('running01');
    image_body.style.cssText = `background-position: ${i * 2}px ${0}px;
    background-image: url("${gallery_images[image_index].src}");`
    },10); // continue to update the location for a fixed period of time*

function dynamic_interval(multiplier = 1){
setTimeout(()=>{

if(i < 429 && i > -429) {
i -= 2;
dynamic_interval(i);

} else if(i <= -428) {
console.log('executed')

clearInterval(end_exe00);
clearInterval(end_exe01);

}
}, multiplier * (multiplier / 8000));}

// recursion re-initializes interval***


