class Save {
    constructor() {
        this.root = null;
        this.saveData = null;
        this.nowSaveData = null;
        this.loadSaveId = null;
    }

    autosave(saveData, root) {

        console.log(this.saveData);
        this.nowSaveData = saveData;
        this.root = root;
        var str = localStorage.getItem("saveData" + localStorage.getItem("username"));
        if(str == null || str == "") this.saveData = {};
        else this.saveData = JSON.parse(str);

        this.nowSaveData.tittle = "自动存档";
        this.nowSaveData.date = utils.getDate();

        this.saveData[0] = this.nowSaveData;
        localStorage.setItem("saveData" + localStorage.getItem("username"), JSON.stringify(this.saveData));
        achi.upd(this.nowSaveData.achi);
    }
    
    choicesave(saveData, root) {

        console.log(this.saveData);
        this.nowSaveData = saveData;
        this.root = root;
        var str = localStorage.getItem("saveData" + localStorage.getItem("username"));
        if(str == null || str == "") this.saveData = {};
        else this.saveData = JSON.parse(str);

        this.nowSaveData.tittle = "分支存档";
        this.nowSaveData.date = utils.getDate();

        this.saveData[1] = this.nowSaveData;
        localStorage.setItem("saveData" + localStorage.getItem("username"), JSON.stringify(this.saveData));
        achi.upd(this.nowSaveData.achi);
    }
    
    save() {
        this.nowSaveData.date = utils.getDate();
        this.saveData[this.loadSaveId] = this.nowSaveData;
        localStorage.setItem("saveData" + localStorage.getItem("username"), JSON.stringify(this.saveData));
        achi.upd(this.nowSaveData.achi);
        this.loadSaves();
    }
    load() {
        sessionStorage.setItem("nowLoadSaveData", JSON.stringify(this.saveData[this.loadSaveId]))
        location.href = this.root + "html/story.html";
    }
    delete() {
        this.saveData[this.loadSaveId] = null;
        localStorage.setItem("saveData" + localStorage.getItem("username"), JSON.stringify(this.saveData));
        this.loadSaves();
    }
    showMain() {
        this.loadSaveId = null;
        var saveLoadBox = $("<div id=\"saveLoadBox\"> <div id=\"saveInfBox\"> <div id=\"saveInfBoxLine1\", class=\"saveInfBoxLine\"> <div id=\"save0Inf\" class=\"saveInf\"> <img src=\"../../resources/image/logo/school.jpg\" alt=\"\" id=\"save0Img\" class=\"saveImg\"> <div id=\"save0InfTextBox\" id=\"saveInfTextBox\"> <div id=\"save0Tittle\" class=\"saveTittle\"></div> <div id=\"save0Intro\" class=\"saveIntro\"></div> </div> </div> <div id=\"save1Inf\" class=\"saveInf\"> <img src=\"../../resources/image/logo/school.jpg\" alt=\"\" id=\"save1Img\" class=\"saveImg\"> <div id=\"save1InfTextBox\" id=\"saveInfTextBox\"> <div id=\"save1Tittle\" class=\"saveTittle\"></div> <div id=\"save1Intro\" class=\"saveIntro\"></div> </div> </div> <div id=\"save2Inf\" class=\"saveInf\"> <img src=\"../../resources/image/logo/school.jpg\" alt=\"\" id=\"save2Img\" class=\"saveImg\"> <div id=\"save2InfTextBox\" id=\"saveInfTextBox\"> <div id=\"save2Tittle\" class=\"saveTittle\"></div> <div id=\"save2Intro\" class=\"saveIntro\"></div> </div> </div> </div> <div id=\"saveInfBoxLine1\", class=\"saveInfBoxLine\"> <div id=\"save3Inf\" class=\"saveInf\"> <img src=\"../../resources/image/logo/school.jpg\" alt=\"\" id=\"save3Img\" class=\"saveImg\"> <div id=\"save3InfTextBox\" id=\"saveInfTextBox\"> <div id=\"save3Tittle\" class=\"saveTittle\"></div> <div id=\"save3Intro\" class=\"saveIntro\"></div> </div> </div> <div id=\"save4Inf\" class=\"saveInf\"> <img src=\"../../resources/image/logo/school.jpg\" alt=\"\" id=\"save4Img\" class=\"saveImg\"> <div id=\"save4InfTextBox\" id=\"saveInfTextBox\"> <div id=\"save4Tittle\" class=\"saveTittle\"></div> <div id=\"save4Intro\" class=\"saveIntro\"></div> </div> </div> <div id=\"save5Inf\" class=\"saveInf\"> <img src=\"../../resources/image/logo/school.jpg\" alt=\"\" id=\"save5Img\" class=\"saveImg\"> <div id=\"save5InfTextBox\" id=\"saveInfTextBox\"> <div id=\"save5Tittle\" class=\"saveTittle\"></div> <div id=\"save5Intro\" class=\"saveIntro\"></div> </div> </div> </div> </div> <div id=\"saveButtons\"> <div id=\"saveButton\" class=\"saveButtonBox buttonBox\"> <div id=\"saveButText\" class=\"saveButtonText\">保存游戏</div> </div> <div id=\"loadButton\" class=\"saveButtonBox buttonBox\"> <div id=\"loadButText\" class=\"saveButtonText\">读取游戏</div> </div> <div id=\"deleteButton\" class=\"saveButtonBox buttonBox\"> <div id=\"deleteButText\" class=\"saveButtonText\">删除存档</div> </div> <div id=\"returnButton\" class=\"saveButtonBox buttonBox\"> <div class=\"saveButtonText\"> 返回前页</div> </div> </div> <div id=\"saveTips\"></div> </div>");
        
        $("body").append(saveLoadBox);
        this.loadSaves();
        $("#returnButton").bind("click", function() {
            $("#returnButton").unbind("click");
            $("#saveLoadBox").remove();
        }.bind(this));
        $(".saveInf").bind("click", function(e) {
            var target = $(e.target);
            while(target.attr("class") != "saveInf")
                target = target.parent();
            $(".saveInf").css("border-color", "rgba(0, 0, 0, 0)");
            target.css("border-color", "white");
            this.loadSaveId = target.attr("id")[4];
        }.bind(this));
        $("#saveButton").bind("click", function() {
            if(this.loadSaveId == null) {
                $("#saveTips")[0].innerHTML = "未选择存档";
                $("#saveTips").css("color", "red");
            }
            else if(this.loadSaveId == 0) {
                $("#saveTips")[0].innerHTML = "该存档为系统自动存档，请选择其他存档";
                $("#saveTips").css("color", "red");
            }
            else if(this.loadSaveId == 1) {
                $("#saveTips")[0].innerHTML = "该存档为系统自动存档，请选择其他存档";
                $("#saveTips").css("color", "red");
            }
            else if(this.saveData[this.loadSaveId] != null) {
                $("#saveTips")[0].innerHTML = "";
                dialog.show("该位置已经存在存档，是否覆盖？", this.root, function(flag) {
                    if(flag) {
                        $("#saveTips")[0].innerHTML = "保存成功";
                        $("#saveTips").css("color", "green");
                        this.save();
                    }
                }.bind(this));
            }
            else {
                $("#saveTips")[0].innerHTML = "保存成功";
                $("#saveTips").css("color", "green");
                this.save();
            }
        }.bind(this));
        $("#loadButton").bind("click", function() {
            if(this.loadSaveId == null) {
                $("#saveTips")[0].innerHTML = "未选择存档";
                $("#saveTips").css("color", "red");
            }
            else if(this.saveData[this.loadSaveId] == null) {
                $("#saveTips")[0].innerHTML = "所选存档为空";
                $("#saveTips").css("color", "red");
            }
            else {
                this.load();
            }
        }.bind(this));
        $("#deleteButton").bind("click", function() {
            if(this.loadSaveId == null) {
                $("#saveTips")[0].innerHTML = "未选择存档";
                $("#saveTips").css("color", "red");
            }
            else if(this.saveData[this.loadSaveId] == null) {
                $("#saveTips")[0].innerHTML = "所选存档为空";
                $("#saveTips").css("color", "red");
            }
            else if(this.loadSaveId == 0) {
                $("#saveTips")[0].innerHTML = "该存档为系统自动存档，请选择其他存档";
                $("#saveTips").css("color", "red");
            }
            else if(this.loadSaveId == 1) {
                $("#saveTips")[0].innerHTML = "该存档为系统自动存档，请选择其他存档";
                $("#saveTips").css("color", "red");
            }
            else {
                $("#saveTips")[0].innerHTML = "";
                dialog.show("是否要删除该存档？", this.root, function(flag) {
                    $("#saveTips")[0].innerHTML = "";
                    if(flag) {
                        this.delete();
                        $("#saveTips")[0].innerHTML = "删除成功";
                        $("#saveTips").css("color", "green");
                    }
                }.bind(this));
            }
        }.bind(this));
        
    }
    showLoad(root) {
        this.root = root;
        this.showMain();
        $("#saveButton").css("display", "none");
    }
    showSave(saveData, root) {
        console.log('111');
        this.nowSaveData = saveData;
        this.root = root;
        this.showMain();
        $("#loadButton").css("display", "none");
    }
    loadSaves() {

        console.log(this.saveData);
        var str = localStorage.getItem("saveData" + localStorage.getItem("username"));
        if(str == null || str == "") this.saveData = {};
        else this.saveData = JSON.parse(str);
        for(var i = 0; i < 6; ++i) {
            if(this.saveData[i] == null) {
                $("#save" + i + "Img").attr("src", this.root + "image/nodata.png");
                $("#save" + i + "Tittle")[0].innerHTML = "无存档";
                $("#save" + i + "Intro")[0].innerHTML = "";
            }
            else {
                if(typeof(this.saveData[i].image) == 'undefined')
                    $("#save" + i + "Img").attr("src", this.root + "image/nodata.png");
                else
                    $("#save" + i + "Img").attr("src", this.root + this.saveData[i].image);
                $("#save" + i + "Tittle")[0].innerHTML = this.saveData[i].tittle;
                $("#save" + i + "Intro")[0].innerHTML = this.saveData[i].date;
            }
            
        }
    }
};
var save = new Save();

document.getElementById('btn1').addEventListener('click',save111());
 const save111 =() =>{
 showSave(this.saveData, this.root);
 }