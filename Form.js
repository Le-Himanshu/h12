class Form{

constructor(){

this.input=createInput("name");

this.button =createButton("PLAY");

this.greeting=createElement("h2");




}

hide(){

this.input.hide();
this.button.hide();
this.greeting.hide();

}

display(){

this.input.position(displayWidth-250,displayHeight/2);
this.button.position(displayWidth-200,(displayHeight+100)/2);

this.button.mousePressed(()=>{

this.input.hide();
this.button.hide();
playername=this.input.value();

console.log(playername);
gamestate=1;

})
}













}