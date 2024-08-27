const obstacles = [
      { x: 18,y:3},{ x: 18,y:4},{ x: 18,y:5},{ x: 18,y:6},{ x: 18,y:7},{ x: 18,y:8},{ x: 18,y:9},{ x: 18,y:10},{ x: 18,y:11},{ x: 18,y:12},{ x: 18,y:13},{ x: 18,y:14},{ x: 18,y:15},{ x: 18,y:16},{ x: 18,y:17},{ x: 18,y:18},
      { x: 17,y:10},{ x: 17,y:9},{ x: 17,y:8},{ x: 17,y:11},{ x: 17,y:12},{ x: 17,y:13},{ x: 17,y:14},{ x: 17,y:15},{ x: 17,y:16},{ x: 17,y:17},{ x: 17,y:18},
      { x: 16,y:8},{ x: 16,y:9},{ x: 16,y:10},{ x: 16,y:11},{ x: 16,y:12},{ x: 16,y:13},
      { x: 13, y: 5},{ x: 13, y: 4},{ x: 13, y: 8},{ x: 13, y: 9},{ x: 13, y: 10},{ x: 13, y: 15},{ x: 13, y: 16},
      { x: 12, y: 5},{ x: 12, y: 4},{ x: 12, y: 8},{ x: 12, y: 9},{ x: 12, y: 10},{ x: 12, y: 11},{ x: 12, y: 15},{ x: 12, y: 16},
      { x: 11, y: 8},{ x: 11, y: 9},{ x: 11, y: 10},{ x: 11, y: 11},{ x: 11, y: 15},{ x: 11, y: 16},
      { x: 10, y: 8},{ x: 10, y: 9},{ x: 10, y: 10},{ x: 10, y: 15},{ x: 10, y: 16},
      { x: 9, y: 3},{ x: 9, y: 4},{ x: 9, y: 5},{ x: 9, y: 6},{ x: 9, y: 7},{ x: 9, y: 8},{ x: 9, y: 9},{ x: 9, y: 10},
      { x: 8, y: 3},{ x: 8, y: 4},{ x: 8, y: 5},{ x: 8, y: 6},{ x: 8, y: 7},{ x: 8, y: 8},{ x: 8, y: 9},{ x: 8, y: 10},{ x: 8, y: 14},{ x: 8, y: 15},{ x: 8, y: 18},
      { x: 7, y: 3},{ x: 7, y: 4},{ x: 7, y: 5},{ x: 7, y: 6},{ x: 7, y: 7},{ x: 7, y: 8},{ x: 7, y: 9},{ x: 7, y: 10},{ x: 7, y: 13},{ x: 7, y: 14},{ x: 7, y: 15},{ x: 7, y: 16},{ x: 7, y: 17},{ x: 7, y: 18},
      { x: 6, y: 3},{ x: 6, y: 4},{ x: 6, y: 5},{ x: 6, y: 6},{ x: 6, y: 7},{ x: 6, y: 8},{ x: 6, y: 9},{ x: 6, y: 10},{ x: 6, y: 13},{ x: 6, y: 14},{ x: 6, y: 15},{ x: 6, y: 16},{ x: 6, y: 17},{ x: 6, y: 18},
      { x: 5, y: 4},{ x: 5, y: 5},{ x: 5, y: 6},{ x: 5, y: 7},{ x: 5, y: 8},{ x: 5, y: 9},{ x: 5, y: 10},{ x: 5, y: 13},{ x: 5, y: 14},{ x: 5, y: 15},{ x: 5, y: 16},{ x: 5, y: 17},{ x: 5, y: 18},
      { x: 4, y: 13},{ x: 4, y: 14},{ x: 4, y: 15},{ x: 4, y: 16},{ x: 4, y: 17},{ x: 4, y: 18},
      { x: 3, y: 13},{ x: 3, y: 14},{ x: 3, y: 15},{ x: 3, y: 16},{ x: 3, y: 17},{ x: 3, y: 18},
      { x: 2, y: 4},{ x: 2, y: 5},{ x: 2, y: 6},{ x: 2, y: 7},{ x: 2, y: 8},{ x: 2, y: 9},{ x: 2, y: 10},{ x: 2, y: 11},{ x: 2, y: 12},{ x: 2, y: 13},{ x: 2, y: 14},{ x: 2, y: 15},{ x: 2, y: 16},{ x: 2, y: 17},{ x: 2, y: 18},
      { x: 1, y: 1},{ x: 1, y: 2},{ x: 1, y: 3},{ x: 1, y: 4},{ x: 1, y: 5},{ x: 1, y: 6},{ x: 1, y: 7},{ x: 1, y: 8},{ x: 1, y: 9},{ x: 1, y: 10},{ x: 1, y: 11},{ x: 1, y: 12},{ x: 1, y: 13},{ x: 1, y: 14},{ x: 1, y: 15},{ x: 1, y: 16},{ x: 1, y: 17},{ x: 1, y: 18},
];

const aimyellow = [
  {x:2,y:1},
];

const aimgreen = [
  {x:2,y:2},
];

const aimblue = [
  {x:2,y:3},
];

const Up1 = [
  {x:4,y:3},
  {x:5,y:3},{x:5,y:2},
  {x:8,y:16},{x:8,y:17},
  {x:9,y:15},{x:9,y:16},{x:9,y:17},{x:9,y:18},
  {x:11,y:4},
  {x:14,y:7},
  {x:15,y:1},
];

const Up2 = [
  {x:15,y:3},
  {x:16,y:3},
  {x:17,y:3},
];

const Down1 = [
  {x:3,y:3},
  {x:12,y:2},{x:12,y:3},
];

const Down2 = [
  {x:8,y:13}, 
  {x:10,y:17},
  {x:13,y:7},
];

    const createObstacles = (gameboard) => {
        for(let i=0;i<obstacles.length;i++){
            const obstacle=obstacles[i];
            const obstacleElement=document.createElement("div");
            obstacleElement.style.gridRowStart =obstacle.x;
            obstacleElement.style.gridColumnStart=obstacle.y;
            obstacleElement.classList.add("obstacle");
            gameboard.appendChild(obstacleElement);
    }};

    const createAims = (gameboard) =>{
      const aimblueElement=document.createElement("div");
      const aimyellowElement=document.createElement("div");
      const aimgreenElement=document.createElement("div");
      aimblueElement.style.row =aimblue[0].x;
      aimblueElement.style.column =aimblue[0].y;
      aimblueElement.classList.add("aimblue");
      gameboard.appendChild(aimblueElement);
      aimyellowElement.style.row =aimyellow[0].x;
      aimyellowElement.style.column =aimyellow[0].y;
      aimyellowElement.classList.add("aimyellow");
      gameboard.appendChild(aimyellowElement);
      aimgreenElement.style.row =aimgreen[0].x;
      aimgreenElement.style.column =aimgreen[0].y;
      aimgreenElement.classList.add("aimgreen");
      gameboard.appendChild(aimgreenElement);
    }

    const createUps = (gameboard) =>{
      for(let i=0;i<Up1.length;i++){
        const Up01=Up1[i];
        const Up1Element=document.createElement("div");
        Up1Element.style.gridRowStart =Up01.x;
        Up1Element.style.gridColumnStart=Up01.y;
        Up1Element.classList.add("Up1");
        gameboard.appendChild(Up1Element);
    }
    for(let i=0;i<Up2.length;i++){
      const Up02=Up2[i];
      const Up2Element=document.createElement("div");
      Up2Element.style.gridRowStart =Up02.x;
      Up2Element.style.gridColumnStart=Up02.y;
      Up2Element.classList.add("Up2");
      gameboard.appendChild(Up2Element);
  }
  }

    const createDowns = (gameboard) =>{
      for(let i=0;i<Down1.length;i++){
        const Down01=Down1[i];
        const Down1Element=document.createElement("div");
        Down1Element.style.gridRowStart =Down01.x;
        Down1Element.style.gridColumnStart=Down01.y;
        Down1Element.classList.add("Down1");
        gameboard.appendChild(Down1Element);
    }
     for(let i=0;i<Down2.length;i++){
       const Down02=Down2[i];
       const Down2Element=document.createElement("div");
       Down2Element.style.gridRowStart =Down02.x;
       Down2Element.style.gridColumnStart=Down02.y;
       Down2Element.classList.add("Down2");
       gameboard.appendChild(Down2Element);
    }
}
  
