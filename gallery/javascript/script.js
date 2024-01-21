const gallery_images = document.querySelectorAll('img');

let image_index = 0;

function gallery_right(){ 
let last_index = image_index;
    
if(image_index > -1 && image_index < 8) {
    
image_index += 1;
gallery_images[image_index - 1].style.cssText =
`border-radius: 10px;`

if(last_index -2 >= -1) {
gallery_images[last_index - 1].style.cssText =
`border-radius: 0px;`
}
} else if (image_index == 7){
image_index = 7;
}};

function gallery_left(){
let last_index = image_index;
console.log(`last index == ${last_index}`);

if(image_index > -1 && image_index <= 8) {
console.log('reached');

image_index -= 1;
gallery_images[image_index - 1].style.cssText =
`border-radius: 10px;`

if(last_index +2 <= 10) {
gallery_images[last_index - 1].style.cssText =
`border-radius: 0px;`
}
} else if (image_index == 0){
image_index = 0;
}            
}