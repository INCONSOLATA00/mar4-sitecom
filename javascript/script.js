
const listen_area = document.querySelector('.image-wrapper')
const also_background_image = document.querySelector('.also-background-image')
const background_image =  document.querySelector('.background-image');


also_background_image.style.cssText =
`background-position: ${40}% ${60}%;`

background_image.style.cssText =
`background-position: ${40}% ${60}%;`





listen_area.addEventListener('mousemove', position00);

function position00(e) {
also_background_image.style.cssText =
`background-position: ${40 - (e.offsetX *-1) / 80}% ${60 - (e.offsetY *-1)  / 80}%;`
    
background_image.style.cssText =
`background-position: ${40 - (e.offsetX *-1) / 80}% ${60 - (e.offsetY *-1)  / 80}%;`
}




