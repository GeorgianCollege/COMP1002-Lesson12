// Variable Declarations
var toggleButton = document.getElementById("menu-button");
var mainHeading = document.getElementById("main-heading");
var navBar = document.getElementById("nav-bar");
var toggleButtonIsClicked = false;

// add an event listener to the toggle button
toggleButton.addEventListener("click", toggleButtonClicked);
window.addEventListener("resize", resize);

// toggle button event handler
function toggleButtonClicked() {
	if (toggleButtonIsClicked) {
		resize();	
	} else {
		mainHeading.innerHTML = "Toggle Button was clicked";
		mainHeading.style.color = "red";
		navBar.className = navBar.className + " responsive-nav";
		toggleButtonIsClicked = true;
	}
}

function resize() {
		mainHeading.innerHTML = "Main Heading";
		mainHeading.style.color = "black";
		navBar.className = "nav-bar";
		toggleButtonIsClicked = false;
	}
    
