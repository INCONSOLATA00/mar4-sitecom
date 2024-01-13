const also_background_image = document.querySelector('.also-background-image')
const background_image =  document.querySelector('.background-image');


let x = 0;
let y = 0;


(function() {

function recursion00() {

background_image.style.cssText =
`background-position: ${(-4000 + x) / 10}px ${(-7700 + y) / 10}px;`

also_background_image.style.cssText =
`background-position: ${(-2000 + x) / 10}px ${(-8700 + y) / 10}px;`

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
`background-position: ${(-4000 + x) / 10}px ${(-7700 + y) / 10}px;`
also_background_image.style.cssText =
`background-position: ${(-2000 + x) / 10}px ${(-8700 + y) / 10}px;`
    
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