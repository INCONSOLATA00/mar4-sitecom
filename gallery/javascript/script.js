const gallery_images = document.querySelectorAll('img');
const image_body = document.querySelector('main > div')

let image_index = 0;

gallery_images[image_index].style.cssText =
`border-radius: 10px;`

image_body.style.cssText = `background-image: url("${gallery_images[0].src}");`

function navigate_right(){ 
if(image_index > -1 && image_index < 7) {

image_index += 1;
console.log(image_index);

console.log(gallery_images[image_index].src);
image_body.style.cssText = `background-image: url("${gallery_images[image_index].src}");`

gallery_images[image_index].style.cssText =
`border-radius: 10px;`
gallery_images[image_index - 1].style.cssText =
`border-radius: 0px;`
}
};

function navigate_left(){ 
if(image_index > 0 && image_index < 9) {
    
image_index -= 1;
console.log(image_index);

console.log(gallery_images[image_index].src);
image_body.style.cssText = `background-image: url("${gallery_images[image_index].src}");`
    
gallery_images[image_index].style.cssText =
`border-radius: 10px;`
gallery_images[image_index + 1].style.cssText =
`border-radius: 0px;`
}
};