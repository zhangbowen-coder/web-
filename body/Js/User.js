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
