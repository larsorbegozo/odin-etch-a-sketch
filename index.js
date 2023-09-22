const gridContainer = document.querySelector('#container')
const button = document.querySelector('button')
let htmlElements = ""

createGrid(16)

// Paint the grid
const allGridDiv = document.querySelectorAll('.grid')
allGridDiv.forEach((individualDiv) => {
    individualDiv.addEventListener('mouseenter', () => {
        individualDiv.style.backgroundColor = 'blue'
    })
})

button.addEventListener('click', () => {
    resetGrid()
    
    let userChoice = parseInt(prompt("Please enter a number of squares per side:\n(max: 50)", ""))

    if(isNaN(userChoice) || userChoice > 50 || userChoice < 0) {
        alert("Enter a valid number.")
        resetGrid()
        createGrid(16)
    } else {
        resetGrid()
        createGrid(userChoice)
    }
    
    // Paint the grid
    const allGridDiv = document.querySelectorAll('.grid')
    allGridDiv.forEach((individualDiv) => {
    individualDiv.addEventListener('mouseenter', () => {
        individualDiv.style.backgroundColor = 'blue'
        })
    })
})

function createGrid(x) {
    for(let rows = 1; rows <= x; rows++) {
        for(let column = 1; column <= x; column++) {
            let size = 960/x
            htmlElements += `<div class="grid" style="width: ${size-2}px; height:${size-2}px;"></div>`
            gridContainer.innerHTML = htmlElements
        }
    }
}

function resetGrid() {
    htmlElements = ""
    gridContainer.innerHTML = htmlElements
}