
document.querySelector("button").addEventListener( "click", ()=>{
    console.log("clicked successfully")
var randomNumber1= Math.floor(Math.random()*6)+1;/// number from 1 to 6;
var randomDiceImage= "images/" + "dice"+ randomNumber1+".png";
var image1= document.querySelector(".img1");
console.log(image1.setAttribute("src",randomDiceImage));



var randomNumber2= Math.floor(Math.random()*6)+1;/// number from 1 to 6;
var randomDiceImage2= "images/" + "dice"+ randomNumber2+".png";
var image2= document.querySelector(".img2");
image2.setAttribute("src",randomDiceImage2);


if(randomNumber1>randomNumber2)
{
    console.log(document.querySelector("h1").innerHTML="Player 1 Wins!");

}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!"; 
}
else
{
    document.querySelector("h1").innerHTML=" Draw!";
}
})