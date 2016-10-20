

var circle;
//Instance variables at the beginning of the code 
var score=0;
var simonArray;
var isOverOrangeRectangle;
var sequence = [1];
var userSequence = []; 
var sequenceIndex = -1;


function setup(){
	createCanvas(windowWidth, windowHeight);
	background(0);


}

function draw(){

	fill(255,127,80);
 var square = rect(30, 30, 55, 55);

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
	

 
}



function mousePressed(){

//check if mouse distance is inside a square
//if it is, match it with the sequence of the simon array

if(isOverOrangeRectangle == true ){
	userSequence.push(1);

}

sequenceIndex ++;
if(sequence[sequenceIndex] == userSequence[sequenceIndex]){
	alert(true);

}

}

function overRectangle(){





}