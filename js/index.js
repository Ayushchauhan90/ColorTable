
function changeColor(cell) {
    var color = cell.innerText;
    if (color) {
        cell.style.backgroundColor = color;
    } 
     else  {
        cell.style.backgroundColor = "";
    }
}

function handleClick(event) {
    var cell = event.target;
    var previousCell = document.querySelector(".colored");

    if (previousCell) {
        previousCell.style.backgroundColor = "";
        previousCell.classList.remove("colored");
    }
    changeColor(cell);
    cell.classList.add("colored");
}

var cells = document.querySelectorAll("td");
cells.forEach(function(cell) {
    cell.addEventListener("click", handleClick);
});

//git completed