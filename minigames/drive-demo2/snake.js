/*
 * @Author: 699574 3331908788@qq.com
 * @Date: 2024-08-26 15:35:21
 * @LastEditors: 699574 3331908788@qq.com
 * @LastEditTime: 2024-08-28 16:21:10
 * @FilePath: \undefinedc:\Users\win11\Desktop\web\game\snake\snake.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: 699574 3331908788@qq.com
 * @Date: 2024-08-26 15:35:21
 * @LastEditors: 699574 3331908788@qq.com
 * @LastEditTime: 2024-08-28 10:07:21
 * @FilePath: \undefinedc:\Users\win11\Desktop\web\game\snake\snake.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const snakespeed=0;

let snakeOilYellow=22;
let snakeOilGreen=16;
let snakeOilBlue=32;
let snakeGoodsYellow=30;
let snakeGoodsGreen=30;
let snakeGoodsBlue=30;
let bool = 1;
let sum=90;
const backdirection=[
    {x:1,y:1},
]

const snakeBodyGreen=[
    {x:12,y:7},
];

const snakeBodyBlue=[
    {x:15,y:12},
];

const snakeBodyYellow=[
    {x:14,y:4},

];

const updatesnake = () => {
    if(speedgreen===1)
  {for(let i = snakeBodyGreen.length;i>=0;i--){
    snakeBodyGreen[i+1]={...snakeBodyGreen[i]};
  }
 const snakedirection = getinputdirection();
  snakeBodyGreen[0].x+=snakedirection.x;
  snakeBodyGreen[0].y+=snakedirection.y;
  snakeOilGreen-=1;
  snakeGoodsGreen-=1;
}
  if(speedblue===1)
    {for(let i = snakeBodyBlue.length;i>=0;i--){
      snakeBodyBlue[i+1]={...snakeBodyBlue[i]};
    }
   const snakedirection = getinputdirection();
    snakeBodyBlue[0].x+=snakedirection.x;
    snakeBodyBlue[0].y+=snakedirection.y;
    snakeOilBlue-=1;
    snakeGoodsBlue-=1;
}
  if(speedyellow===1)
    {for(let i = snakeBodyYellow.length;i>=0;i--){
          snakeBodyYellow[i+1]={...snakeBodyYellow[i]};
    }
    const snakedirection = getinputdirection();
    snakeBodyYellow[0].x+=snakedirection.x;
    snakeBodyYellow[0].y+=snakedirection.y;
    snakeOilYellow-=1;
    snakeGoodsYellow-=1;
}
}

const drawsnake = (gameboard) => {
  for(let i=0;i<snakeBodyGreen.length;i++){
    const segment=snakeBodyGreen[i];
    const snakeelement=document.createElement("div");
    snakeelement.style.gridRowStart =segment.x;
    snakeelement.style.gridColumnStart=segment.y;
    snakeelement.classList.add("snakeGreen");
    gameboard.appendChild(snakeelement);
}
for(let i=0;i<snakeBodyBlue.length;i++){
    const segment=snakeBodyBlue[i];
    const snakeelement=document.createElement("div");
    snakeelement.style.gridRowStart =segment.x;
    snakeelement.style.gridColumnStart=segment.y;
    snakeelement.classList.add("snakeBlue");
    gameboard.appendChild(snakeelement);
}
for(let i=0;i<snakeBodyYellow.length;i++){
    const segment=snakeBodyYellow[i];
    const snakeelement=document.createElement("div");
    snakeelement.style.gridRowStart =segment.x;
    snakeelement.style.gridColumnStart=segment.y;
    snakeelement.classList.add("snakeYellow");
    gameboard.appendChild(snakeelement);
}
}

const onsnake = (position) => {
    for(let i=0;i<snakeBodyGreen.length;i++){
        if(equalpositions(snakeBodyGreen[i],position)){
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
        snakeBodyGreen.push({...snakeBodyGreen[snakeBodyGreen.length-1]});
    }
}

const isgameover = () => {
    return isOilRunOut()||isGoodsRunOut();
}

const issnakeoutofbounds = () => {
    return isoutofbounds(snakeBodyGreen[0]);
}

const isWin = () =>{
    if(equalpositions(snakeBodyBlue[0],aimblue[0])&&equalpositions(snakeBodyGreen[0],aimgreen[0])&&equalpositions(snakeBodyYellow[0],aimyellow[0])&&sum>=86)
    {
        return 1;
    }
    else return 0;
}

const isOilRunOut = () =>{
    if(snakeOilBlue<=0||snakeOilGreen<=0||snakeOilYellow<=0)
    {
        return true;
    }
    else return false;
}

const isGoodsRunOut = () =>{
    if(snakeGoodsBlue<=0||snakeGoodsGreen<=0||snakeGoodsYellow<=0)
    {
        return true;
    }
    else return false;
}

const issnakeeatself = () => {
    const snakehead=snakeBodyGreen[0];
    for(let i=1;i<snakeBodyGreen.length;i++)
        {
        if(equalpositions(snakeBodyGreen[i],snakehead))
        {
            return true;
        } 
        return false;
        }
}

const equallastpositions = (pos1,pos2) =>{
    backdirection.x=getinputdirection().x;
    backdirection.y=getinputdirection().y;
    return pos1.x-backdirection.x === pos2.x && pos1.y-backdirection.y === pos2.y;
}

const removeroad = () =>{
    
    if(speedgreen===1){
    const snakehead=snakeBodyGreen[0];
        if(equalpositions(snakeBodyGreen[2],snakehead)||equalpositions(snakeBodyGreen[3],snakehead))
        {
            snakeBodyGreen.splice(1,1);
            snakeOilGreen+=2;
            snakeGoodsGreen+=2;
            for(let i=2;i<snakeBodyGreen.length;i++)
            {
            snakeBodyGreen[i-1]=snakeBodyGreen[i];
            }
        }
        for(let Up1num=0;Up1num<Up1.length;Up1num++)
            {
              if(equallastpositions(snakehead,Up1[Up1num]))
              {
                if(Up1[Up1num].triggered){
                for(let snakebodycount=0;snakebodycount<snakeBodyGreen.length;snakebodycount++)
                {
                if(equalpositions(snakeBodyGreen[snakebodycount],Up1[Up1num]))
                {
                    bool=1;
                }
                }
                 if(bool===0){
                 snakeOilGreen-=1;
                 snakeGoodsGreen-=5;
                 Up1[Up1num].triggered=false;}
                 else bool=0;
                }
              }
            } 
            for(let Up2num=0;Up2num<Up2.length;Up2num++)
                {
                  if(equallastpositions(snakehead,Up2[Up2num]))
                  {
                    if(Up2[Up2num].triggered){
                    for(let snakebodycount=0;snakebodycount<snakeBodyGreen.length;snakebodycount++)
                    {
                    if(equalpositions(snakeBodyGreen[snakebodycount],Up2[Up2num]))
                    {
                        bool=1;
                    }
                    }
                     if(bool===0){
                     snakeOilGreen+=1;
                     snakeGoodsGreen-=10;
                     Up2[Up2num].triggered=false;}
                     else bool=0;
                    }
                  }
                } 
                for(let Down1num=0;Down1num<Down1.length;Down1num++)
                    {
                      if(equallastpositions(snakehead,Down1[Down1num]))
                      {
                        if(Down1[Down1num].triggered){
                        for(let snakebodycount=0;snakebodycount<snakeBodyGreen.length;snakebodycount++)
                        {
                        if(equalpositions(snakeBodyGreen[snakebodycount],Down1[Down1num]))
                        {
                            bool=1;
                        }
                        }
                         if(bool===0){
                         snakeGoodsGreen+=5;
                         Down1[Down1num].triggered=false;}
                         else bool=0;
                        }
                      }
                    } 
                    for(let Down2num=0;Down2num<Down2.length;Down2num++)
                        {
                          if(equallastpositions(snakehead,Down2[Down2num]))
                          {
                            if(Down2[Down2num].triggered){
                            for(let snakebodycount=0;snakebodycount<snakeBodyGreen.length;snakebodycount++)
                            {
                            if(equalpositions(snakeBodyGreen[snakebodycount],Down2[Down2num]))
                            {
                                bool=1;
                            }
                            }
                             if(bool===0){
                             snakeOilGreen+=2;
                             Down2[Down2num].triggered=false;}
                             else bool=0;
                            }
                          }
                        } 
    }
    if(speedblue===1){
        const snakehead=snakeBodyBlue[0];
            if(equalpositions(snakeBodyBlue[2],snakehead)||equalpositions(snakeBodyBlue[3],snakehead)){
                snakeBodyBlue.splice(1,1);
                snakeOilBlue+=2;
                snakeGoodsBlue+=2;
                for(let i=2;i<snakeBodyBlue.length;i++)
                {
                snakeBodyBlue[i-1]=snakeBodyBlue[i];
                }
            }
            for(let Up1num=0;Up1num<Up1.length;Up1num++)
                {
                  if(equallastpositions(snakehead,Up1[Up1num]))
                  {
                    if(Up1[Up1num].triggered){
                    for(let snakebodycount=0;snakebodycount<snakeBodyBlue.length;snakebodycount++)
                    {
                    if(equalpositions(snakeBodyBlue[snakebodycount],Up1[Up1num]))
                    {
                        bool=1;
                    }
                    }
                     if(bool===0){
                     snakeOilBlue-=1;
                     snakeGoodsBlue-=5;
                     Up1[Up1num].triggered=false;}
                     else bool=0;
                    }
                  }
                } 
                for(let Up2num=0;Up2num<Up2.length;Up2num++)
                    {
                      if(equallastpositions(snakehead,Up2[Up2num]))
                      {
                        if(Up2[Up2num].triggered){
                        for(let snakebodycount=0;snakebodycount<snakeBodyBlue.length;snakebodycount++)
                        {
                        if(equalpositions(snakeBodyBlue[snakebodycount],Up2[Up2num]))
                        {
                            bool=1;
                        }
                        }
                         if(bool===0){
                         snakeOilBlue+=1;
                         snakeGoodsBlue-=10;
                         Up2[Up2num].triggered=false;}
                         else bool=0;
                        }
                      }
                    } 
                    for(let Down1num=0;Down1num<Down1.length;Down1num++)
                        {
                          if(equallastpositions(snakehead,Down1[Down1num]))
                          {
                            if(Down1[Down1num].triggered){
                            for(let snakebodycount=0;snakebodycount<snakeBodyBlue.length;snakebodycount++)
                            {
                            if(equalpositions(snakeBodyBlue[snakebodycount],Down1[Down1num]))
                            {
                                bool=1;
                            }
                            }
                             if(bool===0){
                             snakeGoodsBlue+=5;
                             Down1[Down1num].triggered=false;}
                             else bool=0;
                            }
                          }
                        } 
                        for(let Down2num=0;Down2num<Down2.length;Down2num++)
                            {
                              if(equallastpositions(snakehead,Down2[Down2num]))
                              {
                                if(Down2[Down2num].triggered){
                                for(let snakebodycount=0;snakebodycount<snakeBodyBlue.length;snakebodycount++)
                                {
                                if(equalpositions(snakeBodyBlue[snakebodycount],Down2[Down2num]))
                                {
                                    bool=1;
                                }
                                }
                                 if(bool===0){
                                 snakeOilBlue+=2;
                                 Down2[Down2num].triggered=false;}
                                 else bool=0;
                                }
                              }
                            } 
        }
    if(speedyellow===1){
        const snakehead=snakeBodyYellow[0];
            if(equalpositions(snakeBodyYellow[2],snakehead)||equalpositions(snakeBodyYellow[3],snakehead)){
                snakeBodyYellow.splice(1,1);
                snakeGoodsYellow+=2;
                snakeOilYellow+=2;
                for(let i=2;i<snakeBodyYellow.length;i++)
                {
                snakeBodyYellow[i-1]=snakeBodyYellow[i];
                }
            }
            for(let Up1num=0;Up1num<Up1.length;Up1num++)
                {
                  if(equallastpositions(snakehead,Up1[Up1num]))
                  {
                    if(Up1[Up1num].triggered){
                    for(let snakebodycount=0;snakebodycount<snakeBodyYellow.length;snakebodycount++)
                    {
                    if(equalpositions(snakeBodyYellow[snakebodycount],Up1[Up1num]))
                    {
                        bool=1;
                    }
                    }
                     if(bool===0){
                     snakeOilYellow-=1;
                     snakeGoodsYellow-=5;
                     Up1[Up1num].triggered=false;}
                     else bool=0;
                    }
                  }
                } 
                for(let Up2num=0;Up2num<Up2.length;Up2num++)
                    {
                      if(equallastpositions(snakehead,Up2[Up2num]))
                      {
                        if(Up2[Up2num].triggered){
                        for(let snakebodycount=0;snakebodycount<snakeBodyYellow.length;snakebodycount++)
                        {
                        if(equalpositions(snakeBodyYellow[snakebodycount],Up2[Up2num]))
                        {
                            bool=1;
                        }
                        }
                         if(bool===0){
                         snakeOilYellow+=1;
                         snakeGoodsYellow-=10;
                         Up2[Up2num].triggered=false;}
                         else bool=0;
                        }
                      }
                    } 
                    for(let Down1num=0;Down1num<Down1.length;Down1num++)
                        {
                          if(equallastpositions(snakehead,Down1[Down1num]))
                          {
                            if(Down1[Down1num].triggered){
                            for(let snakebodycount=0;snakebodycount<snakeBodyYellow.length;snakebodycount++)
                            {
                            if(equalpositions(snakeBodyYellow[snakebodycount],Down1[Down1num]))
                            {
                                bool=1;
                            }
                            }
                             if(bool===0){
                             snakeGoodsYellow+=5;
                             Down1[Down1num].triggered=false;}
                             else bool=0;
                            }
                          }
                        } 
                        for(let Down2num=0;Down2num<Down2.length;Down2num++)
                            {
                              if(equallastpositions(snakehead,Down2[Down2num]))
                              {
                                if(Down2[Down2num].triggered){
                                for(let snakebodycount=0;snakebodycount<snakeBodyYellow.length;snakebodycount++)
                                {
                                if(equalpositions(snakeBodyYellow[snakebodycount],Down2[Down2num]))
                                {
                                    bool=1;
                                }
                                }
                                 if(bool===0){
                                 snakeOilYellow+=2;
                                 Down2[Down2num].triggered=false;}
                                 else bool=0;
                                }
                              }
                            } 
        }
}

const checkCollision = () =>{
    if(speedgreen===1){
    const snakehead=snakeBodyGreen[0];
    for(let obstaclenum=0;obstaclenum<obstacles.length;obstaclenum++)
    {
        if(equalpositions(snakehead,obstacles[obstaclenum]))
        {
            for(let i=1;i<snakeBodyGreen.length;i++)
                {
                snakeBodyGreen[i-1]=snakeBodyGreen[i];
                }
                snakeOilGreen+=1;
                snakeGoodsGreen+=1;
            break;
            
            
        }
    }}
    if(speedyellow===1){
    const snakehead=snakeBodyYellow[0];
    for(let obstaclenum=0;obstaclenum<obstacles.length;obstaclenum++)
    {
        if(equalpositions(snakehead,obstacles[obstaclenum]))
        {
            for(let i=1;i<snakeBodyYellow.length;i++)
                {
                snakeBodyYellow[i-1]=snakeBodyYellow[i];
                }
                snakeOilYellow+=1;
                snakeGoodsYellow+=1;
            break;
        }
    }}
    if(speedblue===1){
    const snakehead=snakeBodyBlue[0];
    for(let obstaclenum=0;obstaclenum<obstacles.length;obstaclenum++)
    {
        if(equalpositions(snakehead,obstacles[obstaclenum]))
        {
            for(let i=1;i<snakeBodyBlue.length;i++)
                {
                snakeBodyBlue[i-1]=snakeBodyBlue[i];
                }
                snakeOilBlue+=1;
                snakeGoodsBlue+=1;
            break;
        }
    }
}}

const bonus = () =>{
    if(speedblue===1)
        {
         const snakehead=snakeBodyBlue[0];
         for(let Up1num=0;Up1num<Up1.length;Up1num++)
         {
           if(equalpositions(snakehead,Up1[Up1num]))
           {
             if(!Up1[Up1num].triggered)
             {snakeOilBlue+=1;
              snakeGoodsBlue+=5;
              Up1[Up1num].triggered=true;
             }
           }
         } 
         for(let Up2num=0;Up2num<Up2.length;Up2num++)
         {
             if(equalpositions(snakehead,Up2[Up2num]))
             {
              if(!Up2[Up2num].triggered)
              {snakeOilBlue-=1;
               snakeGoodsBlue+=10;
               Up2[Up2num].triggered=true;
              }
             }
         } 
        }
    if(speedyellow===1)
   {
    const snakehead=snakeBodyYellow[0];
    for(let Up1num=0;Up1num<Up1.length;Up1num++)
    {
      if(equalpositions(snakehead,Up1[Up1num]))
      {
        if(!Up1[Up1num].triggered)
        {snakeOilYellow+=1;
         snakeGoodsYellow+=5;
         Up1[Up1num].triggered=true;
        }
      }
    } 
    for(let Up2num=0;Up2num<Up2.length;Up2num++)
    {
        if(equalpositions(snakehead,Up2[Up2num]))
        {
         if(!Up2[Up2num].triggered)
         {snakeOilYellow-=1;
          snakeGoodsYellow+=10;
          Up2[Up2num].triggered=true;
         }
        }
    } 
   }
   if(speedgreen===1)
    {
     const snakehead=snakeBodyGreen[0];
     for(let Up1num=0;Up1num<Up1.length;Up1num++)
     {
       if(equalpositions(snakehead,Up1[Up1num]))
       {
         if(!Up1[Up1num].triggered)
         {snakeOilGreen+=1;
          snakeGoodsGreen+=5;
          Up1[Up1num].triggered=true;
         }
       }
     } 
     for(let Up2num=0;Up2num<Up2.length;Up2num++)
     {
         if(equalpositions(snakehead,Up2[Up2num]))
         {
          if(!Up2[Up2num].triggered)
          {snakeOilGreen-=1;
           snakeGoodsGreen+=10;
           Up2[Up2num].triggered=true;
          }
         }
     } 
    }
}

const punish = () =>{
    if(speedblue===1)
    {
    const snakehead=snakeBodyBlue[0];
        for(let Down1num=0;Down1num<Down1.length;Down1num++)
        {
           if(equalpositions(snakehead,Down1[Down1num]))
           {
             if(!Down1[Down1num].triggered)
             {
              snakeGoodsBlue-=5;
              Down1[Down1num].triggered=true;
             }
           }
        } 
        for(let Down2num=0;Down2num<Down2.length;Down2num++)
        {
             if(equalpositions(snakehead,Down2[Down2num]))
             {
              if(!Down2[Down2num].triggered)
              {snakeOilBlue-=2;
               Down2[Down2num].triggered=true;
              }
             }
        } 
    }
    if(speedyellow===1)
        {
        const snakehead=snakeBodyYellow[0];
            for(let Down1num=0;Down1num<Down1.length;Down1num++)
            {
               if(equalpositions(snakehead,Down1[Down1num]))
               {
                 if(!Down1[Down1num].triggered)
                 {
                  snakeGoodsYellow-=5;
                  Down1[Down1num].triggered=true;
                 }
               }
            } 
            for(let Down2num=0;Down2num<Down2.length;Down2num++)
            {
                 if(equalpositions(snakehead,Down2[Down2num]))
                 {
                  if(!Down2[Down2num].triggered)
                  {snakeOilYellow-=2;
                   Down2[Down2num].triggered=true;
                  }
                 }
            } 
        }
    if(speedgreen===1)
        {
        const snakehead=snakeBodyGreen[0];
            for(let Down1num=0;Down1num<Down1.length;Down1num++)
            {
            if(equalpositions(snakehead,Down1[Down1num]))
                {
                if(!Down1[Down1num].triggered)
                    {
                    snakeGoodsGreen-=5;
                    Down1[Down1num].triggered=true;
                    }
                }
            } 
            for(let Down2num=0;Down2num<Down2.length;Down2num++)
            {
                if(equalpositions(snakehead,Down2[Down2num]))
                {
                if(!Down2[Down2num].triggered)
                    {snakeOilGreen-=2;
                       Down2[Down2num].triggered=true;
                    }
                }
            } 
        }
    
}

