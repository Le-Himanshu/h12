var form;
var game;
var playername;
 var gamestate=0;
var bg1,bg2,bg3;
var timer=325;
var form2;

function preload(){
 

  bg1=loadImage("bg1.jpg")
  bg2=loadImage("bg2.jpg");
  bg3=loadImage("bg3.jpg");

   







}
function setup(){
createCanvas(displayWidth-20,displayHeight-20)
  game=new Game();
  game.start();










}
function draw(){

if(gamestate===1){
form2=new Form2();
form2.display2();
  



if (timer<=325 && timer>300 ){

textSize(50);
text("Welcome "+ playername,(displayWidth-20)/2,(displayHeight-20)/2);
timer=timer-1;


}
else if (timer<=300 && timer>200){
background(bg1)
timer=timer-1


}
else if (timer<=200 && timer>100){

background(bg2)
timer=timer-1



}
else if(timer<=100 ){

background(bg3);



}





















}

}