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
console.log(gallery_images[image_index].src);
// image_body.style.cssText = `background-image: url("${gallery_images[image_index].src}");`

dynamic_interval();

//
gallery_images[image_index].style.cssText =
`border-radius: 10px;`
gallery_images[image_index - 1].style.cssText =
`border-radius: 0px;`
}
};  // -----------------------------------

function navigate_left(){ 
if(image_index > 0 && image_index < 9) {
    
image_index -= 1;
console.log(gallery_images[image_index].src);
// image_body.style.cssText = `background-image: url("${gallery_images[image_index].src}");`

dynamic_interval();

//    
gallery_images[image_index].style.cssText =
`border-radius: 10px;`
gallery_images[image_index + 1].style.cssText =
`border-radius: 0px;`
}
};

    // ----------------------------------- ***THE "cssText" represents everything, if something decalred in javascript is not changed the next time you 
    // edit the cssText values, it will remove the old instantiation***

function dynamic_interval(multiplier = 1){
setTimeout(()=>{

if(i < 10) {
i += 1;

console.log(i);
dynamic_interval(i);
image_body.style.cssText = `background-position: ${i}px ${0}px;` // || multiplier 
}


}, multiplier * multiplier * multiplier);
}


