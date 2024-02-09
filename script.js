let isLeftClick = false;
let isTouching = false; 

function resetGame() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
        console.log("reseted");
    }
}

let resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", function() {
    resetGame();
});

let cellColor = "black";
let gridPixels = 600;

function cellCreation(number) {
    for (let i = 0; i < number; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);
        for (let n = 0; n < number; n++) {
            let cellSize = gridPixels / number;
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            row.appendChild(cell);

           
            cell.addEventListener('touchstart', function(event) {
                event.preventDefault(); 
                isTouching = true;
                cell.style.backgroundColor = cellColor;
            });

            cell.addEventListener('touchmove', function(event) {
                event.preventDefault(); 
                if (isTouching) {
                    var touch = event.touches[0];
                    var element = document.elementFromPoint(touch.clientX, touch.clientY);
                    if (element && element.classList.contains('cell')) {
                        element.style.backgroundColor = cellColor;
                    }
                }
            });

            cell.addEventListener('touchend', function(event) {
                event.preventDefault(); 
                isTouching = false;
            });

            
            cell.addEventListener('mousedown', function(event) {
                if (event.button === 0) { 
                    isLeftClick = true;
                    cell.style.backgroundColor = cellColor;
                }
            });

            cell.addEventListener('mouseup', function(event) {
                if (event.button === 0) { 
                    isLeftClick = false;
                }
            });

            cell.addEventListener('mousemove', function(event) {
                if (isLeftClick) {
                    cell.style.backgroundColor = cellColor;
                }
            });
        }
    }
}

let smallBtn = document.querySelector("#small");
smallBtn.addEventListener("click", function() {
    resetGame();
    cellCreation(8);
});

let mediumBtn = document.querySelector("#medium");
mediumBtn.addEventListener("click", function() {
    resetGame();
    cellCreation(16);
});

let bigBtn = document.querySelector("#big");
bigBtn.addEventListener("click", function() {
    resetGame();
    cellCreation(32);
});

let blackBtn = document.querySelector("#black");
blackBtn.addEventListener("click", function(){
    cellColor = "black";
});

let redBtn = document.querySelector("#red");
redBtn.addEventListener("click", function(){
    cellColor = "red";
});

let blueBtn = document.querySelector("#blue");
blueBtn.addEventListener("click", function(){
    cellColor = "blue";
});

let yellowBtn = document.querySelector("#yellow");
yellowBtn.addEventListener("click", function(){
    cellColor = "yellow";
});

let rainbowBtn = document.querySelector("#rainbow");
rainbowBtn.addEventListener("click", function(){
    let multiColors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "cyan", "magenta", 
    "gold", "lime", "teal", "indigo", "lavender"];
    let randomColors = Math.floor(Math.random() * multiColors.length);
    cellColor =  multiColors[randomColors];
});

if (window.matchMedia("(max-width: 800px)").matches) {
    gridPixels = 200;
}
