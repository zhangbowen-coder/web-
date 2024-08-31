// num是决策编号 son是子页面的编号 prior是之前的决策
let gameData = {
    num: 100,
    son: 10,
    prior: ['1A_1_2B_1', 'situation3_1']
};
// 保存数据到指定的存档ID
function saveData(archiveId) {
    // 将 gameData 序列化成 JSON 字符串并保存到 localStorage
    localStorage.setItem(archiveId, JSON.stringify(gameData));
    alert(`数据已保存到 ${archiveId}`);
}
// 从指定的存档ID加载数据
function loadData(archiveId) {
    // 从 localStorage 获取数据
    const data = localStorage.getItem(archiveId);
    if (data) {
        gameData = JSON.parse(data);
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
