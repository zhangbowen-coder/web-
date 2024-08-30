class html_refresher
{
	clear()
	{
		let content_box=document.querySelector(".content-box");
		let child=content_box.querySelector("div");
		while(child!=null)
		{
			content_box.removeChild(child);
			child=content_box.querySelector("div");
		}
		child=content_box.querySelector("video");
		while(child!=null)
		{
			content_box.removeChild(child);
			child=content_box.querySelector("video");
		}
		child=content_box.querySelector("source");
		while(child!=null)
		{
			content_box.removeChild(child);
			child=content_box.querySelector("source");
		}
	}
};

class dom_node
{
	constructor(children_,type_,attr_)
	{
		this.children=children_;
		this.type=type_;
		this.attr=attr_;
	}
};

function form(node,html_node)//node:当前节点(dom_node类对象);html_node:当前节点对应的html节点(Element/Node类对象)
{
	for(let i=0;i<node.children.length;i++)
	{
		let child_element=document.createElement(node.children[i].type);
		for(let attr in node.children[i].attr)
			child_element.setAttribute(attr,node.children[i].attr[attr]);
		html_node.appendChild(child_element);
		form(node.children[i],child_element);
	}
}

var btn1_node=new dom_node
(
	[],
	"div",
	{"id":"btn1","class":"button setting","title":"设置"}
);

var btn2_node=new dom_node
(
	[],
	"div",
	{"id":"btn2","class":"button look-back","title":"前情回顾"}
);

var btn3_node=new dom_node
(
	[],
	"div",
	{"id":"btn3","class":"button pass","title":"跳过"}
);

var button_box_node=new dom_node
(
	[btn1_node,btn2_node,btn3_node],
	"div",
	{"class":"button-box"}
);

var slide_one_node=new dom_node
(
	[],
	"div",
	{"class":"slide-one"}
);

var slide_two_node=new dom_node
(
	[],
	"div",
	{"class":"slide-two"}
);

var punch_node=new dom_node
(
	[],
	"div",
	{"class":"punch"}
);

var slide_box_node=new dom_node
(
	[slide_one_node,slide_two_node,punch_node],
	"div",
	{"class":"slide-box"}
);

var top_node=new dom_node
(
	[button_box_node,slide_box_node],
	"div",
	{"class":"top"}
);

var character_node=new dom_node
(
	[],
	"div",
	{"class":"character"}
);

var dia_node=new dom_node
(
	[],
	"div",
	{"class":"dia"}
);

var continue_node=new dom_node
(
	[],
	"div",
	{"class":"continue"}
);

var dia_box_node=new dom_node
(
	[dia_node,continue_node],
	"div",
	{"class":"dia-box"}
);

var name_box_node=new dom_node
(
	[],
	"div",
	{"class":"name-box"}
);

var bottom_node=new dom_node
(
	[character_node,dia_box_node,name_box_node],
	"div",
	{"class":"bottom"}
);

//以下为单人物对话的html
var content_box_single_node=new dom_node
(
	[top_node,bottom_node],
	"div",
	{"class":"content-box"}
);

//以下为无人物的html
var content_box_none_node=new dom_node
(
	[top_node,dia_box_node],
	"div",
	{"class":"content-box"}
);


//以下为抉择页面的html,answer_box要现填
var question_box_node=new dom_node
(
	[],
	"div",
	{"class":"question-box"}
);

var ques_ans_node=new dom_node
(
	[question_box_node],
	"div",
	{"class":"ques-ans"}
);

var content_box_choice_node=new dom_node
(
	[top_node,ques_ans_node],
	"div",
	{"class":"content-box"}
);


//以下为结局页面html
var content_node=new dom_node
(
	[],
	"div",
	{"class":"content"}
);

var content_box_ending_node=new dom_node
(
	[content_node],
	"div",
	{"class":"content-box"}
);


//以下为过场动画的html
var button_node=new dom_node
(
	[],
	"div",
	{"class":"btn"}
);

var source1=new dom_node
(
	[],
	"source",
	{"id":1}
);

var source2=new dom_node
(
	[],
	"source",
	{"id":2}
);

var video_node=new dom_node
(
	[source1,source2],
	"video",
	{"class":"video"}
);

var content_box_cut_node=new dom_node
(
	[video_node,button_node],
	"div",
	{"class":"content-box"}
);

//以下为报纸页面的html
var button_node=new dom_node
(
	[],
	"div",
	{"class":"button"}
);

var paper_box_node=new dom_node
(
	[button_node],
	"div",
	{"class":"paper-box"}
);

var content_box_paper_node=new dom_node
(
	[paper_box_node],
	"div",
	{"class":"content-box"}
);

/*
	refresher:清空页面
	form:根据需求装载html
	listener_adder:添加事件
*/

var refresher=new html_refresher();
var content_box=document.querySelector(".content-box");

var forms=
{
	"single":content_box_single_node,
	"none":content_box_none_node,
	"choice":content_box_choice_node,
	"cut":content_box_cut_node,
	"ending":content_box_ending_node,
	"paper":content_box_paper_node,
};

var css=
{
	"single":"../css/dialog-single-stand.css",
	"none":"../css/text-stand.css",
	"choice":"../css/choice-stand.css",
	"cut":"../css/cut-stand.css",
	"ending":"../css/ending.css",
	"paper":"../css/paper.css"
}

var story=
{
	0: {
		"type":"before",
		"content":[],
		"bgi":"",
		"next":1,
		ptr:0
	},
	1:{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			[0,"dasdasd","dasdas"],
			[1,"asdasdasd","dawdas"],
			[0,"dasdasd","dasdasd"]
		],
		/*
			关于content:
			如果是对话页面，则是一个个[名字,要说的话]，按先后顺序排列;
			如果是旁白，就是旁白的文字的字符串，也按先后顺序写。
			如果是抉择页面，也是文字的字符串，但是问题放在第一个（数组编号0），选项依次编号，先后排列。
			如果是过场动画，就是[视频类型的MIME（字符串）,视频相对路径（字符串）]
			如果是结局，就是结局名，文字
		*/
		"bgi":"../../resources/游戏背景图/报纸.jpg",//背景图片路径,没有就是空串
		"chara":["../../resources/人物立绘/中国士兵.jpg","../../resources/人物立绘/李德胜.png"],//人物立绘路径，没有就是空串
		"next":[2],//下个节点的编号
		"ptr":0
	},
	2:{
		"type":"none",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			"dadadafdsfasfasdfsadfsfsdf"
		],
		/*
			关于content:
			如果是对话页面，则是一个个[名字,要说的话]，按先后顺序排列;
			如果是旁白，就是旁白的文字的字符串，也按先后顺序写。
			如果是抉择页面，也是文字的字符串，但是问题放在第一个（数组编号0），选项依次编号，先后排列。
			如果是过场动画，就是[视频类型的MIME（字符串）,视频相对路径（字符串）]
			如果是结局，就是结局名，文字
		*/
		"bgi":"../../resources/游戏背景图/报纸.jpg",//背景图片路径,没有就是空串
		"next":[3],//下个节点的编号
		"ptr":0
	},
	3:{
		"type":"choice",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			"dasdasdsad",
			"dasdasd",
			"gffdhgsdf",
			"fsdafasd"
		],
		/*
			关于content:
			如果是对话页面，则是一个个[名字,要说的话]，按先后顺序排列;
			如果是旁白，就是旁白的文字的字符串，也按先后顺序写。
			如果是抉择页面，也是文字的字符串，但是问题放在第一个（数组编号0），选项依次编号，先后排列。
			如果是过场动画，就是[视频类型的MIME（字符串）,视频相对路径（字符串）]
			如果是结局，就是结局名，文字
		*/
		"bgi":"../../resources/游戏背景图/报纸.jpg",//背景图片路径,没有就是空串
		"next":[4,5,6],//下个节点的编号
		"ptr":0
	},
	4:{
		"type":"cut",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			["video/mp4","../../resources/视频/决策2C进入决策5选B.mp4"],
			["video/mp4","../../resources/视频/决策2C进入决策5选B.mp4"]
		],
		/*
			关于content:
			如果是对话页面，则是一个个[名字,要说的话]，按先后顺序排列;
			如果是旁白，就是旁白的文字的字符串，也按先后顺序写。
			如果是抉择页面，也是文字的字符串，但是问题放在第一个（数组编号0），选项依次编号，先后排列。
			如果是过场动画，就是[视频类型的MIME（字符串）,视频相对路径（字符串）]
			如果是结局，就是结局名，文字
		*/
		"next":[5],//下个节点的编号
		"ptr":0
	},
	5:{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			"dadasdas",
			"dadasdasd"
		],
		/*
			关于content:
			如果是对话页面，则是一个个[名字,要说的话]，按先后顺序排列;
			如果是旁白，就是旁白的文字的字符串，也按先后顺序写。
			如果是抉择页面，也是文字的字符串，但是问题放在第一个（数组编号0），选项依次编号，先后排列。
			如果是过场动画，就是[视频类型的MIME（字符串）,视频相对路径（字符串）]
			如果是结局，就是结局名，文字
		*/
		"next":[5],//下个节点的编号
		"ptr":0
	},
};

var now=story[0],next=story[1];//记录现在是那个故事节点。

var trans=function()
{
	if(now.ptr==now.content.length)
	{
		let content_box=document.querySelector(".content-box");
		if(now.type!=next.type)
		{
			//alert(next.type);
			refresher.clear();
			form(forms[next.type],content_box);
			let link=document.querySelector("link");
			link.setAttribute("href",css[next.type]);
		}
		now=next;
		content_box.style.backgroundImage="url("+next.bgi+")";
		let dia,name_b,text,name,dia_box;
		switch(next.type)
		{
			case "single":
				dia=document.querySelector(".dia");
				name_b=document.querySelector(".name-box");
				name=document.createTextNode(next.content[0][1]);
				text=document.createTextNode(next.content[0][2]);
				dia.append(text);
				name_b.append(name);
				let character=document.querySelector(".character");
				character.style.backgroundImage="url("+next.chara[next.content[0][0]]+")";
				next.ptr=1;
				dia_box=document.querySelector(".dia-box");
				dia_box.addEventListener
				(
					"click",
					function()
					{
						if(now.ptr==now.content.length)
							next=story[now.next[0]];
						trans();
					}
				);
				break;
			case "none":
				dia=document.querySelector(".dia-box");
				text=document.createTextNode(next.content[0]);
				dia.append(text);
				next.ptr=1;
				dia_box=document.querySelector(".dia-box");
				dia_box.addEventListener
				(
					"click",
					function()
					{
						if(now.ptr==now.content.length)
							next=story[now.next[0]];
						trans();
					}
				);
				break;
			case "choice":
				let question_box=document.querySelector(".question-box");
				let ques_ans=document.querySelector(".ques-ans");
				text=document.createTextNode(next.content[0]);
				question_box.append(text);
				for(let i=1;i<next.content.length;i++)
				{
					let child=document.createElement("div");
					text=document.createTextNode(next.content[next.ptr]);
					ques_ans.appendChild(child);
					child.setAttribute("class","answer-box");
					child.setAttribute("id",next.ptr-1)
					child.append(text);
					child.addEventListener
					(
						"click",
						function()
						{
							next=story[now.next[i-1]];
							trans();
						}
					);
				}
				next.ptr=next.content.length;
				break;
			case "cut":
				let sources=document.querySelectorAll("source");
				sources[0].setAttribute("type",next.content[0][0]); 
				sources[0].setAttribute("src",next.content[0][1]);
				sources[1].setAttribute("type",next.content[1][0]); 
				sources[1].setAttribute("src",next.content[1][1]);
				next.ptr=2;
				let video=document.querySelector("video");
				video.addEventListener
				(
					"ended",
					function()
					{
						//alert(now.next[0]);
						next=story[now.next[0]];
						trans();
					}
				);
				video.setAttribute("autoplay","true");
				video.setAttribute("muted","true");
				let btn=document.querySelector(".btn");
				btn.addEventListener
				(
					"click",
					function()
					{
						next=story[now.next[0]];
						trans();
					}
				);
				break;
			case "ending":
				let content=document.querySelector(".content");
				text=document.createTextNode(now.content[1]);
				content.append(text);
				content.addEventListener
				(
					"click",
					function()
					{
						let name="达成结局: "+now.content[0];
						alert(name);
						window.open("./game.html","_self");
					}
				);
				break;
		}
	}
	else
	{
		let dia=document.querySelector(".dia");
		let name_b=document.querySelector(".name-box");
		dia.innerHTML=now.content[now.ptr][2];
		name_b.innerHTML=now.content[now.ptr][1];
		let character=document.querySelector(".character");
		character.style.backgroundImage="url("+now.chara[now.content[now.ptr][0]]+")";
		now.ptr++;
	}
}

trans();