//For first image
var randomNumber1;
randomNumber1=Math.floor(Math.random() * 6) + 1;      //A random value from 1 to 6

var randomimage;
randomimage="dice"+ randomNumber1 +".png";             //dice1.png to dice6.png

var randomimagesource;
randomimagesource="images/" + randomimage;          //images/dice1.png to images/dice2.png

// Now we need to change the source(src) attribute of image(img) element

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagesource);

//For second image
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimage2;
randomimage2="dice" + randomNumber2 + ".png";

var randomimagesource2;
randomimagesource2="images/"+ randomimage;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 wins!!";
}
else if (randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML= "Player 2 wins!!";
}

else
{
    document.querySelector("h1").innerHTML= "Draw!! Refresh Me";
}
