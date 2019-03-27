//christine whitlock//

let grid = document.getElementById("grid");
let colored = false;
let size = 16;
let colorMode = document.querySelector("#colorMode");

function flip(){
        colored = !colored;
}

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    resetGrid();
    createGrid(getGridSize());
});

function resetGrid() {
	while (grid.firstChild) grid.removeChild(grid.firstChild);
}

function getGridSize(){
    size = prompt("Please Enter a Grid Size");
    if(size > 64){
        alert("That's too big. Going back to the default size!");
        createGrid(16);
    } else{
        return size;
    }
}

function createGrid(size) {
    for(let i = 1; i <= size * size; i++){
            let grids = document.createElement('div');
            grids.classList.add("grids");
            grids.style.width = 100/size + "%";
            grids.style.height = 100/size + "%";
            grid.appendChild(grids);
    }
    coloredGrid();
}

function coloredGrid(){
    let grids = document.querySelectorAll(".grids");
    let overGrids = function(e) {
        if(colored == true){
            let r = Math.round(Math.random() * 255);
            let g = Math.round(Math.random() * 255);
            let b = Math.round(Math.random() * 255);
            let randomColor = `rgb(${r}, ${g}, ${b})`;
            console.log(randomColor);
            e.target.style.backgroundColor = randomColor;
            colorMode.style.backgroundColor = "#fff";
            colorMode.style.color = "#1A1A1D"
            colorMode.innerHTML = "Black"
        } else{
            e.target.style.backgroundColor = "#000000";
            colorMode.innerHTML = "Random Colors";
            colorMode.style.backgroundColor = "#4c10d8";
            colorMode.style.color = "#fff";
        }
    };

    grids.forEach(grids => {
        grids.addEventListener("mouseenter", overGrids);
        grids.addEventListener("touchstart", overGrids);
    });
}

createGrid(size);