

var circle;
//Instance variables at the beginning of the code 
var score=0;
var simonArray;
var isOverOrangeRectangle;
var isOverBlueRectangle;
var isOverRedActangle;
var isOverYellowRectangle;
var orangeR, orangeG, orangeB;
var yellowR, yellowG, yellowB;
var redR, redR, redB;
var blueR, blueR, blueB;

var sequence = [];
var userSequence = 0; 
var sequenceIndex = 0;
var orangeRectangle;


function setup(){
	createCanvas(windowWidth, windowHeight);
	background(0);
	setupColors();
	



}

function draw(){

	fill(orangeR,orangeG, orangeB);
 orangeRectangle = rect(100, 30, 200, 200);

 fill(blueR,blueG,blueB);
 var blueRectangle = rect(800,30,200,200);
 fill(redR,redG, redB);
 var redRectangle = rect(100,500,200,200);
 fill(yellowR,yellowG,yellowB);
 var yellowRectangle = rect(800,500, 200,200);
	fill(236,240,241)
 textSize(32);
 text("Score: " + score, window.width - 200, 30);

 //var square2 = rect(100,20,55,55);
 noStroke();
 if(mouseX >= 100 && mouseX <= 100+200 && mouseY >= 30 && mouseY <= 30 +200){
		isOverOrangeRectangle = true;

	}
	else{
		isOverOrangeRectangle = false;
	}

	 if(mouseX >= 800 && mouseX <= 800+200 && mouseY >= 30 && mouseY <= 30 +200){
		isOverBlueRectangle = true;

	}
	else{
		isOverBlueRectangle = false;
	}
	 if(mouseX >= 100 && mouseX <= 100+200 && mouseY >= 500 && mouseY <= 500 +200){
		isOverRedRectangle = true;

	}
	else{
		isOverRedRectangle = false;
	}
	 if(mouseX >= 800 && mouseX <= 800+200 && mouseY >= 500 && mouseY <= 500 +200){
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
	//userSequence.push(1);
	if(sequence[sequenceIndex] === 1){
		alert("yes");
		sequenceIndex++;
	}

}
else if(isOverBlueRectangle == true){
	alert("blue");
	//userSequence.push(2);
	if(sequence[sequenceIndex] === 2){
		alert("yes");
		sequenceIndex++;
	}
}
else if(isOverRedRectangle == true){
	alert("red");
	//userSequence.push(3);
	if(sequence[sequenceIndex] === 3){
		alert("yes");
		sequenceIndex++;
	}
}
	else if(isOverYellowRectangle == true){
		alert("yellow");
		//userSequence.push(4);
		if(sequence[sequenceIndex]=== 4){
		alert("yes");
		sequenceIndex++;
	}

	}
		else{
		for(var i=0; i<3; i++){
			randomlyHighLightColors();
		}

		//setupColors();

	}

userSequence = 0;


}
function setupColors(){
	orangeR = 237;
	orangeG = 93;
	orangeB = 40;
	blueR = 0;
	blueG = 0;
	blueB = 255;
	redR =207;
	redG = 0;
	redB = 15;
	yellowR = 247;
	yellowG = 202;
	yellowB = 24;



}

function randomlyHighLightColors(){




var n = Math.floor(Math.random()*4) + 1;
console.log(n);

    switch(n)
    {
        case 1:
        highlightOrange();
        break;

        case 2:
        highlightBlue();
        break;

        case 3:
        highlightYellow();
        break;
        case 4 :
        highlightRed();
        break;
}




}


function highlightBlue(){
	blueR = 25;
	blueG = 184;
	blueB = 254;
	sequence.push(2)



}

function highlightOrange(){
orangeR = 255;
orangeG = 153;
orangeB = 115;
sequence.push(1);
}
function highlightRed(){

redR = 249;
redG = 79;
redB = 91;
sequence.push(3)


}

function highlightYellow(){
yellowR = 255;
yellowG = 218;
yellowB = 71;
sequence.push(4);
}