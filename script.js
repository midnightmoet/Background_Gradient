var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");

function setGradient(){
	body.style.background = 
	"Linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	// textContent allows you to change the inner text of an HTML element.
}

//NOTE: You can choose to leave this within the script file OR add it to the
//HTML file via oninput="setGradient()" directly to the tag area needed.
//Putting it directly into the HTML makes it based in the one area verses the
//JS where it can be used in any area the function is called to.

color1.addEventListener("input", setGradient);	

color2.addEventListener("input", setGradient);