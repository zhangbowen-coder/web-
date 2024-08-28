let food={x:1,y:1};
const expansion=1;
const score=100;

const updatefood = () => {
    if(speedgreen===1)
    {expandsnake(expansion);}
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

const UpdatePanels = () =>{
    document.getElementById('snakeOilYellow').innerText= getsnakeOilYellow();
    document.getElementById('snakeGoodsYellow').innerText= getsnakeGoodsYellow();
    document.getElementById('snakeOilGreen').innerText= getsnakeOilGreen();
    document.getElementById('snakeGoodsGreen').innerText= getsnakeGoodsGreen();
    document.getElementById('snakeOilBlue').innerText= getsnakeOilBlue();
    document.getElementById('snakeGoodsBlue').innerText= getsnakeGoodsBlue();
    document.getElementById('sum').innerText=getsum();
}

const getsnakeOilYellow = () =>{
    return snakeOilYellow;
}

const getsnakeGoodsYellow = () =>{
    return snakeGoodsYellow;
}

const getsnakeOilGreen = () =>{
    return snakeOilGreen;
}

const getsnakeGoodsGreen = () =>{
    return snakeGoodsGreen;
}

const getsnakeOilBlue = () =>{
    return snakeOilBlue;
}

const getsnakeGoodsBlue = () =>{
    return snakeGoodsBlue;
}

const getsum = () =>{
    sum=getsnakeGoodsBlue()+getsnakeGoodsGreen()+getsnakeGoodsYellow();
    return sum;
}