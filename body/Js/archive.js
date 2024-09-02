/*
 * @Author: 699574 3331908788@qq.com
 * @Date: 2024-08-31 19:56:50
 * @LastEditors: 699574 3331908788@qq.com
 * @LastEditTime: 2024-08-31 20:25:50
 * @FilePath: \undefinedc:\Users\win11\Desktop\web\web-assignment\body\Js\archive.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE   
 */
// num是决策编号 son是子页面的编号 prior是之前的决策
let gameData = {
    prior: ['1A_1_2B_1', 'situation3_1']
};
// 保存数据到指定的存档ID
function saveData(archiveId) {
    // 将 gameData 序列化成 JSON 字符串并保存到 localStorage
    localStorage.setItem(archiveId, JSON.stringify(gameData));
    alert(`数据已保存到 ${archiveId}`);
    var save1 = JSON.parse(localStorage.getItem("save1"));
    var save2 = JSON.parse(localStorage.getItem("save2"));
    var save3 = JSON.parse(localStorage.getItem("save3"));
    var save4 = JSON.parse(localStorage.getItem("save4"));
    if (save1) {
        document.getElementById("save_time_auto").innerHTML = file_auto.save_time;
        document.getElementById("save_bg_auto").style.backgroundImage=file_auto.back_ground;
        document.getElementById("save_text_auto").innerHTML = file_auto.now_text;
    }
    if (save2) {
        document.getElementById("save_time_1").innerHTML = file_1.save_time;
        document.getElementById("save_bg_1").style.backgroundImage=file_1.back_ground;
        document.getElementById("save_text_1").innerHTML = file_1.now_text;
    }
    if (save3) {
        document.getElementById("save_time_2").innerHTML = file_2.save_time;
        document.getElementById("save_bg_2").style.backgroundImage=file_2.back_ground;
        document.getElementById("save_text_2").innerHTML = file_2.now_text;
    }
    if (save4) {
        document.getElementById("save_time_3").innerHTML = file_3.save_time;
        document.getElementById("save_bg_3").style.backgroundImage=file_3.back_ground;
        document.getElementById("save_text_3").innerHTML = file_3.now_text;
    }
}
// 从指定的存档ID加载数据
function loadData(archiveId) {
    const data = localStorage.getItem(archiveId);
    if (data) {
        gameData = JSON.parse(data);
        next = story[gameData];
        window.next = next;
        alert(`数据已从 ${archiveId} 加载: ${JSON.stringify(gameData)}`);
    } else {
        alert('未找到存档数据。');
    }
}
// 添加事件监听器到所有存档按钮
document.addEventListener('DOMContentLoaded', () => {
    // 获取所有保存按钮
    const saveButtons = document.querySelectorAll('[data-save]');
    saveButtons.forEach(button => {
        button.addEventListener('click', function () {
            const archiveId = this.getAttribute('data-archive-id');
            saveData(archiveId);
        });
    });
    // 获取所有加载按钮
    const loadButtons = document.querySelectorAll('[data-load]');
    loadButtons.forEach(button => {
        button.addEventListener('click', function () {
            const archiveId = this.getAttribute('data-archive-id');
            loadData(archiveId);
        });
    });
});
