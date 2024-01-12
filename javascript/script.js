const also_background_image = document.querySelector('.also-background-image')
const background_image =  document.querySelector('.background-image');


let x = 0;
let y = 0;


(function() {

function recursion00() {

background_image.style.cssText =
`background-position: ${x / 70}% ${y / 170}%;`

also_background_image.style.cssText =
`background-position: ${x / 170}% ${y / 170}%;`

setTimeout(() =>{

if(x < 2000) {
x += 1;
recursion00();
} else if(x == 2000) {
alsoRecursion00();
}

;}, 10)
}

recursion00();

function alsoRecursion00() {

background_image.style.cssText =
`background-position: ${x / 170}% ${y / 170}%;`

also_background_image.style.cssText =
`background-position: ${x / 170}% ${y / 170}%;`
    
setTimeout(() =>{
    
if(x > 0) {
x -= 1;
alsoRecursion00();
} else if(x == 0) {
x = 0;
recursion00();
}
    
;}, 10)
}

})();

// ------------------------- delay final invocation call for offset / see random

(function() {

function recursion01() {
    
setTimeout(() =>{
    
if(y < 1000) {
y += 1;
recursion01();
} else if(y == 1000) {
alsoRecursion01();
}
    
;}, 10)
}
    
recursion01();
    
function alsoRecursion01() {
        
setTimeout(() =>{
        
if(y > 0) {
y -= 1;
alsoRecursion01();
} else if(y == 0) {
y = 0;
recursion01();
}
        
;}, 10)
}
    
})();