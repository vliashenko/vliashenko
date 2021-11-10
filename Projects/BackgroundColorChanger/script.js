'use strict'

let button = document.querySelector('.bttn');
let select = document.querySelector('#wq');
let container = document.querySelector('.container');
let colors = ['#f56969', '#d6ae2a','#8ece3b','#0ac9d6', '#3437ec'];


if(select.value == 1){
    button.addEventListener('click', ()=> {
    setColor(container)
})
}


select.addEventListener("change", ()=> {
    select = document.querySelector('#wq').value

if(select == 1){
    button.addEventListener('click', ()=> {
    setColor(container)
    })
} 
if (select == 2){
    button.addEventListener('click', ()=> {
        setTwoColors(container)
    })
}
if (select == 3){
    button.addEventListener('click', ()=> {
        setThreeColors(container)
    })
}

})


function getRandomColor() {
    const index =  Math.floor(Math.random() * colors.length)
    return colors[index]
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
}

function setTwoColors(element) {
    const color = getRandomColor()
    const ncolor = getRandomColor()
    element.style.background = `linear-gradient(${color}, ${ncolor})`;
}

function setThreeColors(element) {
    const color = getRandomColor()
    const ncolor = getRandomColor()
    const vcolor = getRandomColor()
    element.style.background = `linear-gradient(${color}, ${ncolor},${vcolor})`;
}

