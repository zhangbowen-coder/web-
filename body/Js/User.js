var now;
function setInterval()
{
	var time=new Date();
	time.setHours(time.getHours()+8);
	
	time=time.toISOString();
	
	time=time.replace('T',' ');
	time=time.substr(0,19);
	
	now=time;
}
function getTime(){
    setInterval();
	return now;
}

function CheckRegisterInputBox()
{
    var x = document.forms["RegisterForm"]["username"].value;
    var y = document.forms["RegisterForm"]["password"].value;
    if ((x == null || x == "")||(y == null || y == "")) 
    {
        alert("不能输入空的内容！")
        return false;
    }
    return true;
}

function CheckLoginInputBox()
{
    var x = document.forms["LoginForm"]["loginusername"].value;
    var y = document.forms["LoginForm"]["loginpassword"].value;
    if ((x == null || x == "")||(y == null || y == "")) 
    {
        alert("不能输入空的内容！")
        return false;
    }
    return true;
}

function register()
{
    if(CheckRegisterInputBox())
    {
        var username = document.getElementById("username").value;
        var pass = localStorage.getItem(username);
        if(pass!=null) 
        {
            if(pass[0]!='{')
            { 
                localStorage.removeItem(username);
                pass=null;
            }
        }
        var JSON_pass = JSON.parse(pass);
        if(pass!=null) var password = JSON_pass.password;
        if(password==null)
        save();
        else
        alert("用户名已经存在！请换一个名字");
    }
}

function find( password ) //判断密码是否正确
    {  
    var input_password=document.getElementById("loginpassword").value;
    console.log(input_password);
    console.log(password);
    if(input_password==password) return true;
    return false;
    }

function save() // 初次注册，创建用户的类。
    {  
        var username = document.getElementById("username").value;  
        var password = document.getElementById("password").value; 
        var AgainPassword = document.getElementById("AgainPassword").value; 
        if(password!=AgainPassword) 
        {
            alert("请输入相同的密码！");
            return;
        }
        let user = new User(username,password);
        var Json_user = JSON.stringify(user);
        localStorage.setItem(username, Json_user);
        alert("注册成功！");
        window.location.href="./login.html";
    }

function login()
{
    if(CheckLoginInputBox())
    {
        var username = document.getElementById("loginusername").value;
        var pass = localStorage.getItem(username);
         if(pass!=null) 
        {
             if(pass[0]!='{')
            { 
                    localStorage.removeItem(username);
                    pass=null;
            }
        }
        var JSON_pass = JSON.parse(pass);
        if(pass!=null) 
        {
            var password = JSON_pass.password; 
            var User_pass = new User(username,password,JSON_pass);
        }
            if(pass==null)
                alert("用户名不存在，请注册！");
            else if(find(password))
            {
                alert("登录成功！");
                window.location.href='../../index.html';
            }
            else 
            {alert("密码错误！请重试");
            }
        }
    }

function back()
{
    window.location.href="./login.html";
}

class User
{

    constructor(username, password, _JSON)
    {
        this.username=username;
        this.password=password;
        this.saveArray=new Array();
        this.achievementArray=new Array();
        if(_JSON!=null)
        {
            for(let i=0;i<_JSON.saveArray.length;i++)
            {
                // this.saveArray[i]=new cSave(_JSON.saveArray[i].saveDate,_JSON.saveArray[i].nodeId,_JSON.saveArray[i].choices);
                if(_JSON.saveArray[i]!=null) this.saveArray[i] = new Save(_JSON.saveArray[i]);
                else this.saveArray[i] = null;
            }
            for(let i=0;i<_JSON.achievementArray.length;i++)
            {
                this.achievementArray[i]=_JSON.achievementArray[i];
            }
        }
    }
}

function Save(section = '0', page = '0') {
    var GameAddress = '../主体/sites/' + window.location.href.split('/sites/')[1]; // 更新了页面保存逻辑，可以减少出错的概率
    var index = window.localStorage.userid;
    if (index == -1 || index == undefined) {
        alert("未能确定当前用户状态，保存失败")
        return;
    }
    var array = JSON.parse(window.localStorage.userArr);
    array[index].GameName = GameName;
    array[index].GameAddress = GameAddress;
    window.localStorage.userArr = JSON.stringify(array);
    alert(GameName + "保存成功");
}

window.onload = function () {
    var array = JSON.parse(window.localStorage.userArr);
    var index = window.localStorage.userid;
    document.getElementById("config_h1").innerHTML = array[index].username;
    document.getElementById("save_h1").innerHTML = array[index].username;
    var ach = 0;
    if (array[index].achi1 == 1) ach++;
    if (array[index].achi2 == 1) ach++;
    if (array[index].achi3 == 1) ach++;
    if (array[index].achi4 == 1) ach++;
    if (array[index].achi5 == 1) ach++;
    if (array[index].achi6 == 1) ach++;
    if (array[index].achi7 == 2) ach++;
    if (array[index].achi1 + array[index].achi2 + array[index].achi3 + array[index].achi4 == 4) ach++;
    document.getElementById("achievement_").innerHTML = ach + "/8";
}

function saveStory(archiveName) {
    const storyJSON = JSON.stringify(story);
    localStorage.setItem(`gameArchive_${archiveName}`, storyJSON);
  }
  
  // 读档函数：从指定的存档名称读取剧情
  function loadStory(archiveName) {
    const savedStoryJSON = localStorage.getItem(`gameArchive_${archiveName}`);
    if (savedStoryJSON) {
      story = JSON.parse(savedStoryJSON);
    }
  }

  function deleteArchive(archiveName) {
    localStorage.removeItem(`gameArchive_${archiveName}`);
  }

  function get_now_file(){
    var strUrl=window.location.href;
    var arrUrl=strUrl.split("/");
    var strPage=arrUrl[arrUrl.length-1];
    if(strPage.indexOf("?")>-1){
        var pageName=strPage.split("?");
        strPage=pageName[0];
    }
    return strPage;
}

function refresh_now_data(){
    var a=get_now_file();
    var now_data=JSON.parse(localStorage.getItem("now_data"));
    if(!now_data){
        now_data=new Object();
    }
    now_data.url=a;
    localStorage.setItem("now_data",JSON.stringify(now_data));
}

function save_to(file_name) {
    var now_data=JSON.parse(localStorage.getItem("now_data"));
    var myDate=new Date;
    now_data.save_time=myDate.toLocaleString();
    localStorage.setItem("now_data",JSON.stringify(now_data));
    save_user_data(file_name, localStorage.getItem("now_data"));
    var file_auto = JSON.parse(localStorage.getItem("file_auto"));
    var file_1 = JSON.parse(localStorage.getItem("file_1"));
    var file_2 = JSON.parse(localStorage.getItem("file_2"));
    var file_3 = JSON.parse(localStorage.getItem("file_3"));
    if (file_auto) {
        document.getElementById("save_time_auto").innerHTML = file_auto.save_time;
        document.getElementById("save_bg_auto").style.backgroundImage=file_auto.back_ground;
        document.getElementById("save_text_auto").innerHTML = file_auto.now_text;
    }
    if (file_1) {
        document.getElementById("save_time_1").innerHTML = file_1.save_time;
        document.getElementById("save_bg_1").style.backgroundImage=file_1.back_ground;
        document.getElementById("save_text_1").innerHTML = file_1.now_text;
    }
    if (file_2) {
        document.getElementById("save_time_2").innerHTML = file_2.save_time;
        document.getElementById("save_bg_2").style.backgroundImage=file_2.back_ground;
        document.getElementById("save_text_2").innerHTML = file_2.now_text;
    }
    if (file_3) {
        document.getElementById("save_time_3").innerHTML = file_3.save_time;
        document.getElementById("save_bg_3").style.backgroundImage=file_3.back_ground;
        document.getElementById("save_text_3").innerHTML = file_3.now_text;
    }
}
function go_back() {
    var now_data = JSON.parse(localStorage.getItem("now_data"));
    location.assign(now_data.url);
}

function load(file_name){
    localStorage.setItem("now_data",localStorage.getItem(file_name));
    var now_data=JSON.parse(localStorage.getItem("now_data")); 
    location.assign(now_data.url);
}
