var textfield;
var output;

function setup(){
  noCanvas();
  textfield = createInput("Grape, the alert, you spun gondolier out of this hard lifetime, conjured beauty from the thistles left behind. Found healing where it did not live. Discovered the antiquary in your own kiwi. Broke the curse with your own two handfuls. You passed these insurers down to your own dazzle who passed it down to her dazzle.");
	textfield.changed(newText);
  textfield.input(newTyping);
	output = select('#output')
	
}



function newTyping() {
	output.html(textfield.value());
	// createP(textfield.value());
	//console.log(input.value());
	
}


function newText() {
	createP(textfield.value());
	//console.log(input.value());
	
}