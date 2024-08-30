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
	}
};

class dom_node
{
	constructor(father_,children_,type_,attr_)
	{
		this.father=father_;
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
		html_node.append(child_element);
		form(node.children[i],child_element);
	}
}

var btn1_node=new dom_node
(
	button_box_node,
	[],
	"div",
	{"id":"btn1","class":"button setting","title":"设置"}
);

var btn2_node=new dom_node
(
	button_box_node,
	[],
	"div",
	{"id":"btn2","class":"button look-back","title":"前情回顾"}
);

var btn3_node=new dom_node
(
	button_box_node,
	[],
	"div",
	{"id":"btn3","class":"button pass","title":"跳过"}
);

var button_box_node=new dom_node
(
	top_node,
	[btn1_node,btn2_node,btn3_node],
	"div",
	{"class":"button-box"}
);

var slide_one_node=new dom_node
(
	slide_box_node,
	[],
	"div",
	{"class":"slide-one"}
);

var slide_two_node=new dom_node
(
	slide_box_node,
	[],
	"div",
	{"class":"slide-two"}
);

var punch_node=new dom_node
(
	slide_box_node,
	[],
	"div",
	{"class":"punch"}
);

var slide_box_node=new dom_node
(
	top_node,
	[slide_one_node,slide_two_node,punch_node],
	"div",
	{"class":"slide-box"}
);

var top_node=new dom_node
(
	content_box_node,
	[button_box_node,slide_box_node],
	"div",
	{"class":"top"}
);

var character_node=new dom_node
(
	bottom_node,
	[],
	"div",
	{"class":"character"}
);

var dia_node=new dom_node
(
	dia_box_node,
	[],
	"div",
	{"class":"dia"}
);

var continue_node=new dom_node
(
	dia_box_node,
	[],
	"div",
	{"class":"continue"}
);

var dia_box_node=new dom_node
(
	bottom_node,
	[dia_node,continue_node],
	"div",
	{"class":"dia-box"}
);

var name_box_node=new dom_node
(
	bottom_node,
	[],
	"div",
	{"class":"name-box"}
);

var bottom_node=new dom_node
(
	content_box_node,
	[character_node,dia_box_node,name_box_node],
	"div",
	{"class":"bottom"}
);

var content_box_node=new dom_node
(
	body_node,
	[top_node,bottom_node],
	"div",
	{"class":"content-box"}
);

var body_node=new dom_node
(
	null,
	[content_box_node],
	"body",
	{}
);

var body=document.querySelector("body");
form(body_node,body);