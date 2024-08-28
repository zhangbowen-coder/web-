/*
 * @Author: 699574 3331908788@qq.com
 * @Date: 2024-08-26 15:35:21
 * @LastEditors: 699574 3331908788@qq.com
 * @LastEditTime: 2024-08-26 15:37:49
 * @FilePath: \undefinedc:\Users\win11\Desktop\web\game\snake\input.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let inputdirection = {x:0,y:1};
let lastinputdirection = {x:0,y:1};

window.addEventListener('keydown', (event) => {
    if (event.key === "ArrowUp") {
        inputdirection={x:-1,y:0};
 }else if(event.key === "ArrowDown"){
    inputdirection = {x:1,y:0};
 }else if(event.key === "ArrowRight"){
    inputdirection={x:0,y:1};
 }else if(event.key === "ArrowLeft" ){
    inputdirection={x:0,y:-1};
 }
})

const getinputdirection = () => {
    lastinputdirection= inputdirection;
    return inputdirection;
}
