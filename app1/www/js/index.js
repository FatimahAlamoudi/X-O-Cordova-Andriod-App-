let counterX = 0; //counter for player X
let counterO = 0; //counter for player O
let player1Result = document.getElementById('player1Result'); //to access player1 score board
let player2Result = document.getElementById('player2Result'); //to access player2 score board
let winner = document.getElementById('winner'); //to access the result modal
let replayBtn = document.getElementById('replay'); //to access to replay button
player1Result.innerHTML = 0; 
player2Result.innerHTML = 0;
let flag = 1;
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");
avatar = ['👧', '👴', '👩‍🌾', '👨‍🎓', '👨‍💻', '🙋‍♂️', '🙋‍♀️', '🧕', '🧔', '👩‍🎨','👨‍⚕️', '😉', '🤣', '😏',
'🤡', '👻', '🤓', '😴', '😜', '😪', '🌹', '💐', '🍄', '🌳', '💮', '🌚', '🌝', '🙈', '🐳']; //emoji liberary 

window.onload = function() { //to intiliaze the avatars with emojies each time the page load
	document.getElementById('player11').innerHTML = avatar[Math.floor(Math.random()*avatar.length)];
	document.getElementById('player12').innerHTML = avatar[Math.floor(Math.random()*avatar.length)];
	document.getElementById('player13').innerHTML = avatar[Math.floor(Math.random()*avatar.length)];
	document.getElementById('player14').innerHTML = avatar[Math.floor(Math.random()*avatar.length)];
	document.getElementById('player21').innerHTML = avatar[Math.floor(Math.random()*avatar.length)];
	document.getElementById('player22').innerHTML = avatar[Math.floor(Math.random()*avatar.length)];
	document.getElementById('player23').innerHTML = avatar[Math.floor(Math.random()*avatar.length)];
	document.getElementById('player24').innerHTML = avatar[Math.floor(Math.random()*avatar.length)];
	document.getElementById('print').innerHTML = "Player X Turn";
	document.getElementById('print').style.color = "#0A9396";
  };

replayBtn.addEventListener('click', clear); //click event listener for replay game button

function myfunc() { //function to called each time the game boxes clicked

	if ((b1.value == 'x' || b1.value == 'X') && (b2.value == 'x' ||  //X winning case #1
		b2.value == 'X') && (b3.value == 'x' || b3.value == 'X')) {
		b4.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
		xWon();
		newRound();
	}
	else if ((b1.value == 'x' || b1.value == 'X') && (b4.value == 'x' ||  //X winning case #2
		b4.value == 'X') && (b7.value == 'x' || b7.value == 'X')) {
		b2.disabled = true;
		b3.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
		playerXResult();
		xWon();
		newRound();
	}
	else if ((b7.value == 'x' || b7.value == 'X') && (b8.value == 'x' ||  //X winning case #3
		b8.value == 'X') && (b9.value == 'x' || b9.value == 'X')) {
		b1.disabled = true;
		b2.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
		playerXResult();
		xWon();
		newRound();
	}
	else if ((b3.value == 'x' || b3.value == 'X') && (b6.value == 'x' ||  //X winning case #4
		b6.value == 'X') && (b9.value == 'x' || b9.value == 'X')) {
		b1.disabled = true;
		b2.disabled = true;
		b4.disabled = true;
		b5.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
		playerXResult();
		xWon();
		newRound();
	}
	else if ((b1.value == 'x' || b1.value == 'X') && (b5.value == 'x' ||  //X winning case #5
		b5.value == 'X') && (b9.value == 'x' || b9.value == 'X')) {
		b2.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
		playerXResult();
		xWon();
		newRound();
	}
	else if ((b3.value == 'x' || b3.value == 'X') && (b5.value == 'x' ||  //X winning case #6
		b5.value == 'X') && (b7.value == 'x' || b7.value == 'X')) {
		b1.disabled = true;
		b2.disabled = true;
		b4.disabled = true;
		b6.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
		playerXResult();
		xWon();
		newRound();
	}
	else if ((b2.value == 'x' || b2.value == 'X') && (b5.value == 'x' ||  //X winning case #7
		b5.value == 'X') && (b8.value == 'x' || b8.value == 'X')) {
		b1.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b9.disabled = true;
		playerXResult();
		xWon();
		newRound();
	}
	else if ((b4.value == 'x' || b4.value == 'X') && (b5.value == 'x' ||  //X winning case #8
		b5.value == 'X') && (b6.value == 'x' || b6.value == 'X')) {
		b1.disabled = true;
		b2.disabled = true;
		b3.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
		playerXResult();
		xWon();
		newRound();
	}
	else if ((b1.value == '0' || b1.value == '0') && (b2.value == '0' ||  //O winning case #1
		b2.value == '0') && (b3.value == '0' || b3.value == '0')) {
		b4.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
		playerOResult();
		oWon();
		newRound();
	}
	else if ((b1.value == '0' || b1.value == '0') && (b4.value == '0' || //O winning case #2
		b4.value == '0') && (b7.value == '0' || b7.value == '0')) {
		b2.disabled = true;
		b3.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
		playerOResult();
		oWon();
		newRound();
	}
	else if ((b7.value == '0' || b7.value == '0') && (b8.value == '0' || //O winning case #3
		b8.value == '0') && (b9.value == '0' || b9.value == '0')) {
		b1.disabled = true;
		b2.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
		playerOResult();
		oWon();
		newRound();
	}
	else if ((b3.value == '0' || b3.value == '0') && (b6.value == '0' || //O winning case #4
		b6.value == '0') && (b9.value == '0' || b9.value == '0')) {
		b1.disabled = true;
		b2.disabled = true;
		b4.disabled = true;
		b5.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
		playerOResult();
		oWon();
		newRound();
	}
	else if ((b1.value == '0' || b1.value == '0') && (b5.value == '0' || //O winning case #5
		b5.value == '0') && (b9.value == '0' || b9.value == '0')) {
		b2.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
		playerOResult();
		oWon();
		newRound();
	}
	else if ((b3.value == '0' || b3.value == '0') && (b5.value == '0' || //O winning case #6
		b5.value == '0') && (b7.value == '0' || b7.value == '0')) {
		b1.disabled = true;
		b2.disabled = true;
		b4.disabled = true;
		b6.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
		playerOResult();
		oWon();
		newRound();
	}
	else if ((b2.value == '0' || b2.value == '0') && (b5.value == '0' || //O winning case #7
		b5.value == '0') && (b8.value == '0' || b8.value == '0')) {
		b1.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b9.disabled = true;
		playerOResult();
		oWon();
		newRound();
	}
	else if ((b4.value == '0' || b4.value == '0') && (b5.value == '0' || //O winning case #8
		b5.value == '0') && (b6.value == '0' || b6.value == '0')) {
		b1.disabled = true;
		b2.disabled = true;
		b3.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
		playerOResult();
		oWon();
		newRound();
	}
	else if ((b1.value == 'X' || b1.value == '0') && (b2.value == 'X' //tie case
		|| b2.value == '0') && (b3.value == 'X' || b3.value == '0') &&
		(b4.value == 'X' || b4.value == '0') && (b5.value == 'X' ||
		b5.value == '0') && (b6.value == 'X' || b6.value == '0') &&
		(b7.value == 'X' || b7.value == '0') && (b8.value == 'X' ||
		b8.value == '0') && (b9.value == 'X' || b9.value == '0')) {
		tieCase();
		newRound();
	}
	else {
		if (flag == 1) { //to show whether it's player x turn or player y turn 
			document.getElementById('print').innerHTML = "Player X Turn";
			document.getElementById('print').style.color = "#0A9396";
		}
		else {
			document.getElementById('print').innerHTML = "Player O Turn";
			document.getElementById('print').style.color = "#EE9B00";
		}
	}
}

function clear() { //function to be called when the page reload (clear the score board and game boxes)
	location.reload();
	b1.value = '';
	b2.value = '';
	b3.value = '';
	b4.value = '';
	b5.value = '';
	b6.value = '';
	b7.value = '';
	b8.value = '';
	b9.value = '';
	player1Result.innerHTML = 0;
	player2Result.innerHTML = 0;
	
}

function myfunc_22() //function to be called when the game finishes (to keep record of the game score)
{
	b1.value = '';
	b2.value = '';
	b3.value = '';
	b4.value = '';
	b5.value = '';
	b6.value = '';
	b7.value = '';
	b8.value = '';
	b9.value = '';
	b1.disabled = false;
	b2.disabled = false;
	b3.disabled = false;
	b4.disabled = false;
	b5.disabled = false;
	b6.disabled = false;
	b7.disabled = false;
	b8.disabled = false;
	b9.disabled = false;
	player1Result.innerHTML = counterX;
	player2Result.innerHTML = counterO;
}

function myfunc_3() { //to populate game boxes with either X or O 
	if (flag == 1) {
		b1.value = "X";
		b1.disabled = true;
		flag = 0;
	}
	else {
		b1.value = "0";
		b1.disabled = true;
		flag = 1;
	}
}

function myfunc_4() { //to populate game boxes with either X or O 
	if (flag == 1) {
		b2.value = "X";
		b2.disabled = true;
		flag = 0;
	}
	else {
		b2.value = "0";
		b2.disabled = true;
		flag = 1;
	}
}

function myfunc_5() { //to populate game boxes with either X or O 
	if (flag == 1) {
		b3.value = "X";
		b3.disabled = true;
		flag = 0;
	}
	else {
		b3.value = "0";
		b3.disabled = true;
		flag = 1;
	}
}

function myfunc_6() { //to populate game boxes with either X or O 
	if (flag == 1) {
		b4.value = "X";
		b4.disabled = true;
		flag = 0;
	}
	else {
		b4.value = "0";
		b4.disabled = true;
		flag = 1;
	}
}

function myfunc_7() { //to populate game boxes with either X or O 
	if (flag == 1) {
		b5.value = "X";
		b5.disabled = true;
		flag = 0;
	}
	else {
		b5.value = "0";
		b5.disabled = true;
		flag = 1;
	}
}

function myfunc_8() { //to populate game boxes with either X or O 
	if (flag == 1) {
		b6.value = "X";
		b6.disabled = true;
		flag = 0;
	}
	else {
		b6.value = "0";
		b6.disabled = true;
		flag = 1;
	}
}

function myfunc_9() { //to populate game boxes with either X or O 
	if (flag == 1) {
		b7.value = "X";
		b7.disabled = true;
		flag = 0;
	}
	else {
		b7.value = "0";
		b7.disabled = true;
		flag = 1;
	}
}

function myfunc_10() { //to populate game boxes with either X or O 
	if (flag == 1) {
		b8.value = "X";
		b8.disabled = true;
		flag = 0;
	}
	else {
		b8.value = "0";
		b8.disabled = true;
		flag = 1;
	}
}

function myfunc_11() { //to populate game boxes with either X or O 
	if (flag == 1) {
		b9.value = "X";
		b9.disabled = true;
		flag = 0;
	}
	else {
		b9.value = "0";
		b9.disabled = true;
		flag = 1;
	}
}

function newRound(){
	$("#myModal").modal();
	myfunc_22();
}
function playerXResult(){
	counterX++;
	player1Result.innerHTML = counterX;	
}

function playerOResult(){
	counterO++;
	player2Result.innerHTML = counterO;
}

function xWon(){
	winner.innerHTML = 'Play X Won 😀'
	winner.style.color = '#0A9396';
	flag = 1;
}


function oWon(){
	winner.innerHTML = 'Play O Won 😀'
	winner.style.color = '#EE9B00';
	flag = 0;
}

function tieCase(){
	winner.innerHTML = 'Guys Its Tie😂'
	winner.style.color = '#005F73';
}