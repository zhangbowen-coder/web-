/*
 * @Author: 699574 3331908788@qq.com
 * @Date: 2024-08-26 15:35:21
 * @LastEditors: 699574 3331908788@qq.com
 * @LastEditTime: 2024-08-27 11:06:37
 * @FilePath: \undefinedc:\Users\win11\Desktop\web\game\snake\grid..js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const gridsize=21;

const randomGridPosition = () => {
    return{
        x:Math.floor(Math.random() * gridsize) +1,
        y:Math.floor(Math.random() * gridsize) +1
    }
}

const isoutofbounds = (position) => {
   return position.x<1||position.x>gridsize||position.y<1||position.y>gridsize;
}