// Pixel Art
var color = 'pink';


// grid
for(var l =0 ; l <100; l++){
	var square = document.createElement("div");
	square.style.width = "5.1%";
	square.style.float = "left";
	square.style.border = ".1em solid gray";
	square.style.padding = "0 0 5.1% 0";
	square.classList.add("cell");
	document.body.appendChild(square);
}
// grid ended


// fillSpace is here
var fillSpace = document.createElement("br");
	fillSpace.style.clear = "left";
document.body.appendChild(fillSpace);
// fillSpace ended


// palette is here
// possibly create that new Array here?
// var newArr = [];


		// teachers version

// var colors = ["red", "orange", "yellow"];
// colors.forEach(function(color)) {
// var div = document.createElement("DIV";)
// body.appendChild(div);
//}

// div.addEventListnener("click", function() {
// color = this.style.backgroundColor;
// })
// }

		// teachers version ended

for (var m = 0; m < 2; m++) {

	var palette = document.createElement("div");
	palette.style.width = "5.1%";
	palette.style.float = "left";
	palette.style.border = ".1em solid gray";
	palette.style.padding = "0 0 5.1% 0";
	palette.classList.add("colorOptions");

// find a way to use an array here, then push all those different
// colors into that array
	if (m % 2 === 0) {
		palette.style.backgroundColor = "red";
	}
	else {
		palette.style.backgroundColor = "purple";
	}

	// what am I doing here?
	// I am calling another variable color into this conditional, 
	// so that when I click on one of the two color palettes,
	// it will turn all future clicks into the color palette chosen.
	document.body.appendChild(palette);
}

// palette ended




// setting the variable grid to grab all the cells
var grid = document.querySelectorAll(".cell");

// adding Event Listener to the grid
for(var l = 0 ; l < 100; l++){
	grid[l].addEventListener("click", function() {
		this.style.backgroundColor = color;
	});
}
// Grid Event Listener ended



// adding Event Listener to my palette
var palette = document.querySelectorAll(".colorOptions");
console.log(palette);
for (var n = 0; n < 2; n++) {
	palette[n].addEventListener("click", function() {
		color = this.style.backgroundColor;
	});
}
// Event Listener for Palette ended





