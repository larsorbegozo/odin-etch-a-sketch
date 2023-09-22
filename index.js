const gridContainer = document.querySelector('#grid-container')
const newGrid = document.querySelector('#new-grid')
const colorPicker = document.querySelector('#color-picker')
let currentColor = '#0000FF'
let htmlElements = ""

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
createGrid(16)

// Paint the grid
const allGridDiv = document.querySelectorAll('.grid')
allGridDiv.forEach((individualDiv) => {
    individualDiv.addEventListener('mouseover', changeColor)
    individualDiv.addEventListener('mousedown', changeColor)
})

newGrid.addEventListener('click', () => {
    resetGrid()
    
    let userChoice = parseInt(prompt("Please enter a number of squares per side:\n(max: 64)", ""))

    if(isNaN(userChoice) || userChoice > 64 || userChoice < 0) {
        alert("Enter a valid number.")
        resetGrid()
        createGrid(16)
    } else {
        resetGrid()
        createGrid(userChoice)
    }
    
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

function resetGrid() {
    htmlElements = ""
    gridContainer.innerHTML = htmlElements
}