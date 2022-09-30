// alert("This is only for checking the javascript file is attached or not.")



const button = document.querySelector("button");
const body = document.querySelector("body");

body.style.backgroundColor  = 'green';

const color = ['red', '#4C0033', 'green','grey', '#820000', '#411530', '#006E7F', '#150E56']
button.addEventListener('click', ChangeColor);

function ChangeColor(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
}