const gallery_images = document.querySelectorAll('img');

let image_index = 0;
gallery_images[image_index].style.cssText =
`border-radius: 10px;`

function navigate_right(){ 

if(image_index > -1 && image_index < 7) {

image_index += 1;
console.log(image_index);

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
    
gallery_images[image_index].style.cssText =
`border-radius: 10px;`
gallery_images[image_index + 1].style.cssText =
`border-radius: 0px;`
}
};