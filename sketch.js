

var circle;
//Instance variables at the beginning of the code 
var score=0;
var simonArray;
var isOverOrangeRectangle;
var isOverBlueRectangle;
var isOverRedActangle;
var isOverYellowRectangle;
var sequence = [1];
var userSequence = []; 
var sequenceIndex = -1;


function setup(){
	createCanvas(windowWidth, windowHeight);
	background(0);


}

function draw(){

	fill(255,127,80);
 var orangeRectangle = rect(30, 30, 55, 55);

 fill(25,181,254);
 var blueRectangle = rect(100,30,55,55);
 fill(207,0,15);
 var redRectangle = rect(170,30,55,55);
 fill(245,171,53);
 var yellowRectangle = rect(240,30, 55,55);
fill(236,240,241)
 textSize(32);
 text("Score: " + score, 100, 30);

 //var square2 = rect(100,20,55,55);
 noStroke();
 if(mouseX >= 30 && mouseX <= 30+55 && mouseY >= 30 && mouseY <= 30 +55){
		isOverOrangeRectangle = true;

	}
	else{
		isOverOrangeRectangle = false;
	}

	 if(mouseX >= 100 && mouseX <= 100+55 && mouseY >= 30 && mouseY <= 30 +55){
		isOverBlueRectangle = true;

	}
	else{
		isOverBlueRectangle = false;
	}
	 if(mouseX >= 170 && mouseX <= 170+55 && mouseY >= 30 && mouseY <= 30 +55){
		isOverRedRectangle = true;

	}
	else{
		isOverRedRectangle = false;
	}
	 if(mouseX >= 240 && mouseX <= 240+55 && mouseY >= 30 && mouseY <= 30 +55){
		isOverYellowRectangle = true;

	}
	else{
		isOverYellowRectangle = false;
	}
	

 
}



function mousePressed(){

//check if mouse distance is inside a square
//if it is, match it with the sequence of the simon array

if(isOverOrangeRectangle == true ){
	alert("orange");
}
else if(isOverBlueRectangle == true){
	alert("blue");
}
else if(isOverRedRectangle == true){
	alert("red");
}
	else if(isOverYellowRectangle == true){
		alert("yellow");
	}
		else{
			alert("NAH!");
		}

}
function overRectangle(){





}