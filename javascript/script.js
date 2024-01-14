const also_background_image = document.querySelector('.also-background-image')
const background_image =  document.querySelector('.background-image');


let x = 0;
let y = 0;
let text_animation = true;

let various_text = {
['Post Construction Cleaning']: "Renovations and Construction can be messy. After the work is finished, a thorough cleaning is critical to make the work shine and the space ready for use. Our experienced professionals can help you make the most of your investment.",
['Building Maintenance & Renovations']: "We will be happy to fulfill all of your maintenance, renovation or consturction needs. From things as simple as repairing a door that doesn't close properly right down to a building a whole new space, we have the experience, skills and contacts to do it all and do it right, at a price that won't hurt your wallet.",
['Commercial Cleaning']: "Are you looking for someone to keep your office, store or building clean? We have a great staff of cleaners that are eager to keep your space looking great. Whether you need full service daily or just someone to pop in and do a few specific tasks weekly, we can help create a service plan that suits your needs.",
['Construction Deficiency Resolution']: "Have your contractors finished the project, left the job, all done but left an item or two incomplete or not quite up to your standards? Maybe an aspect of the project didn't turn out the way you expected and you want to make a change?"
};

const card = document.querySelector('#card');
console.log(various_text['Post Construction Cleaning']);

(function() {

function recursion00() {

background_image.style.cssText =
`background-position: ${(-4000 + x) / 19}px ${(-12700 + y) / 19}px;`

also_background_image.style.cssText =
`background-position: ${(-2000 + x) / 15}px ${(-12700 + y) / 15}px;`

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
`background-position: ${(-4000 + x) / 19}px ${(-12700 + y) / 19}px;`
also_background_image.style.cssText =
`background-position: ${(-2000 + x) / 15}px ${(-12700 + y) / 15}px;`
    
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