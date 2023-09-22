const gridContainer = document.querySelector('#grid-container')
const newGrid = document.querySelector('#new-grid')
const colorPicker = document.querySelector('#color-picker')
const eraser = document.querySelector('#eraser')
const clear = document.querySelector('#clear')
const DEFAULT_COLOR = '#0000FF'
const DEFAULT_GRID_NUMBER = 16

let currentColor = DEFAULT_COLOR
let htmlElements = ""
let userChoice = DEFAULT_GRID_NUMBER

// Mouse behavior
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function setCurrentColor(newColor) {
    currentColor = newColor
}

colorPicker.oninput = (e) => setCurrentColor(e.target.value)

function changeColor(e) {
    if(e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = currentColor
}

// First Grid
createGrid(DEFAULT_GRID_NUMBER)

// Paint the grid
const allGridDiv = document.querySelectorAll('.grid')
allGridDiv.forEach((individualDiv) => {
    individualDiv.addEventListener('mouseover', changeColor)
    individualDiv.addEventListener('mousedown', changeColor)
})

newGrid.addEventListener('click', () => {
    clearGrid()
    
    userChoice = parseInt(prompt("Please enter a number of squares per side:\n(max: 24)", ""))

    if(isNaN(userChoice) || userChoice > 24 || userChoice < 0) {
        alert("Enter a valid number.")
        clearGrid()
        createGrid(DEFAULT_GRID_NUMBER)
    } else {
        clearGrid()
        createGrid(userChoice)
    }
    
    // Paint the grid even after the 'NEW GRID' button was pressed
    const allGridDiv = document.querySelectorAll('.grid')
    allGridDiv.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', changeColor)
        individualDiv.addEventListener('mousedown', changeColor)
    })
})

eraser.addEventListener('click', () => {
    currentColor = '#FAEDDD'
})

clear.addEventListener('click', () => {
    resetGrid()
    // Paint the grid even after the 'NEW GRID' button was pressed
    const allGridDiv = document.querySelectorAll('.grid')
    allGridDiv.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', changeColor)
        individualDiv.addEventListener('mousedown', changeColor)
    })
})

function createGrid(x) {
    for(let rows = 1; rows <= x*x; rows++) {
        let size = 720/x
        htmlElements += `<div class="grid" style="width: ${size}px; height:${size}px;"></div>`
        gridContainer.innerHTML = htmlElements
    }
}

function clearGrid() {
    htmlElements = ""
    gridContainer.innerHTML = htmlElements
}

function resetGrid() {
    clearGrid()
    createGrid(userChoice)
}