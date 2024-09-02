/*
 * @Author: 699574 3331908788@qq.com
 * @Date: 2024-08-28 16:22:32
 * @LastEditors: 699574 3331908788@qq.com
 * @LastEditTime: 2024-09-02 16:42:56
 * @FilePath: \undefinedc:\Users\win11\Desktop\web\web-assignment\minigames\drive-demo2\game.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: 699574 3331908788@qq.com
 * @Date: 2024-08-26 15:35:21
 * @LastEditors: 699574 3331908788@qq.com
 * @LastEditTime: 2024-08-31 16:13:36
 * @FilePath: \undefinedc:\Users\win11\Desktop\web\game\snake\game.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var speedgreen=1;
var speedyellow=0;
var speedblue=0;
let lastRenderTime=0;
const gameboard=document.getElementById("game-board");
let gameover=0;
let Win=0;

const changeWin = () =>{
  Win=1;
}

const change = (Event) =>{
  if(Event.key==="1")
  {
    speedyellow=1;
    speedgreen=0;
    speedblue=0;
  }
  if(Event.key==='2')
  {
    speedyellow=0;
    speedgreen=1;
    speedblue=0;
  }
  if(Event.key==='3')
  {
    speedyellow=0;
    speedgreen=0;
    speedblue=1;
  }

 }

const main = (currentTime) => {
  if(Win){
    alert("win");
    var game1index=1;
    localStorage.setItem('game1win',game1index);
    window.location.href="../../body/html/game.html";
    return;
  }


  if(gameover){
    alert("lose");
    location.reload();
      return;
  }
  GetBonusOrPunish();
    window.requestAnimationFrame(main);
   const secondsSinceLastRender=(currentTime-lastRenderTime)/1000;
   if(secondsSinceLastRender < 1/5){
       return;
   }
   lastRenderTime=currentTime;
   window.addEventListener('keydown',update);
   draw();
   UpdatePanels();
   checkCollision();
   window.addEventListener('keydown',remove);
   document.addEventListener('keydown',change);
   
  }

 window.requestAnimationFrame(main);

 const remove = () => {
    removeroad();
 }

 const update = () => {
   Win = isWin();
   gameover = isgameover();
   updatesnake();
   updatefood();
 }

 const draw = () => {
  gameboard.innerHTML="";
  createObstacles(gameboard);
  createAims(gameboard);
  createUps(gameboard);
  createDowns(gameboard);
  drawsnake(gameboard);
 }

 const GetBonusOrPunish = () =>{
  bonus();
  punish();
 }

