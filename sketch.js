

//Instance variables at the beginning of the code 
var score = 0;
var scoreText; 
var simonArray;
var isOverOrangeRectangle, isOverBlueRectangle, isOverRedActangle, isOverYellowRectangle, isOverPlayButton;
var orangeR, orangeG, orangeB;
var yellowR, yellowG, yellowB;
var redR, redR, redB;
var blueR, blueR, blueB;
var gamePlaying = false;
var sequence = [];
var userSequence = 0; 
var sequenceIndex = 0;
var orangeRectangle;



function setup(){
	createCanvas(windowWidth, windowHeight);
	setupColors();
	

}


function draw(){
		background(0);

createButton();
fill(orangeR,orangeG, orangeB);
orangeRectangle = rect(100, 30, 200, 200);
fill(blueR,blueG,blueB);
var blueRectangle = rect(800,30,200,200);
fill(redR,redG, redB);
var redRectangle = rect(100,500,200,200);
fill(yellowR,yellowG,yellowB);
var yellowRectangle = rect(800,500, 200,200);






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
	if(mouseX >= 500 && mouseX <= 500+200 && mouseY >= 500 && mouseY <= 500 +200){
		isOverPlayButton = true;

	}
	else{
		//rect(500,500,200,55,15);
		isOverPlayButton = false;
	}

if(sequenceIndex-1 == sequence.length - 1 && sequenceIndex !== 0){
	sequence = [];
	sequenceIndex = 0;
	var interval = setInterval(function(){
				var randomSelect = Math.floor(Math.random()*4) + 1;
				randomlyHighLightColors();
				if(sequence.length > randomSelect){
				clearInterval(interval);
			}

			},900);
}


	
updateScore();

}



function mousePressed(){

//check if mouse distance is inside a square
//if it is, match it with the sequence of the simon array
if(gamePlaying == true){
if(isOverOrangeRectangle == true ){
	console.log("??");
	alert("orange");
	//userSequence.push(1);
	if(sequence[sequenceIndex] === 1){
		alert("yes");
		sequenceIndex++;
		score+=1;
	}
	else{
	alert("Game over play again!");
	score = 0;
	}


}
else if(isOverBlueRectangle == true){
	//userSequence.push(2);
	if(sequence[sequenceIndex] === 2){
		sequenceIndex++;
		score+=1;

	}
	else{
		alert("Game over play again!");
		score = 0;
	}

}
else if(isOverRedRectangle == true){
	//userSequence.push(3);
	if(sequence[sequenceIndex] === 3){
		sequenceIndex++;
		score+=1;
	}
	else{
			alert("Game over play again!");
		score=0;
	}

}
	else if(isOverYellowRectangle == true){
		//userSequence.push(4);
		if(sequence[sequenceIndex]=== 4){
		sequenceIndex++;
		score+=1;
	}
	else{
	alert("Game over play again!");
		score = 0; 
	}


	}
 


userSequence = 0;
}

if(isOverPlayButton == true){
	
			var interval = setInterval(function(){
				var randomSelect = Math.floor(Math.random()*4) + 1;
				randomlyHighLightColors();
				if(sequence.length > randomSelect){
				clearInterval(interval);
			}

			},900);
			gamePlaying = false;
	}
		
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
	yellowR = 200;
	yellowG = 160;
	yellowB = 4;



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

window.setTimeout(function(){
setupColors();

},300);

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


function createButton(){
	fill(255,255,255);


var button = rect(500,500,200,55,15);
fill(0,0,0);
var yes = text("play",570,535);

}


function updateScore() {
    textSize(32);
    fill(250);
     text("Score: " + score, window.width - 200, 30);
}





