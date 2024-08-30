var body_node=new dom_node
(
	null,
	[content_box_node],
	"body",
	{}
);

var content_box_node=new dom_node
(
	body_node,
	[top_node,bottom_node],
	"div",
	{"class":"content-box"}
);

var top_node=new dom_node
(
	content_box_node,
	[button_box_node,silde_box_node],
	"div",
	{"class":"top"}
);

var button_box_node=new dom_node
(
	top_node,
	[btn1_node,btn2_node,btn3_node],
	"div",
	{"class":"button-box"}
);

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

var slide_box_node=new dom_node
(
	top_node,
	[slide_one_node,slide_two_node,punch_node],
	"div",
	{"class":"slide-box"}
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

var bottom_node=new dom_node
(
	content_box_node,
	[character_node,dia_box_node,name_box_node],
	"div",
	{"class":"bottom"}
);

var character_node=new dom_node
(
	bottom_node,
	[],
	"div",
	{"class":"character"}
);

var dia_box_node=new dom_node
(
	bottom_node,
	[dia_node,continue_node],
	"div",
	{"class":"dia-box"}
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

var name_box_node=new dom_node
(
	bottom_node,
	[],
	"div",
	{"class":"name-box"}
);