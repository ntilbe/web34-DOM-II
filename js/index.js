// Your code goes here

// Create 10 unique event listeners. Make the site more interactive.

// save the navLinks in a variable
const navLinks = document.querySelectorAll('.nav-link')
// create preventDefault script
const preventD = e => e.preventDefault(); 
// use forEach to add event listener to navLinks
navLinks.forEach(link => link.addEventListener('click', preventD))


// 1
// click -- on nav-link -- change  nav link text
const changeLink = e => e.target.textContent = 'changed';
navLinks.forEach(link => link.addEventListener('click', changeLink)); 
//navLinks.forEach(link => link.removeEventListener('click', changeLink)); 

// 2
// mouseover -- on header -- change header background 
const header = document.querySelector('header')
const changeBC = () => (header.style.backgroundColor = "#D1826F");
header.addEventListener('mouseover', changeBC);

// 3
// mouseout -- on header -- change header background back 
const revertBC = () => {
    if (document.fullscreen) {
        header.style.backgroundColor = "grey";
    } else header.style.backgroundColor = 'yellow';
}
header.addEventListener('mouseout', revertBC);

// 4
// dblclick -- on btn-- alert 'email has been sent'
const btns = document.querySelectorAll('.btn'); 
const alertEmail = (e) => {
    alert('check your email for details on signing up!')
    e.stopPropagation(); 
}
btns.forEach( btn => btn.addEventListener('dblclick', alertEmail));

// 5
// ANOTHER SIMILAR EVENT -- dblClick anywhere -- enters full screen --except btn ...see stopProp() above

let doc = document.documentElement; 
document.body.addEventListener('dblclick', function openFullscreen() {
    if (document.fullscreen) {
        document.exitFullscreen(); 
    } else if (doc.requestFullscreen) {
        doc.requestFullscreen();
    } else if (doc.mozRequestFullScreen) {
        doc.mozRequestFullScreen(); // Firefox
    } else if (doc.webkitRequestFullscreen) {
        doc.webkitRequestFullscreen(); ///* Chrome, Safari and Opera */
    } else if (doc.msRequestFullscreen) {
        doc.msRequestFullscreen();  // IE, Edge
    } 
})

// 6
// fullscreenchange -- toggles 'dark mode' themes
document.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        header.style.backgroundColor = 'grey'; 
    } else {
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
                header.style.backgroundColor = "grey"; 
    }
});

// 7
// keydown -- alert if 3 is pressed on keyboard
document.addEventListener('keydown', e => {
    if (e.key == 3) {
        alert(`3 is my favorite number`)
    }
})

// 8
// resize -- make intro img opacity 0.5 for 1 second
const introImg = document.querySelector('.intro img')
window.addEventListener('resize', () => {
    introImg.style.opacity = 0.5; 
    setTimeout(function () {
        introImg.style.opacity = 1; 
    }, 1000); 
})

// 9
// dragstart -- create red border around item when dragging 
document.addEventListener("dragstart", (e) => e.target.style.border = '5px solid red');

// 10
// dragend -- remove border when done dragging
document.addEventListener("dragend", (e) => e.target.style.border = "none");

