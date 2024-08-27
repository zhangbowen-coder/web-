let food={x:1,y:1};
const expansion=1;
const oil=100;
const score=100;

const updatefood = () => {
    expandsnake(expansion);
    oil-=1;
  }

const drawfood = (gameboard) => {
    const foodelement=document.createElement("div");
    
    foodelement.style.gridRowStart =food.x;
    foodelement.style.gridColumnStart=food.y;
    foodelement.classList.add("food");
    gameboard.appendChild(foodelement);
}

const getrandomfoodposition = () => {
    let newfoodposition = randomGridPosition();
    while(onsnake(newfoodposition)){
        newfoodposition=randomGridPosition();
    }
    return newfoodposition;

}