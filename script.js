var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var displayColor=document.querySelector("#displayColor");
var messageDisplay=document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
easyBtn.addEventListener("click",function(){
	numberOfSquares=3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors=generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	displayColor.textContent=pickedColor;
	for(i=0;i<squares.length;i++){
		if (colors[i]) {
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
})
hardBtn.addEventListener("click",function(){
	numberOfSquares=6;
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colors=generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	displayColor.textContent=pickedColor;
	for(i=0;i<squares.length;i++){
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
		
	}
})
resetButton.addEventListener("click",function(){
	colors=generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	displayColor.textContent=pickedColor;
	this.textContent="New Colors";
	for(var i=0;i<colors.length;i++){
	squares[i].style.background = colors[i];}
	h1.style.background="steelblue";
	messageDisplay.textContent="";
})
displayColor.textContent=pickedColor;
for(var i=0;i<colors.length;i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function(){
	var clickedColor=this.style.background;
	if (clickedColor===pickedColor) {
		messageDisplay.textContent="Correct!!";
		resetButton.textContent="Play Again?"
		changeColor(pickedColor);
		h1.style.background=pickedColor;
	}
	else{
		this.style.background="#232323";
		messageDisplay.textContent="Try Again!!!";
	}
	});
}

function changeColor(color){
	for(i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}
function pickColor(){
	var random= Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr=[];
	for(i=0;i<num;i++){
 	arr.push(randomColor())
	}
	return arr;

}
function randomColor(){
	var r= Math.floor(Math.random()* 256);
	var g= Math.floor(Math.random()* 256);
	var b= Math.floor(Math.random()* 256);
	return "rgb("+ r + ", " + g +", "+ b + ")";

}