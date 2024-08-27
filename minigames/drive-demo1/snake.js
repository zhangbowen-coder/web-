/*
 * @Author: 699574 3331908788@qq.com
 * @Date: 2024-08-26 15:35:21
 * @LastEditors: 699574 3331908788@qq.com
 * @LastEditTime: 2024-08-27 15:51:40
 * @FilePath: \undefinedc:\Users\win11\Desktop\web\game\snake\snake.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const snakespeed=0;
const snakeBody=[
    {x:12,y:7},
];

const updatesnake = () => {
  for(let i = snakeBody.length;i>=0;i--){
    snakeBody[i+1]={...snakeBody[i]};
  }
  const snakedirection = getinputdirection();
  snakeBody[0].x+=snakedirection.x;
  snakeBody[0].y+=snakedirection.y;
}

const drawsnake = (gameboard) => {
  for(let i=0;i<snakeBody.length;i++){
    const segment=snakeBody[i];
    const snakeelement=document.createElement("div");
    snakeelement.style.gridRowStart =segment.x;
    snakeelement.style.gridColumnStart=segment.y;
    snakeelement.classList.add("snake");
    gameboard.appendChild(snakeelement);
}
}
const onsnake = (position) => {
    for(let i=0;i<snakeBody.length;i++){
        if(equalpositions(snakeBody[i],position)){
            return true;
        }
    }
    return false;
}

const equalpositions = (pos1,pos2) => {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

const expandsnake = (amount) => {
    for(let i=0;i<amount;i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]});
    }
}

const isgameover = () => {
    return issnakeoutofbounds()||issnakeeatself();
}

const issnakeoutofbounds = () => {
    return isoutofbounds(snakeBody[0]);
}

const issnakeeatself = () => {
    const snakehead=snakeBody[0];
    for(let i=1;i<snakeBody.length;i++)
        {
        if(equalpositions(snakeBody[i],snakehead))
        {
            return true;
        } 
        return false;
        }
}

const removeroad = () =>{
    const snakehead=snakeBody[0];
        if(equalpositions(snakeBody[2],snakehead)){
            snakeBody.splice(1,1);
            for(let i=2;i<snakeBody.length;i++)
            {
            snakeBody[i-1]=snakeBody[i];
            }
        }
        else return false;
    }

const checkCollision = () =>{
    const snakehead=snakeBody[0];
    for(let obstaclenum=0;obstaclenum<obstacles.length;obstaclenum++)
    {
        if(equalpositions(snakehead,obstacles[obstaclenum]))
        {
            for(let i=1;i<snakeBody.length;i++)
                {
                snakeBody[i-1]=snakeBody[i];
                }
            break;
        }
    }
}

const bonus = () =>{

}
    