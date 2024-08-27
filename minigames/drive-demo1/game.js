
let lastRenderTime=0;
const gameboard=document.getElementById("game-board");
let gameover=0;

const main = (currentTime) => {

    if(gameover){
        return;
   }
   window.requestAnimationFrame(main);
   const secondsSinceLastRender=(currentTime-lastRenderTime)/1000;
   if(secondsSinceLastRender < 1/5){
       return;
   }
   lastRenderTime=currentTime;
   window.addEventListener('keydown',update);
   draw();
   window.addEventListener('keydown',remove);
}

 window.requestAnimationFrame(main);

 const remove = () => {
    removeroad();
    checkCollision();
 }

 const update = () => {
   gameover = isgameover();
   updatesnake();
   updatefood();
   
 }

 const draw = () => {
    gameboard.innerHTML="";
  drawsnake(gameboard);
  drawfood(gameboard);
  createObstacles(gameboard);
  createAims(gameboard);
  createUps(gameboard);
  createDowns(gameboard);
 }

