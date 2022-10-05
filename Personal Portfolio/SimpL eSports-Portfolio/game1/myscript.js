

var randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1)+1;

var randomDiceImages = "dice" + randomNumber1 + ".png";
var randomImageSource = "images2/" + randomDiceImages; //3 AND BOTH ARE SAME  TO SELECT IMAGES.

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.random()*6;
randomNumber2 = Math.floor(randomNumber2)+1;

var randomDiceSource2 = "images2/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "play 1 wins";

} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "play 2 wins";
}
else{ 
    document.querySelector("h1").innerHTML = "draw";
}