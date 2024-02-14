const form = document.querySelector('.sticky-wrapper');
const form_fields00 = document.getElementsByName('name')[0];
const form_fields01 = document.getElementsByName('email')[0];
const form_fields02 = document.querySelector('textarea');

const header = document.querySelector('#header');
const header_buttons = document.querySelector('.body-layer-top > div');

let scrollValue;
let lastScrollValue;
let changeValues = false;

let l = 0;
dynamic_interval();
function dynamic_interval(multiplier = 1){
setTimeout(()=>{

if(l < 10 && changeValues == false) {
l += 0.5;
dynamic_interval(l);
console.log(l);

header.style.cssText = `padding-top: ${l}px`;
header_buttons.style.cssText = `padding-top: ${l}px`;
}

if(l > 0 && changeValues == true) {
l -= 0.5;
dynamic_interval(l);
console.log(l);

header.style.cssText = `padding-top: ${l}px`;
header_buttons.style.cssText = `padding-top: ${l}px`;
}

}, multiplier * multiplier * (multiplier / 6));}

window.addEventListener("scroll",()=>{
lastScrollValue = scrollValue;
scrollValue = this.scrollY;

// console.log(scrollY);

if(this.scrollY == 0) {
changeValues = false;
dynamic_interval();
} 

if (this.scrollY < 10 && scrollValue < lastScrollValue) {
l = 0
dynamic_interval();
}
// --------------------

if (this.scrollY > 40 && scrollValue > lastScrollValue && this.scrollY < 51) { console.log('fired');
changeValues = true;
l = 10
dynamic_interval();
}
});

let visibility = 'hidden';
function setVisibilityFalse() {
visibility = 'hidden';
form.style.visibility = visibility;

form_fields00.value = "";
form_fields01.value = "";
form_fields02.value = "";}

function setVisibilityTrue() {
visibility = 'visible';
form.style.visibility = visibility;}

const also_background_image = document.querySelector('.also-background-image');
const background_image = document.querySelector('.background-image');
const card_paragraph = document.querySelector('#card p:nth-child(2)');

cardTitle = document.querySelector('#card p:nth-child(1)');
const card = document.querySelector('#card p:nth-child(2)');

let x = 0;
let y = 0;
let i = 0;

const card_text = [
{ title: 'Post Construction Cleaning', text: "Renovations and Construction can be messy. After the work is finished, a thorough cleaning is critical to make the work shine and the space ready for use. Our experienced professionals can help you make the most of your investment." },
{ title: 'Building Maintenance & Renovations', text: "We will be happy to fulfill all of your maintenance, renovation or consturction needs. From things as simple as repairing a door that doesn't close properly right down to a building a whole new space, we have the experience, skills and contacts to do it all and do it right, at a price that won't hurt your wallet." },
{ title: 'Commercial Cleaning', text: "Are you looking for someone to keep your office, store or building clean? We have a great staff of cleaners that are eager to keep your space looking great. Whether you need full service daily or just someone to pop in and do a few specific tasks weekly, we can help create a service plan that suits your needs." },
{ title: 'Construction Deficiency Resolution', text: "Have your contractors finished the project, left the job, all done but left an item or two incomplete or not quite up to your standards? Maybe an aspect of the project didn't turn out the way you expected and you want to make a change?" }
];

let k = 10;
// dynamic_interval01(); // includes fade in (does not need initial)

function dynamic_interval01(multiplier = 1){
setTimeout(()=>{

if(k > 0) {
k -= 0.5;

dynamic_interval01(k);
card_paragraph.style.cssText = `opacity: ${k / 10}`;}

}, multiplier * multiplier * (multiplier / 6));}

// --------------------------------------------

let j = 0;
dynamic_interval00(); // includes fade in

function dynamic_interval00(multiplier = 1){
setTimeout(()=>{

if(j < 10) {
j += 0.5;

dynamic_interval00(j);
card_paragraph.style.cssText = `opacity: ${j / 10}`;
}

}, multiplier * multiplier * (multiplier / 6));}

cardTitle.textContent = card_text[i].title;
card.textContent = card_text[i].text;

(function() {
setTimeout(()=>{
dynamic_interval01();}, 4000);

function recursion02(){ // includes fade in
setTimeout(() =>{
if(i < 3) {
i += 1;

recursion02();
j = 0;
k = 10;

dynamic_interval00();
setTimeout(()=>{
dynamic_interval01();}, 4000);

cardTitle.textContent = card_text[i].title;
card.textContent = card_text[i].text;

} else if (i == 3) {
i = 0; 

recursion02();
k = 10;
j = 0;

dynamic_interval00();
setTimeout(()=>{
dynamic_interval01();}, 4000);

cardTitle.textContent = card_text[i].title;
card.textContent = card_text[i].text;
}
;}, 5000)}
recursion02();



function recursion00() {
background_image.style.cssText =
`background-position: ${(-4000 + x) / 19}px ${(-13700 + y) / 19}px;`

also_background_image.style.cssText =
`background-position: ${(-2000 + x) / 15}px ${(-13700 + y) / 15}px;`

setTimeout(() =>{
if(x < 2000) {
x += 1;
recursion00();
} else if(x == 2000) {
alsoRecursion00();}
;}, 10)}
recursion00();

function alsoRecursion00() {

background_image.style.cssText =
`background-position: ${(-4000 + x) / 19}px ${(-13700 + y) / 19}px;`
also_background_image.style.cssText =
`background-position: ${(-2000 + x) / 15}px ${(-13700 + y) / 15}px;`
setTimeout(() =>{
if(x > 0) {
x -= 1;
alsoRecursion00();
} else if(x == 0) {
x = 0;
recursion00();
}
;}, 10)}

function recursion01() {
setTimeout(() =>{
if(y < 1000) {
y += 1;
recursion01();
} else if(y == 1000) {
alsoRecursion01();
}
;}, 10)}

recursion01();
function alsoRecursion01() {
setTimeout(() =>{
if(y > 0) {
y -= 1;
alsoRecursion01();
} else if(y == 0) {
y = 0;
recursion01();}
;}, 10)}
})();