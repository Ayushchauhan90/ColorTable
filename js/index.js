
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

var cells = document.querySelectorAll("#tablebody td");
cells.forEach(function(cell) {
    cell.addEventListener("click", handleClick);
});




document.addEventListener("DOMContentLoaded", function() {
    var colors = ["red", "blue", "brown", "yellow","pink","orange","purple","green","maroon","gold","indigo","magenta","aqua","violet","cyan","lime","darkgreen","coral","olive","beige","bisque","blanchedalmond","burlywood","charteuse","chocolate","cornsilk"];
    var currentIndex = -1;

    function changeColor(cell) {
        var color = colors[currentIndex];
        if (color) {
            cell.style.backgroundColor = color;
        } else {
            cell.style.backgroundColor = "";
        }
    }

function handleClick(event) {
var cell = event.target;
var previousCell = document.querySelector(".colored");

// Remove the color from the previously colored cell (if any)
if (previousCell) {
previousCell.style.backgroundColor = "";
previousCell.classList.remove("colored");
}

// Add color to the clicked cell
currentIndex = (currentIndex + 1) % colors.length;
changeColor(cell);
cell.classList.add("colored");
}

    var cells = document.querySelectorAll("#tablehead th");
    cells.forEach(function(cell) {
        cell.addEventListener("click", handleClick);
    });
    
});
setInterval(
    function () {
        var getfiled =document.getElementById("tablehead-th")
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
    //   document.body.style.backgroundColor = "#"+randomColor;
    getfiled.style.backgroundColor="#"+randomColor
    },100);