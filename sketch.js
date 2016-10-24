

//Instance variables 
var score = 0;
var isOverOrangeRectangle, isOverBlueRectangle, isOverRedRectangle, isOverYellowRectangle, isOverPlayButton;
var orangeR, orangeG, orangeB;
var yellowR, yellowG, yellowB;
var redR, redR, redB;
var blueR, blueR, blueB;
var gamePlaying = false;
var sequence = [];
var sequenceIndex = 0;
var sequenceDone = false;
var bestScore = 0;



function setup(){
	createCanvas(windowWidth, windowHeight);
	setupColors();
}


function draw(){

	background(0);
	createButton();
		textSize(32);
    fill(250);
    text("Best: " + bestScore, window.width - 200, 200);
	fill(orangeR,orangeG, orangeB);
	var orangeRectangle = rect(100, 30, 200, 200);
	fill(blueR,blueG,blueB);
	var blueRectangle = rect(800,30,200,200);
	fill(redR,redG, redB);
	var redRectangle = rect(100,500,200,200);
	fill(yellowR,yellowG,yellowB);
	var yellowRectangle = rect(800,500, 200,200);
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
		isOverPlayButton = false;
	}

if(sequenceIndex-1 == sequence.length - 1 && sequenceIndex !== 0){
	sequence = [];
	sequenceIndex = 0;
	sequenceDone = false;
	var interval = setInterval(function(){
				var randomSelect = Math.floor(Math.random()*4) + 1;
				randomlyHighLightColors();
				if(sequence.length > randomSelect){
				clearInterval(interval);
				sequenceDone = true;
			}

			},900);
}


	
updateScore();

}


/*
* Tracks the mouse click event
* If the game is playing and the sequence is finished, it tracks every simon box click event and matches it with the sequence
* Also tracks the play button click event to start/restart the game.
*/

function mousePressed(){
if(gamePlaying == true && sequenceDone == true){
if(isOverOrangeRectangle == true ){
	if(sequence[sequenceIndex] === 1){
		sequenceIndex++;
		score+=1;
	}
	else{
		gameOver();
	
	}


}
else if(isOverBlueRectangle == true){
	if(sequence[sequenceIndex] === 2){
		sequenceIndex++;
		score+=1;
	}
	else{
		gameOver();
	}

}
else if(isOverRedRectangle == true){
	if(sequence[sequenceIndex] === 3){
		sequenceIndex++;
		score+=1;
	}
	else{
		gameOver();
	}

}
	else if(isOverYellowRectangle == true){
		if(sequence[sequenceIndex]=== 4){
		sequenceIndex++;
		score+=1;
	}
	else{
		gameOver();
	}


	}
 
}


if(isOverPlayButton == true){
			score = 0;
			sequenceIndex = 0;
			sequence = [];
			var interval = setInterval(function(){
			var randomSelect = Math.floor(Math.random()*4) + 1;
			randomlyHighLightColors();
			if(sequenceDone == true){
				clearInterval(interval);
			}
			if(sequence.length > randomSelect){
			  clearInterval(interval);
				sequenceDone = true;
			}



			},900);
			
			gamePlaying = true;
	}
		
}
/*
* Creates the original colors for the simo says square boxes
*
*
*/
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

/*
* Randomly highlights a box for the user to know which sequence to click.
*
*
*/

function randomlyHighLightColors(){



var n = Math.floor(Math.random()*4) + 1;

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

/* 
* Highlights the blue box
*/

function highlightBlue(){
	blueR = 25;
	blueG = 184;
	blueB = 254;
	sequence.push(2)

}

/* 
* Highlights the orange box
*/
function highlightOrange(){
orangeR = 255;
orangeG = 153;
orangeB = 115;
sequence.push(1);
}
/* 
* Highlights the red box
*/
function highlightRed(){

redR = 249;
redG = 79;
redB = 91;
sequence.push(3)


}
/* 
* Highlights the yellow box
*/

function highlightYellow(){
yellowR = 255;
yellowG = 218;
yellowB = 71;
sequence.push(4);
}

/*
* Creates the Play button
*/


function createButton(){
	fill(255,255,255);


var button = rect(500,500,200,55,15);
fill(0,0,0);
var yes = text("play",570,535);

}

/*
* Updates the user score
*/

function updateScore() {
    textSize(32);
    fill(250);
    text("Score: " + score, window.width - 200, 30);

}


/*
* Stops the sequence of the current game.
*/
function gameOver(){

		alert("Game over play again!");
		if(score => bestScore){
			bestScore = score;

		}
		score = 0;
		sequence = [];
		sequenceDone = false; 



}


