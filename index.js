const gridContainer = document.querySelector('#container')

for(let i = 1; i <= 256; i++) {
    let gridDiv = document.createElement('div')
    gridDiv.classList.add('grid')
    gridDiv.textContent = `${i}`
    gridContainer.appendChild(gridDiv)
}