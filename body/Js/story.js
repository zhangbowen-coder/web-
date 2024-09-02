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

var story=
{
	//12、13、14
	0:{
		"type":"dsad",
		"content":[],
		"next":["cut"],
		"ptr":0
	},
	"j3_1":{
		"type":"choice",//页面类型，参见上面的forms变量的字符串
		"content":
			[
				"我军已将敌军包围，但敌人较为强大，军情紧急，我军是否按原定计划执行？",
				"尽全力迅速吃掉米军，防止敌军增援过来腹背受敌",
				"调整策略，重点进攻敌军兵力薄弱的新兴里和米陆战一师指挥部",
			],
		"bgi":"../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
		"ptr":0,
		"id":3,
		"next":
		[
			[
				["j3A_1_1"]
			],
			[
				["j3B_1_1"]
			]
		]
	},
	"j3A_1_1":{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
			[
				[0,"彭国辉","一鼓作气，我军现在士气正盛，继续全面进攻！防止米军增援导致腹背受敌！"],
			],
		"bgi":"../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
		"chara":["../../resources/人物立绘/彭国辉.png"],//人物立绘路径，没有就是空串
		"next":["j3A_1_2"],//下个节点的编号
		"ptr":0
	},
	"j3A_1_2":{
		"type":"cut",//页面类型，参见上面的forms变量的字符串
			"content":
			[
				["video/mp4","../../resources/视频/决策3选A.mp4"],
				["video/webm","../../resources/视频/决策3选A.webm"]
			],
			"next":["j3A_1_3"],//下个节点的编号
			"ptr":0
	},
	"j3A_1_3":{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
			[
				[0,"彭国辉","这是重大失误啊！没有考虑到后勤补给问题。（叹气）命令部队好好休整，注意敌军动向"],
			],
		"bgi":"../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
		"chara":["../../resources/人物立绘/彭国辉.png"],//人物立绘路径，没有就是空串
		"next":["j3A_1_4"],//下个节点的编号
		"ptr":0        
	},
	"j3A_1_4":{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
			[
				[0,"参谋","彭总，我军战线已经稳定，部队也正在休整，只是……"],
				[1,"彭国辉","只是什么？"],
			],
		"bgi":"../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
		"chara":["../../resources/人物立绘/中国参谋4.png","../../resources/人物立绘/彭国辉.png"],//人物立绘路径，没有就是空串
		"next":["j3A_1_5"],//下个节点的编号
		"ptr":0    
	},
	"j3A_1_5":{
		"type":"paper",//页面类型，参见上面的forms变量的字符串
		"content":
			[
				"../../resources/游戏背景图/报纸/和平提案.jpg",
				"敌人向我们政治施压"
			],
		"bgi":"../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
		"next":["j4_2"],//下个节点的编号  
		"ptr":0  
	},
	"j3A_1_6":{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
			[
				[0,"（看完停战条款）什么tnd停战协定，我看是卖国条约！（摇头）如果不继续制定作战方案，我国在政治上就要遭受损，只是这军队情况……"]
			],
		"bgi":"../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
		"chara":["../../resources/人物立绘/彭国辉.png"],//人物立绘路径，没有就是空串
		"next":["j4_2"],//下个节点的编号
		"ptr":0    
	},
	"j3B_1_1":{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
			[
				[0,"彭国辉","我军后勤补给严重短缺，而且敌人比想象中强大，全面进攻米军不一定能够拿下，需要调整策略，对敌军兵力薄弱的地方重点进攻！"],
			],
		"bgi":"../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
		"chara":["../../resources/人物立绘/彭国辉.png"],//人物立绘路径，没有就是空串
		"next":["j3B_1_2"],//下个节点的编号
		"ptr":0
	},
	"j3B_1_2":{
		"type":"cut",//页面类型，参见上面的forms变量的字符串
			"content":
			[
				["video/mp4","../../resources/视频/决策3选B.mp4"],
				["video/webm","../../resources/视频/webm格式/决策3选B.webm"],
			],
			"next":["j3B_1_3"],//下个节点的编号
			"ptr":0
	},
	"j3B_1_3":{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
			[
				[0,"参谋甲","彭总，杜鲁门说要投放原子弹，这……"],
				[1,"彭国辉","无妨，主席早就看出来，米国不敢投放原子弹，这只不过是一种核讹诈，不用理睬"],
				[2,"参谋乙","彭总你看，这是最新消息"]
			],
		"bgi":"../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
		"chara":["../../resources/人物立绘/中国参谋1（李云龙）.jpg","../../resources/人物立绘/彭国辉.png","../../resources/人物立绘/中国参谋2.png"],//人物立绘路径，没有就是空串
		"next":["j4_1"],//下个节点的编号  
		"ptr":0  
	},
	"j3B_1_4":{
		"type":"paper",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			"../../resources/游戏背景图/报纸/和平提案.jpg",
			"敌人向我们政治施压"
		],
		"bgi":"../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
		"next":["j4_1"],//下个节点的编号  
		"ptr":0  
	},
	"j4_1":{
		"type":"choice",//页面类型，参见上面的forms变量的字符串
		"content":
			[
				"面对十三国提案，如何决断？",
				"响应和平提案，利用时间整顿后勤，先停火在谈判",
				"质疑和平提案，率领军队跨过三八线，敌退我追",
			],
		"bgi":"../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
		"next":[
			[
				[[3,2],"j4A_1_1"],
			],
			[
				[[3,2],"j4B_1_1"]
			],	
		],
		"ptr":0,
		"id":4,
	},
	"j4_2":{
		"type":"choice",//页面类型，参见上面的forms变量的字符串
		"content":
			[
				"面对十三国提案，是继续进攻，准备打击帝国主义嚣张气焰，还是休整部队，防守反击？",
				"响应和平提案，利用时间整顿后勤，先停火在谈判",
				"质疑和平提案，制定作战计划，准备进攻"
			],
		"bgi":"../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
		"next":[
			[
				[[2,2],"j4A_2_1"],
				[[3,1],"j4A_2_1"]
			],
			[
				["j4B_2_1"]
			],	
		],
		"ptr":0,
		"id":15,
	},
	"j4B_1_1":{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
			[
				[0,"彭国辉","如此和平提案，不过是期望拖延我军步伐，只顾他们的利益，却不顾实际战况！我军应当跨过三八线，继续给予敌人沉重打击！"],
				[1,"参谋乙","彭总你看，这是最新消息"]
			],
			"bgi":"../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
			"chara":["../../resources/人物立绘/彭国辉.png","../../resources/人物立绘/中国参谋1（李云龙）.png"],
			"next":["j4B_1_2"],//下个节点的编号
			"ptr":0
	},
	"j4B_1_2":{
		"type":"cut",//页面类型，参见上面的forms变量的字符串
			"content":
			[
				["video/mp4","../../resources/视频/决策三B进入决策四B.mp4"],
				["video/webm","../../resources/视频/webm格式/决策3选B.webm"],
			],
			"next":["j4B_1_3"],//下个节点的编号
			"ptr":0
	},
	"j4B_1_3":{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
			[
				[0,"参谋","彭总，第三次战役已经胜利结束，我军大获成功，敌军损失惨重"],
				[1,"彭国辉","虽然取得了重大胜利，但是据我观察，似乎与我军交战的大多数是南新罗军队，米军伤亡较小，我军不能掉以轻心啊"],
				[0,"参谋","联军已经退守三七线，我军士气正盛，正在等待命令！"]
			],
			"bgi":"../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
			"chara":["../../resources/人物立绘/中国参谋1（李云龙）.png","../../resources/人物立绘/彭国辉.png"],
			"next":["j5_1"],//下个节点的编号
			"ptr":0
	},
	"j4A_1_1":{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
			[
				[0,"彭国辉","我军补给情况危急，应当让小伙子们好好休整一下"],
			],
			"bgi":"../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
			"chara":["../../resources/人物立绘/彭国辉.png"],
			"next":["j4A_1_2"],//下个节点的编号
			"ptr":0
	},
	"j4A_1_2":{
		"type":"cut",//页面类型，参见上面的forms变量的字符串
			"content":
			[
				["video/mp4","../../resources/视频/决策三B进入决策四A(1).mp4"],
				["video/webm","../../resources/视频/webm格式/决策三B进入决策四A(1).webm"],
			],
			"ptr":0,
			"next":["situation2"],//下个节点的编号
	},
	"j4A_2_1":{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
			[
				[0,"彭国辉","我军刚刚遭受损失，需要时间补充兵力，而且补给情况危急，应当让小伙子们好好休整一下。"],
			],
		"bgi":"../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
		"next":["j4A_2_2"],//下个节点的编号
		"chara":["../../resources/人物立绘/彭国辉.png"],
		"ptr":0
	},
	"j4A_2_2":{
		"type":"cut",//页面类型，参见上面的forms变量的字符串
		"content":
			[
				["video/mp4","../../resources/视频/决策二B、决策三A进入决策四A2.mp4"],
				["video/webm","../../resources/视频/决策二B、决策三A进入决策四A2.webm"],
			],
		"ptr":0,  
		"next":["situation2"],//下个节点的编号 
	},
	"j4B_2_1":{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
			[
				[0,"彭国辉","我们需要一场胜利来挽回政治上的损失"],
			],
		"bgi":"../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
		"chara":["../../resources/人物立绘/李德胜.png"],
		"next":["j4B_2_2"],//下个节点的编号
		"ptr":0   
	},
	"j4B_2_2":{
		"type":"cut",//页面类型，参见上面的forms变量的字符串
		"content":
			[
				["video/mp4","../../resources/视频/决策二B、决策三A进入决策四B2.mp4"],
				["video/webm","../../resources/视频/决策二B、决策三A进入决策四B2.webm"],
			],
		"ptr":0,
		"next":["situation3"],//下个节点的编号     
	},
	"situation3_0":{
		"type":"cut",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			["video/mp4","../../resources/视频/第二章开篇.mp4"],
			["video/mp4","../../resources/视频/webm格式/第二章开篇.webm"],
		],
	
		"next":["situation3_1"],//下个节点的编号
		"ptr":0
	},
    "situation3_1":{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			[0,"参谋","将军，敌军在前几次战役中损失惨重，小伙子们整装待发，等待您进攻的命令！"],
			[1,"怀伍斯塔","我早就料到所谓九州共和国和他们的共和国军不堪一击，战争尽在我的掌控之中，联系记者，召开新闻发布会，我要在媒体面前公布我们伟大的作战计划！"],
		],
	
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",//背景图片路径,没有就是空串
		"chara":["../../resources/人物立绘/美军参谋1.png","../../resources/人物立绘/怀伍斯塔.png"],//人物立绘路径，没有就是空串
		"next":["situation3_2"],//下个节点的编号
		"ptr":0
	},
    "situation3_2":{
		"type":"paper",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			"../../resources/游戏背景图/报纸/三个月.jpg",
			"我们会大获全胜"
		],
		
		"bgi":"../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
		"chara":["../../resources/人物立绘","../resources/人物立绘/李德胜.png"],//人物立绘路径，没有就是空串
		"next":[["situation3_j6"]],//下个节点的编号
		"ptr":0
	},
	"situation3_j6":{
		"type":"choice",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			"第三次战役结束，共和国军损失惨重，正在向北撤退，我军如何行动？",
			"挥师北上，迅速进军，渡过鸭绿江，灭亡九州",
			"挥师北上，迅速进军，渡过鸭绿江，灭亡九州",
			"挥师北上，迅速进军，渡过鸭绿江，灭亡九州"
		],
		
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",//背景图片路径,没有就是空串
		"next":
		[
			[
				["situation3_j6_1_1"],
			],
			[
				["situation3_j6_1_1"],
			],
			[
				["situation3_j6_1_1"],
			]
		],//下个节点的编号
		"ptr":0,
		"id":6
	},
    "situation3_j6_1_1":{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			[0,"怀伍斯塔","褚门总统太过懦弱，不顾一切的阻止我进军九州，就之前几次战役来看，拿下九州轻而易举。"],
		],
	
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",//背景图片路径,没有就是空串
		"chara":["../../resources/人物立绘/怀伍斯塔.png"],//人物立绘路径，没有就是空串
		"next":["situation3_j6_1_2"],//下个节点的编号
		"ptr":0
	},
    "situation3_j6_1_2":{
		"type":"cut",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			["video/mp4","../../resources/视频/决策0进0.5（低画质）.mp4"],
			["video/mp4","../../resources/视频/webm格式/决策0进0.5（低画质）.webm"],
		],
	
		"next":["situation3_j6_1_3"],//下个节点的编号
		"ptr":0
	},
	"situation3_j6_1_3":{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			[0,"参谋","将…将军，我军尚有一战之力，是否停止撤退，就地构筑防线？"],
			[1,"怀伍斯塔","（一脸不可置信）你说什么？你还没意识到那是一支怎样的队伍吗？我们现在能做的只有最快速的撤退，否则很可能会全军覆没！"],
			[0,"参谋","可是……"],
			[1,"怀伍斯塔","对，要解决这帮军队，只能投放原子弹，我要向总统陈说战场局势，向新罗半岛投放原子弹！"]
		],
		
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",//背景图片路径,没有就是空串
		"chara":["../../resources/人物立绘/美军参谋2.png","../../resources/人物立绘/怀伍斯塔.png"],//人物立绘路径，没有就是空串
		"next":["situation3_j7"],//下个节点的编号
		"ptr":0
	},

    "situation3_j7":{
		"type":"choice",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			"我军溃败，敌军卷土重来，应如何行动?",
			"向总统申请，向九州投放大规模杀伤性武器",
			"向总统申请，向九州投放大规模杀伤性武器",
			"向总统申请，向九州投放大规模杀伤性武器"
		],
	
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",//背景图片路径,没有就是空串
		"next":
		[
			[
				["situation3_j7_1_1"]
			],
			[
				["situation3_j7_1_1"]
			],
			[
				["situation3_j7_1_1"]
			],
		],//下个节点的编号
		"ptr":0,
		"id":7
	},
	"situation3_j7_1_1":{
		"type":"paper",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			"../../resources/游戏背景图/报纸/撤职.jpg",
			"什么总统，我看是饭桶"
		],
		
		"bgi":"../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
		"chara":["../../resources/人物立绘","../../resources/人物立绘/李德胜.png"],//人物立绘路径，没有就是空串
		"next":["situation3_j7_1_2"],//下个节点的编号
		"ptr":0
	},
	"situation3_j7_1_2":{
		"type":"cut",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			["video/mp4","../../resources/视频/决策0.5进入决策1''.mp4"],
			["video/mp4","../../resources/视频/webm格式/决策0.5进入决策1.webm"]
		],
		
		"next":["situation3_j7_1_3"],//下个节点的编号
		"ptr":0
	},
	"situation3_j7_1_3":{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			[0,"参谋","将军，我军防线已经建立完毕，敌军也已经转入休整，我军刚刚作战失利，是不是趁机休整一下军队？"],
			[1,"马克","经过我的观察，敌军虽然刚刚获得一场大胜，但仍然后勤堪忧，兵力不足，实际上也非常虚弱。"],
		],

		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",//背景图片路径,没有就是空串
		"chara":["../../resources/人物立绘/美军参谋1.png","../../resources/人物立绘/马克.png"],//人物立绘路径，没有就是空串
		"next":["situation3_j8"],//下个节点的编号
		"ptr":0
	},

    "situation3_j8":{
		"type":"choice",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			"怀伍斯塔被撤职，共和国军转入休整，我军应如何行动？",
			"敌军刚刚获得胜利，不应该与其直接交锋，应该等敌人锐气散尽，再做行动",
			"敌人疲惫之师，后勤补给堪忧，已是强弩之末，应当发动更加猛烈的进攻",
		],
	
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",//背景图片路径,没有就是空串
		"next":
		[
			[
				["situation3_j8A_1_1"]
			],
			[
				["situation3_j8B_1_1"]
			]
		],//下个节点的编号
		"ptr":0,
		"id":8
	},
	"situation3_j8A_1_1":{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			[0,"马克","你说得对，我军需要趁机好好休整"],
		],

		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",//背景图片路径,没有就是空串
		"chara":["../../resources/人物立绘/马克.png"],//人物立绘路径，没有就是空串
		"next":["situation3_j8A_1_2"],//下个节点的编号
		"ptr":0
	},
	"situation3_j8A_1_2":{
		"type":"cut",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			["video/mp4","../../resources/视频/双方对峙.mp4"],
			["video/webm","../../resources/视频/webm格式/双方对峙.webm"]
		],
	
		"next":["situation2_j9A_1_2"],//下个节点的编号
		"ptr":0
	},
	"situation3_j8B_1_1":{
		"type":"single",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			[0,"马克","之前我军的失败只不过是因为斯塔将军的错误判断，共和国军缺乏补给，并且在之前的几次作战都损失惨重，我军不能失去这个绝好的机会！"],
		],
	
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",//背景图片路径,没有就是空串
		"chara":["../../resources/人物立绘/马克.png"],//人物立绘路径，没有就是空串
		"next":["situation3_j8B_1_2"],//下个节点的编号
		"ptr":0
	},
	"situation3_j8B_1_2":{
		"type":"cut",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			["video/mp4","../../resources/视频/礼拜攻势.mp4"],
			["video/mp4","../../resources/视频/webm格式/礼拜攻势.webm"]
		],
		
		"next":["situation2_j9B_1_2"],//下个节点的编号
		"ptr":0
	},
	"cut": {
		"type": "cut",
			"content":
			[
				["video/mp4", "../../resources/视频/开场视频压缩版.mp4"],
				["video/webm", "../../resources/视频/webm格式/开场视频压缩版.webm"]
			],
			"next": ["intro"],
			"ptr": 0
	},
	"intro": {
		"type": "single",//页面类型，参见上面的forms变量的字符串
		"content":
		[
			[0,"李德胜", "当前新罗形势危急，联合国军来势汹汹，这已严重威胁到我国东北的和平。国辉，你是否愿意担起大任，领兵出征，保卫我国边疆？"]
		],
		"bgi": "../../resources/游戏背景图/中国中南海指挥部1.jpg",//背景图片路径,没有就是空串
		"chara": ["../../resources/人物立绘/李德胜.png"],//人物立绘路径，没有就是空串
		"next": ["j1_1"],//下个节点的编号
		"ptr": 0
	},

	"j1_1": {
		"type": "choice",//页面类型，参见上面的forms变量的字符串
			"content":
		[
			"是否领兵出征？",
			"以身体不适，需要休养为由，请主席另寻人选",
			"国难当头，唯有出征！"
		],
		"bgi": "../../resources/游戏背景图/中国中南海指挥部1.jpg",//背景图片路径,没有就是空串
		"next":
		[
			[
				["j1a_1_2"]
			],
			[
				["j1b_1_1"]
			]
		],//下
			"ptr": 0,
			"id":1
	},

	"j1a_1_2": {
		"type": "single",//页面类型，参见上面的forms变量的字符串
			"content":
		[
			[0,"彭国辉","主席，这几个月我之前遗留下来的伤更加严重了，希望能留在后方养精蓄锐，我国将星辈出，必有他人堪当此大任"]


		],

			"bgi": "../../resources/游戏背景图/中国中南海指挥部1.jpg",//背景图片路径,没有就是空串
				"chara": ["../../resources/人物立绘/彭国辉.png"],//人物立绘路径，没有就是空串
					"next": ["ending0"],//下个节点的编号
						"ptr": 0
	},

	"ending0": {
		"type": "ending",//页面类型，参见上面的forms变量的字符串
			"content":
		[
			"恭喜进入彩蛋结局",
			"你选择了修养生息，国内安稳的生活却遮不住你懦弱胆小的底色。最终别的将军出征战役，这场战争的胜负与你无关，你以懦夫的身份用余生审视自我，你知道不战而降是你的代名词。"
		],
		

			"bgi": "",//背景图片路径,没有就是空串
				"chara": ["../../resources/人物立绘/彭国辉.png"],//人物立绘路径，没有就是空串
					"ptr": 0
	},

	"j1b_1_1": {
		"type": "single",//页面类型，参见上面的forms变量的字符串
			"content":
		[
			[0,"彭国辉","保家卫国，无需多言，主席你就安心交给我，我一定会打败米帝，取得胜利！"]

		],

			"bgi": "../../resources/游戏背景图/中国中南海指挥部1.jpg",//背景图片路径,没有就是空串
				"chara": ["../../resources/人物立绘/彭国辉.png"],//人物立绘路径，没有就是空串
					"next": ["j1b_1_2"],//下个节点的编号
						"ptr": 0
	},

	"j1b_1_2": {
		"type":"cut",//页面类型，参见上面的forms变量的字符串
			"content":
		[
			["video/mp4", "../../resources/视频/决策一选B.mp4"],
			["video/webm", "../../resources/视频/webm格式/决策一选B.webm"]

		],

		"next": ["j1b_1_3"],//下个节点的编号
			"ptr": 0
	},


	"j1b_1_3": {
		"type": "single",//页面类型，参见上面的forms变量的字符串
			"content":
		[
			[0,"参谋", "彭总，米军现在大肆宣传我军在飞虎山战役损失惨重，您看报纸——"]
		],

			"bgi": "../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
				"chara": ["../../resources/人物立绘/中国参谋2.png"],//人物立绘路径，没有就是空串
					"next": ["j1b_1_4"],//下个节点的编号
						"ptr": 0
	},

	"j1b_1_4": {
		"type": "paper",//页面类型，参见上面的forms变量的字符串
			"content":
		[
			"../../resources/游戏背景图/报纸/三个月.jpg",
			"我们会大获全胜！"
		],

		"bgi": "../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
				"chara": [],//人物立绘路径，没有就是空串
					"next": ["j1b_1_5"],//下个节点的编号
						"ptr": 0
	},

	"j1b_1_5": {
		"type": "single",//页面类型，参见上面的forms变量的字符串
			"content":
		[
			[0,"彭国辉", "（沉思）敌军现在如此看待战场局势，我军接下来该如何应对——"]
		],
							
							
						
	"bgi": "../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
			"chara": ["../../resources/人物立绘/彭国辉.png"],//人物立绘路径，没有就是空串
			"next": ["littlegame1"],//下个节点的编号
			"ptr": 0
	},

	"littlegame1":{
		"type":"minigame",
		"url":"../../minigames/drive-demo2/snake.html",
		"next":[],
		"ptr": 0
	},

	"j2_1": {
		"type": "choice",//页面类型，参见上面的forms变量的字符串
			"content":
		[
			"我军下一步的行动是？",
			"利用敌人错误判断，将计就计，示弱于敌，诱敌深入，然后伺机歼灭",
			"应用敌退我追战术，快速分割穿插敌人，将敌人在撤退的混乱中歼灭",
			"和美军进行正面作战，以堂堂正正之阵划线平推"
		],

			"bgi": "../../resources/游戏背景图/中国朝鲜指挥部.jpg",
			"bgi": "../../resources/游戏背景图/中国中南海指挥部1.jpg",//背景图片路径,没有就是空串
			"next":
			[
				[
					["j2a_1_1"]
				],
				[
					["j2b_1_1"]
				],
				[
					["j2c_1_1"]
				]
			],////背景图片路径,没有就是空串
						"ptr": 0,
						"id":2
	},
	"j2a_1_1": {
		"type": "single",//页面类型，参见上面的forms变量的字符串
			"content":
		[
			[0,"彭国辉", "怀伍斯塔不是很狂妄吗？不是不相信我们的大部队已经过江了吗？我们就利用他这个判断失误，示敌以弱 诱敌深入，然后找到机会歼灭之!"]


		],

			"bgi": "../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
				"chara": ["../../resources/人物立绘/彭国辉.png"],//人物立绘路径，没有就是空串
					"next": ["j2a_1_2"],//下个节点的编号
						"ptr": 0
	},

	"j2a_1_2": {
		"type": "cut",//页面类型，参见上面的forms变量的字符串
			"content":
		[
			["video/mp4", "../../resources/视频/决策二选A.mp4"],
			["video/webm", "../../resources/视频/webm格式/决策二选A.webm"]
		],

			"next": ["j3_1"],//下个节点的编号
				"ptr": 0
	},

	"j2b_1_1": {
		"type": "single",//页面类型，参见上面的forms变量的字符串
			"content":
		[
			[0,"参谋", "彭总，前线来报！尽管分割穿插成功，但是我们没有足够的力量歼灭如此大量的部队，虽然有所战果，但我军也被米军拖住，米军已经发起了全面的进攻"],
			[1, "彭国辉","撤退！保存有生力量，不要纠缠"]
						
					],
		"bgi":"../../resources / 游戏背景图 / 中国朝鲜指挥部.png",//背景图片路径,没有就是空串
		"chara": ["../../resources/人物立绘/中国参谋2.png", "../../resources/人物立绘/彭国辉.png"],//人物立绘路径，没有就是空串
			"next": ["j2b_1_2"],//下个节点的编号
				"ptr": 0
	},
	"j2b_1_2": {
		"type": "none",//页面类型，参见上面的forms变量的字符串
			"content":
		[
			"分割穿插战术失策，没有达成作战预期，敌人抓住机会反攻，导致长津湖战役失败"

		],

			"bgi": "../../resources/游戏背景图/战争失败图1.jpg",//背景图片路径,没有就是空串
			"next": ["j2b_1_3"],//下个节点的编号
				"ptr": 0
	},
	"j2b_1_3": {
		"type": "single",//页面类型，参见上面的forms变量的字符串
			"content":
		[
			[0,"参谋", "我军已经将敌军完全分割包围，奈何无法及时吃掉敌军，导致敌人有机会反击（叹气）"],
			[1, "彭国辉", "摇摇头）敌军力量比我们想象的要更强，命令部队好好休整，这将是一场硬仗！"]

		],

			"bgi": "../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
				"chara": ["../../resources/人物立绘/中国参谋2.png", "../../resources/人物立绘/彭国辉.png"],//人物立绘路径，没有就是空串
					"next": ["j3A_1_4"],//下个节点的编号
						"ptr": 0
	},

	"j2c_1_1": {
		"type": "single",//页面类型，参见上面的forms变量的字符串
			"content":
		[
		[0,"彭国辉", "怀伍斯塔这是公开嘲笑我军兵力不足！我们不能示弱退缩，要堂堂正正地与米军交锋到底！"]

		],

			"bgi": "../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
				"chara": ["../../resources/人物立绘/彭国辉.png"],//人物立绘路径，没有就是空串
					"next": ["j2c_1_2"],//下个节点的编号
						"ptr": 0
	},

	"j2c_1_2": {
		"type": "none",//页面类型，参见上面的forms变量的字符串
			"content":
		[

			"你的选择开始了长津湖战役"

		],

			"bgi": "../../resources/游戏背景图/中国朝鲜指挥部.png",//背景图片路径,没有就是空串
				//人物立绘路径，没有就是空串
				"next": ["j2c_1_3"],//下个节点的编号
					"ptr": 0
	},
	"j2c_1_3": {
		"type": "cut",//页面类型，参见上面的forms变量的字符串
			"content":
		[
			["video/mp4", "../../resources/视频/决策二选C.MP4"],
			["video/webm", "../../resources/视频/webm格式/决策二选C.webm"]

		],

			"next": ["j2C_1_4"],//下个节点的编号
				"ptr": 0
	},
	"j5_1": {
    "type": "choice",
    "content":
      [
        "第三次战役大获成功，敌军退守三七线，我军是否乘胜追击?",
        "一鼓作气，再而衰，三而竭，乘胜追击",
        "停止进攻，观察敌情，整军备战"
      ],
    "bgi": "../../resources/游戏背景图/中国朝鲜指挥部.png",
	"next":
			[
				[
					[[4,2],"j4b_j5a_1_1"],

				],
				[
					[[4,2],"j4b_j5b_1_1"],
				]
			],////背景图片路径,没有就是空串
			"ptr": 0,
			"id":5
  },
  "j4b_j5b_1_1": {
    "type": "single",
    "content":
      [
        [0, "彭国辉", "米军一直有意保存作战力量，应该是有反击的预谋，命令各部队停止追击，占据有利地形，严阵以待，防敌反扑"]
      ],
    "bgi": "../../resources/游戏背景图/中国朝鲜指挥部.png",
    "chara": ["../../resources/人物立绘/彭国辉.png"],
    "next": ["j4b_j5b_1_2"],
    "ptr": 0
  },
  "j4b_j5b_1_2": {
    "type": "cut",
    "content":
      [
        ["video/mp4", "../../resources/视频/决策4B进决策5选B.mp4"],
        ["video/mp4", "../../resources/视频/webm格式/决策4B进决策5选B.webm"],
      ],
    "next": ["situation1"],
    "ptr": 0
  },
  "j4b_j5a_1_1": {
    "type": "single",
    "content":
      [
        [0, "彭国辉", "我军刚刚获得胜利，应当乘胜追击，给米帝国主义一个沉重打击！"]
      ],
    "bgi": "../../resources/游戏背景图/中国朝鲜指挥部.png",
    "chara": ["../../resources/人物立绘/彭国辉.png"],
    "next": ["j4b_j5a_1_2"],
    "ptr": 0
  },
  "j4b_j5a_1_2": {
    "type": "cut",
    "content":
      [
        ["video/mp4", "../../resources/视频/决策4B进入决策5选A.mp4"],
        ["video/webm", "../../resources/视频/webm格式/决策4B进入决策5选A.webm"],
      ],
    "next": ["situation2"],
    "ptr": 0
  },
  "j2c_j5b_1_1": {
    "type": "single",
    "content":
      [
        [0, "彭国辉", "我军上次战役损失惨重，怎么能继续进攻呢？我军应当整军备战，寻找机会"],
      ],
    "bgi": "../../resources/游戏背景图/中国朝鲜指挥部.png",
    "chara": ["../../resources/人物立绘/彭国辉.png"],
    "next": ["j2c_j5b_1_2"],
    "ptr": 0
  },
  "j2c_j5b_1_2": {
    "type": "cut",
    "content":
      [
        ["video/mp4", "../../resources/视频/决策2C进入决策5选B.mp4"],
        ["video/mp4", "../../resources/视频/webm格式/决策2C进入决策5选B.webm"],
      ],
    "next": ["situation2"],
    "ptr": 0
  },
  "j2c_j5a_1_1": {
    "type": "single",
    "content":
      [
        [0, "彭国辉", "我们需要一场胜利来挽回战况。"],
      ],
    "bgi": "../../resources/游戏背景图/中国朝鲜指挥部.png",
    "chara": ["../../resources/人物立绘/彭国辉.png"],
    "next": ["j2c_j5a_1_2"],
    "ptr": 0
  },
  "j2c_j5a_1_2": {
    "type": "cut",
    "content":
      [
        ["video/mp4", "../../resources/视频/决策2C进决策5选A.mp4"],
        ["video/mp4", "../../resources/视频/webm格式/决策2C进决策5选A.webm"],
      ],
    "next": ["situation3"],
    "ptr": 0
  },
  "situation1": {
    "type": "cut",
    "content":
      [
        ["video/mp4", "../../resources/视频/情况1.mp4"],
        ["video/mp4", "../../resources/视频/webm格式/情况1.webm"],
      ],
    "next": ["situation1_1"],
    "ptr": 0
  },
  "situation2": {
    "type": "cut",
    "content":
      [
        ["video/mp4", "../../resources/视频/情况2.mp4"],
        ["video/mp4", "../../resources/视频/webm格式/情况2.webm"],
      ],
    "next": ["situation2_1"],
    "ptr": 0
  },
  "situation3": {
    "type": "cut",
    "content":
      [
        ["video/mp4", "../../resources/视频/情况3.mp4"],
        ["video/mp4", "../../resources/视频/webm格式/情况3.webm"],
      ],
    "next": ["situation3_0"],
    "ptr": 0
  },
	"situation2_1":{
		"type":"paper",
		"content":
		[
			"../../resources/游戏背景图/报纸/撤职.jpg",
			"什么总统,我看是饭桶!"
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"ptr":0,
		"next":["situation2_2"]
	},
	"situation2_2":{
		"type":"single",
		"content":
		[
			[0,"参谋","将军,在上次战争中我们保留了大部分作战力量,敌人也损失惨重"],
			[1,"马克","我已经提前命令军队保存实力，让南新罗军队充当炮灰，现在两军的力量对比已经发生转变，我们应当着手下一个计划"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"chara":["../../resources/人物立绘/美军参谋1.png","../../resources/人物立绘/马克.png"],
		"ptr":0,
		"next":["situation2_j9_1"]
	},
	"situation2_j9_1":{
		"type":"choice",
		"content":
		[
		"第三次战役结束，共和国军伤亡较大，我军实力尚存，应如何行动？",
		"为防止敌军反扑，不应与其直接交锋，应当做好全面作战的准备",
		"敌人疲惫之师，后勤补给堪忧，已是强弩之末，应当发动更加猛烈的进攻"
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"ptr":0,
		"id":9,
		"next":
		[
			[
				["situation2_j9A_1_1"]
			],
			[
				["situation2_j9B_1_1"]
			]
		]
	},
	"situation1_1":{
		"type":"paper",
		"content":
		[
			"../../resources/游戏背景图/报纸/撤职.jpg",
			"什么总统,我看是饭桶!"
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"ptr":0,
		"next":["situation1_2"]
	},
	"situation1_2":{
		"type":"single",
		"content":
		[
		[0,"参谋","将军，在上次战争中我们保留了大部分作战力量，敌人后勤情况非常差，且海军也已经准备完毕，可以进行登陆作战"],
		[1,"马克","根据我的观察，虽然敌人获得了战役胜利，但是随着我军的进一步集结，现在两军的力量对比已经发生转变，我们应当着手下一个计划"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"chara":["../../resources/人物立绘/美军参谋2.png","../../resources/人物立绘/马克.png"],
		"ptr":0,
		"next":["situation1_j10_1"]
	},
	"situation1_j10_1":{
		"type":"choice",
		"content":
		[
		"第三次战役结束，共和国军转入休整，如何行动？",
		"敌军刚刚获得胜利，不应该与其直接交锋，应该等敌人锐气散尽，再做行动",
		"敌人疲惫之师，后勤补给堪忧，已是强弩之末，应当发动更加猛烈的进攻"
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"ptr":0,
		"id":10,
		"next":
		[
			[
				["situation1_j10A_1_1"]
			],
			[
				["situation1_j10B_1_1"]
			]
		]
	},
	"situation2_j9B_1_1":{
		"type":"cut",
		"content":
		[
			["video/mp4","../../resources/视频/礼拜攻势.mp4"],
			["video/mp4","../../resources/视频/webm格式/礼拜攻势.webm"]
		],
		"next":["situation2_j9B_1_2"],
		"ptr":0
	},
	"situation2_j9B_1_2":{
		"type":"single",
		"content":
		[
		[0,"马克","好一个“月圆攻势”和“礼拜攻势”啊，这次我们可不会再重蹈覆辙了！"],
		[0,"马克","我军现已经休整完毕，恢复了作战能力，虽尚未完全集结，但机动力量已严整待发——————"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"chara":["../../resources/人物立绘/马克.png"],
		"ptr":0,
		"next":["situation2_j9B_1_j11_1"]
	},
	"situation2_j9B_1_j11_1":{
		"type":"choice",
		"content":
		[
		"我军尚未集结完毕，此时如何行动？",
		"等待军队集结完毕，为接下来的猛攻做充足准备",
		"运用机动力量向北侦查，观察敌军防御线，趁机缠住志愿军"
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"ptr":0,
		"id":11,
		"next":
		[
			[
				[[8,1],"situation1_j10A_1_j11_1A_1"],
				[[9,1],"situation1_j10A_1_j11_1A_1"],
				[[10,1],"situation1_j10A_1_j11_1A_1"],
				["situation1_j10B_1_j11A_1_1"]
			],
			[
				[[8,1],"situation1_j10A_1_j11_1B_1"],
				[[9,1],"situation1_j10A_1_j11_1B_1"],
				[[10,1],"situation1_j10A_1_j11_1B_1"],
				["situation2_j9B_1_j11B_1_1"]
			],
		]
	},
	"situation2_j9B_1_j11B_1_1":{
		"type":"single",
		"content":
		[
		[0,"马克","进行猎犬行动，派出所有侦查队，行军向北侦查，直到发现共和国军的真正的防御线为止，用这些小股部队缠住敌人，不要让他们轻易脱身！"],
		[0,"马克","哈哈，这招终于抓住了共和国军的弱点！"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"chara":["../../resources/人物立绘/马克.png"],
		"ptr":0,
		"next":["situation2_j9B_1_j11B_1_2"]
	},
	"situation2_j9B_1_j11B_1_2":{
		"type":"ending",
		"content":
		[
		"充分的侦查为我军创造了战机，捕捉到了共和国军的所有风吹草动"
		],
		"ptr":0,
		"next":["situation2_j9B_1_j11B_1_22"]
	},
	"situation2_j9B_1_j11B_1_22":{
		"type":"ending",
		"content":
		[
		"这把处于补给低谷的志愿军死死缠住，逐步蝉食"
		],
		"ptr":0,
		"next":["situation2_j9B_1_j11B_1_3"]
	},
	"situation2_j9B_1_j11B_1_3":{
		"type":"single",
		"content":
		[
		[0,"马克","我们缠住了敌军，敌军现在难以抽身，我们应当决定如何进军——————"],
		[0,"马克","据我所知前任指挥官沃克是采取了集中进军，沿公路线前进——————"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"chara":["../../resources/人物立绘/马克.png"],
		"ptr":0,
		"next":["j12_1"]
	},
	"situation2_j9B_1_j11A_1_1":{
		"type":"single",
		"content":
		[
		[0,"命令军队尽快完成集结，为接下来的猛攻做充足准备"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.jpg",
		"chara":["../../resources/人物立绘/马克"],
		"ptr":0,
		"next":["situation2_j9B_1_j11A_1_2"]
	},
	"situation2_j9B_1_j11A_1_2":{
		"type":"none",
		"content":
		[
		"一段时间内我们做足了充分准备，虽然敌军通过脱离接触进行了一定的休整，但我们仍然有良好的进攻机会"
		],
		"bgi":"../../resources/游戏背景图/战场.png",
		"ptr":0,
		"next":["situation2_j9B_1_j11A_1_3"]
	},
	"situation2_j9B_1_j11A_1_3":{
		"type":"single",
		"content":
		[
		[0,"马克","全军已经做好万全准备，我们应当决定如何进军——————"],
		[0,"马克","据我所知前任指挥官沃克是采取了集中进军，沿公路线前进——————"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"chara":["../../resources/人物立绘/马克.png"],
		"ptr":0,
		"next":["j12_1"]
	},
	"situation2_j9A_1_1":{
		"type":"single",
		"content":
		[
		[0,"马克","在之前的战斗联军实力有所削弱，我军需要趁机好好休整，做好战斗准备"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"chara":["../../resources/人物立绘/马克.png"],
		"ptr":0,
		"next":["situation2_j9A_1_2"]
	},
	"situation2_j9A_1_2":{
		"type":"single",
		"content":
		[
		[0,"马克","我军经修整后兵力充足，蓄势待发，现在我军战斗力事实上已经超过共和国军"],
		[0,"马克","虽尚未完全集结，但机动力量已严整待发"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"chara":["../../resources/人物立绘/马克.png"],
		"ptr":0,
		"next":["situation2_j9B_1_j11_1"]
	},
	"situation1_j10B_1_1":{
		"type":"cut",
		"content":
		[
			["video/mp4","../../resources/视频/礼拜攻势.mp4"],
			["video/mp4","../../resources/视频/webm格式/礼拜攻势.webm"]
		],
		"next":["situation1_j10B_1_2"],
		"ptr":0
	},
	"situation1_j10B_1_2":{
		"type":"single",
		"content":
		[
		[0,"参谋","报告，将军！我们已经发现敌人的两大作战特点，准备针对其进行作战，但我军前线尚未完成集结。我们是否要等待集结完成进而发动猛烈进攻？"],
		[1,"马克","我军虽未完成集结，但机动力量已严整待发——————"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"chara":["../../resources/人物立绘/美军参谋1.png","../../resources/人物立绘/马克.png"],
		"ptr":0,
		"next":["situation2_j9B_1_j11_1"]
	},
	"situation1_j10B_1_j11A_1_1":{
		"type":"single",
		"content":
		[
		[0,"马克","命令军队尽快完成集结，为接下来的猛攻做充足准备"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"chara":["../../resources/人物立绘/马克.png"],
		"ptr":0,
		"next":["situation2_j9B_1_j11A_1_2"]
	},
	"situation1_j10A_1_1":{
		"type":"single",
		"content":
		[
		[0,"马克","在之前的战斗联军实力有很大削弱，我军需要趁机好好休整，做好战斗准备。"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"chara":["../../resources/人物立绘/马克.png"],
		"ptr":0,
		"next":["situation1_j10A_1_2"]
	},
	"j2C_1_4":{
		"type":"single",
		"content":
		[
		[0,"参谋","我军已经暴露全部力量，战线退至第一次战役后，但已经稳住局势"],
		[1,"彭国辉","（摇头）（叹气）这都是我的过失，我对不住主席……"],
		[0,"参谋","您也别太自责了，现在我军已经部分恢复了战斗力，且米军北上脚步过快，各部之间已经有薄弱之处，这是我军发挥分割包围战术、挽回战争局势的时机……"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"chara":["../../resources/人物立绘/中国参谋3.png","../../resources/人物立绘/彭国辉2.png"],
		"ptr":0,
		"next":["j5_2"]
	},
	"j5_2":{
    "type": "choice",
    "content":
      [
        "敌军出现弱点，我军尚有一战之力，是否制定战役作战计划，挽回战争局势？",
        "命令各部队分割穿插，包围歼敌，挽回战争局面",
        "观察敌情，整军备战，防守反击"
      ],
    "bgi": "../../resources/游戏背景图/中国朝鲜指挥部.png",
	"next":
			[
				[
					[[2,3],"j2c_j5a_1_1"],

				],
				[
					[[2,3],"j2c_j5b_1_1"]
				]
			],////背景图片路径,没有就是空串
			"ptr": 0,
			"id":5
  },
	"situation1_j10A_1_2":{
		"type":"single",
		"content":
		[
		[0,"参谋","报告，将军！我军已经休整完毕，已经恢复了作战能力，但尚未完全集结。我们是否要等待集结完成进而发动猛烈进攻？"],
		[1,"马克","我军虽未完成集结，但机动力量已严整待发——————"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"chara":["../../resources/人物立绘/美军参谋1.png","../../resources/人物立绘/马克.png"],
		"ptr":0,
		"next":["situation2_j9B_1_j11_1"]
	},
	"situation1_j10A_1_j11_1B_1":{
		"type":"single",
		"content":
		[
		[0,"马克","进行猎犬行动，派出所有侦查队，行军向北侦查，直到发现共和国军的真正的防御线为止，用这些小股部队缠住敌人，不要让他们轻易脱身！"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"chara":["../../resources/人物立绘/马克.png"],
		"ptr":0,
		"next":["situation1_j10A_1_j11_1B_2"]
	},
	"situation1_j10A_1_j11_1B_2":{
		"type":"cut",
		"content":
		[
			["video/mp4","../../resources/视频/礼拜攻势.mp4"],
			["video/mp4","../../resources/视频/webm格式/礼拜攻势.webm"]
		],
		"next":["situation1_j10A_1_j11_1B_3"],
		"ptr":0
	},
	"situation1_j10A_1_j11_1B_3":{
		"type":"single",
		"content":
		[
		[0,"马克","哈哈，这招终于抓住了共和国军的弱点！"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"chara":["../../resources/人物立绘/马克.png"],
		"ptr":0,
		"next":["situation1_j10A_1_j11_1B_4"]
	},
	"situation1_j10A_1_j11_1B_4":{
		"type":"ending",
		"content":
		[
		"我们已经发现敌人的两大作战特点，只需针对其制定详细的作战计划"
		],
		"ptr":0,
		"next":["situation1_j10A_1_j11_1B_5"]
	},
	"situation1_j10A_1_j11_1B_5":{
		"type":"ending",
		"content":
		[
		"定会夺回战争的主动权！"
		],
		"ptr":0,
		"next":["situation2_j9B_1_j11B_1_3"]
	},
	"situation1_j10A_1_j11_1A_1":{
		"type":"none",
		"content":
		[
		"两次避免与敌军的正面交锋，虽然让我们准备充分，但是给了对方充足的休整时间，让敌军整装待发",
		"等待集结的时间让我们错失了作战时机",
		"你过于保守的进军决定导致了砥平里战役的失败"
		],
		"bgi":"../../resources/游戏背景图/战场.png",
		"ptr":0,
		"next":["战略点评判"]
	},
	"j12_1":{
		"type":"choice",
		"content":
		[
			"我军如何进军？",
			"抢占山头、争夺制高点、实施宽正面的多路进攻，避免分割穿插；白天进军，夜晚脱离接触",
			"兵贵神速，乘坐卡车沿公路集中进军；全力进攻，不给敌人喘息之机，以雷霆之势击敌一个措手不及",
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"ptr":0,
		"id":12,
		"next":
		[
			[
				["j12_A_1"]
			],
			[
				["j12_B_1"]
			]
		]	
	},
	"j12_A_1":{
		"type":"single",
		"content":
		[
			[0,"马克","多路齐头并进，对敌军各防守要点同时实施进攻！看你们还怎么使用最管用的分割包围战术！"],
			[0,"马克","沃克总是能上你们穿插策略的当！这次我们汲取了经验教训，选择东西呼应，保持战线的连续，不会给敌军一点机会的！"]
		],
		"bgi":"../../resources/游戏背景图/战场.png",
		"chara":["../../resources/人物立绘/马克.png"],
		"ptr":0,
		"next":["j12_A"]
	},
	"j12_B_1":{
		"type":"none",
		"content":
		[
			"沃克集中进军的战术总是被共和国军的分割包围战术所反制，我军的兵力经穿插包围后又陷入了苦战",
			"砥平里战役你犯了相同的错误，直接导致了这场战争的失败",
			"你的前任指挥官就是这样失败撤职的，你也要汲取经验教训啊",
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"ptr":0,
		"next":["judge"]
	},
	"j12_A":{
		"type":"single",
		"content":
		[
			[0,"参谋","敌军强行发动进攻，我军被分割穿插，敌军正在准备歼灭作战"],
			[1,"马克","敌军强行进攻确实出人意料，但是包围圈内我军兵力众多，火力强大，也有一战之力"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"chara":["../../resources/人物立绘/美军参谋1.png","../../resources/人物立绘/马克.png"],
		"ptr":0,
		"next":["j13_1"]
	},
	"j13_1":{
		"type":"choice",
		"content":
		[
			"敌军已经从三面包围砥平里，我军是战是撤？",
			"存人失地，人地皆存，保存有生力量，交替组织有序撤退",
			"命令部队死守，发挥我军强大的阵地建设和火力优势，坚守待援的同时大量杀伤敌军"
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"ptr":0,
		"id":13,
		"next":
		[
			[
				["j13_A_1_1"]
			],
			[
				["j13_B_1_1"]
			]
		]
	},
	"j13_A_1_1":{
		"type":"single",
		"content":
		[
			[0,"马克","敌人已经三面包围了我们，一味坚守砥平里只会导致全军灭亡，命令部队进行突围，准备撤退"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"chara":["../../resources/人物立绘/马克.png"],
		"ptr":0,
		"next":["j13_A_1_2"]
	},
	"j13_A_1_2":{
		"type":"cut",
		"content":
		[
			["video/mp4","../../resources/视频/撤退+砥平里失守.mp4"],
			["video/webm","../../resources/视频/撤退+砥平里失守.webm"]
		],
		"ptr":0,
		"next":["judge"]
	},
	"j13_B_1_1":{
		"type":"single",
		"content":
		[
			[0,"马克","虽然敌军三面包围了我们，但敌军缺乏重武器，我猜想敌军的攻坚能力远远不足。命令下去，集中兵力，以砥平里为中心，构筑环形野战防御阵地，坚守砥平里，等待救援部队！"]
		],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"chara":["../../resources/人物立绘/马克.png"],
		"ptr":0,
		"next":["j13_B_1_2"]
	},
	"j13_B_1_2":{
		"type":"cut",
		"content":
		[
			["video/mp4","../../resources/视频/决策三A进决策四选B.mp4"],
			["video/webm","../../resources/视频/决策三A进决策四选B.webm"]
		],
		"ptr":0,
		"next":["j13_B_1_3"]
	},
	"j13_B_1_3":{
		"type":"single",
		"content":
		[
			[0,"马克","果然不出我所料，共和国军并不具备强大的攻坚能力，之后在面对共和国军的围攻时，我军不需再撤退，而是以强大的火力对抗敌军，敌军因其后勤短缺，是敌不过我们的。（得意）"],
			[1,"参谋","前线来报，敌军正在向北撤军，我们需要追击吗？"],
			[0,"马克","追击！乘胜追击！"]
		],
		"chara":["../../resources/人物立绘/马克.png","../../resources/人物立绘/美军参谋2.png"],
		"ptr":0,
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"next":["j13_B_1_4"]
	},
	"j13_B_1_4":{
		"type":"single",
		"content":
		[
			[0,"参谋","敌军向北逃窜，战线漫长，我军是否要制定一个主攻方向？"],
			[1,"马克","当然，我们要集中一点全力突破，发挥我军强大的火力优势"]
		],
		"chara":["../../resources/人物立绘/美军参谋1.png","../../resources/人物立绘/马克.png"],
		"ptr":0,
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"next":["j14_1"]
	},
	"j14_1":{
		"type":"choice",
		"content":
		[
			"敌军北撤，我军应当乘胜追击，应该选择哪个地点作为主攻方向？",
			"三串里，是敌军侧翼，从西线发动进攻",
			"金华，也是敌军侧翼，从东线发动进攻",
			"铁原，后面是大片平原，从中间撕开敌人的防线"
		],
		"ptr":0,
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"id":14,
		"next":
		[
			[
				["j14_A_1_1"]
			],
			[
				["j14_B_1_1"]
			],
			[
				["j14_C_1_1"]
			]
		]
	},
	"j14_A_1_1":{
		"type":"single",
		"content":
		[
			[0,"马克","主攻三串里！从西线发起进攻！"]
		],
		"chara":["../../resources/人物立绘/马克.png"],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"ptr":0,
		"next":["j14_A_1_2"],
	},
	"j14_A_1_2":{
		"type":"cut",
		"content":
		[
			["video/mp4","../../resources/视频/三串里.mp4"],
			["video/webm","../../resources/视频/三串里.webm"]
		],
		"ptr":0,
		"next":["j14_A_1_3"],
	},
	"j14_A_1_3":{
		"type":"single",
		"content":
		[
			[0,"马克","没有想到共和国军竟然使用堑壕战术，将我军的坦克装甲全都炸毁在堑壕中。看来敌军比我们想象的要强大！（摇头叹气）"]
		],
		"chara":["../../resources/人物立绘/马克.png"],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"ptr":0,
		"next":["judge"]
	},
	"j14_B_1_1":{
		"type":"single",
		"content":
		[
			[0,"马克","主攻金华！从东线发起进攻！"]
		],
		"chara":["../../resources/人物立绘/马克.png"],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"ptr":0,
		"next":["j14_B_1_2"]
	},
	"j14_B_1_2":{
		"type":"cut",
		"content":
		[
			["video/mp4","../../resources/视频/金华.mp4"],
			["video/webm","../../resources/视频/金华.webm"]
		],
		"ptr":0,
		"next":["j14_B_1_3"],
	},
	"j14_B_1_3":{
		"type":"single",
		"content":
		[
			[0,"马克","没有想到共和国军竟然使用堑壕战术，将我军的坦克装甲全都炸毁在堑壕中。看来敌军比我们想象的要强大！（摇头叹气）"]
		],
		"chara":["../../resources/人物立绘/马克.png"],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"ptr":0,
		"next":["judge"]
	},
	"j14_C_1_1":{
		"type":"single",
		"content":
		[
			[0,"马克","跨过铁原，就会进入利于我军机械化部队的平原地势，可以有效控制共和国军的游击战术，而且控制铁原可以对敌军形成包围之势。"],
			[1,"参谋","我建议，先炮火压制共和国军的进攻，然后坦克掩护步兵向前冲锋，让共和国军毫无还手之力！"],
			[0,"马克","就这么办！"]
		],
		"chara":["../../resources/人物立绘/马克.png","../../resources/人物立绘/美军参谋1.png"],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"ptr":0,
		"next":["j14_C_1_2"]
	},
	"j14_C_1_2":{
		"type":"cut",
		"content":
		[
			["video/mp4","../../resources/视频/铁原.mp4"],
			["video/webm","../../resources/视频/铁原.webm"]
		],
		"ptr":0,
		"next":["j14_C_1_3"]
	},
	"j14_C_1_3":{
		"type":"single",
		"content":
		[
			[0,"马克","没有想到共和国军竟然使用堑壕战术，将我军的坦克装甲全都炸毁在堑壕中。看来敌军比我们想象的要强大！（摇头叹气）"]
		],
		"chara":["../../resources/人物立绘/马克.png"],
		"bgi":"../../resources/游戏背景图/美军朝鲜指挥部.png",
		"ptr":0,
		"next":["judge"]
	},
	"judge":{

	},
};



function getNextValue() {
	return next;
}

var now=story[0],next=story["cut"];//记录现在是那个故事节点。

var gameState = {
	"currentSaveNode":{},
};

window.gameState.currentSaveNode = now;

document.addEventListener('click', function() {
	window.gameState.currentSaveNode = now;
});

var savefile=0;

var reco=new Array();
for(let i=1;i<=16;i++)
	reco.push(null);

var savefile1='0';
function save(savefile){
	localStorage.setItem(savefile,JSON.stringify(gameState.currentSaveNode));
	localStorage.setItem('reco', JSON.stringify(reco));
	console.log(gameState.currentSaveNode);
}

function onload(){
	next = getNextValue(); 
};

function load(save){
	localStorage.setItem(save,'1');
	window.location.href="../../body/html/game.html";
}

class dom_node
{
	constructor(children_,type_,attr_)
	{
		this.children=children_;
		this.type=type_;
		this.attr=attr_;
	}
};

var miniGameUrl = "../../minigames/drive-demo2/snake.html";

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

var miniGameNode = new dom_node(
	[],
	"div",
	{"class":"dia"}
);

var btn1_node=new dom_node
(
	[],
	"div",
	{"id":"btn1","class":"button setting","onclick":"save(savefile1)","title":"设置"}
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

var content_box_minigame_node=new dom_node
(
	[top_node,bottom_node,miniGameNode],
	"div",
	{"class":"content-box"}
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
var cut_button_node=new dom_node
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
	{}
);

var content_box_cut_node=new dom_node
(
	[video_node,cut_button_node],
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
	"minigame":content_box_minigame_node,
};

var css=
{
	"single":"../css/dialog-single-stand.css",
	"none":"../css/text-stand.css",
	"choice":"../css/choice-stand.css",
	"cut":"../css/cut-stand.css",
	"ending":"../css/ending.css",
	"paper":"../css/paper.css",
	"minigame":"../css/dialog-single-stand.css",
}



var game1 = localStorage.getItem('game1win');
		  if(game1==='1'){
		  next = story["j2_1"];
		  game1=0;
		  localStorage.setItem('game1win','0');
		  window.next = next;}
var save1 = localStorage.getItem("save1");
	if(save1==='1'){
		var saveData1 = localStorage.getItem(savefile1);
		now = JSON.parse(saveData1);
		next = now;
		save1=0;
		localStorage.setItem("save1",'0');
		var reco1 = localStorage.getItem('reco');
		reco=JSON.parse(reco1);
		}
var save2 = localStorage.getItem("save2");
	if(save2==='1'){
		var saveData2 = localStorage.getItem(savefile2);
		now = JSON.parse(saveData2);
		next = now;
		save2=0;
		localStorage.setItem("save2",'0');
		var reco2 = localStorage.getItem('reco');
		reco=JSON.parse(reco2);
		}
var save3 = localStorage.getItem("save3");
	if(save3==='1'){
		var saveData3 = localStorage.getItem(savefile3);
		now = JSON.parse(saveData3);
		next = now;
		save3=0;
		localStorage.setItem("save3",'0');
		var reco3 = localStorage.getItem('reco');
		reco=JSON.parse(reco3);
		}
var save4 = localStorage.getItem("save4");
	if(save4==='1'){
		var saveData4 = localStorage.getItem(savefile4);
		now = JSON.parse(saveData4);
		next = now;
		save4=0;
		var reco4 = localStorage.getItem('reco');
		reco=JSON.parse(reco4);
		}
var save5 = localStorage.getItem("save5");
	if(save5==='1'){
		var saveData6 = localStorage.getItem(savefile5);
		now = JSON.parse(saveData5);
		next = now;
		save5=0;
		var reco5 = localStorage.getItem('reco');
		reco=JSON.parse(reco5);
		}
var save6 = localStorage.getItem("save6");
	if(save6==='1'){
		var saveData6 = localStorage.getItem(savefile6);
		now = JSON.parse(saveData6);
		next = now;
		save6=0;
		localStorage.setItem("save6",'0');
		var reco6 = localStorage.getItem('reco');
		reco=JSON.parse(reco6);
		}
var save7 = localStorage.getItem("save7");
	if(save7==='1'){
		var saveData7 = localStorage.getItem(savefile7);
		now = JSON.parse(saveData7);
		next = now;
		save7=0;
		localStorage.setItem("save7",'0');
		var reco7 = localStorage.getItem('reco');
		reco=JSON.parse(reco7);
		}
var save8 = localStorage.getItem("save8");
	if(save8==='1'){
		var saveData8 = localStorage.getItem(savefile8);
		now = JSON.parse(saveData8);
		next = now;
		save8=0;
		localStorage.setItem("save8",'0');
		var reco8 = localStorage.getItem('reco');
		reco=JSON.parse(reco8);
		}
var save9 = localStorage.getItem("save9");
	if(save9==='1'){
		var saveData9 = localStorage.getItem(savefile9);
		now = JSON.parse(saveData9);
		next = now;
		save9=0;
		localStorage.setItem("save9",'0');
		var reco9 = localStorage.getItem('reco');
		reco=JSON.parse(reco9);
		}
var save10 = localStorage.getItem("save10");
	if(save10==='1'){
		var saveData10 = localStorage.getItem(savefile10);
		now = JSON.parse(saveData10);
		next = now;
		save10=0;
		localStorage.setItem("save10",'0');
		var reco10 = localStorage.getItem('reco');
		reco=JSON.parse(reco10);
		}
var save11 = localStorage.getItem("save11");
	if(save11==='1'){
		var saveData11 = localStorage.getItem(savefile11);
		now = JSON.parse(saveData11);
		next = now;
		save11=0;
		localStorage.setItem("save11",'0');
		var reco11 = localStorage.getItem('reco');
		reco=JSON.parse(reco11);
		}
var save12 = localStorage.getItem("save12");
	if(save12==='1'){
		var saveData12 = localStorage.getItem(savefile12);
		now = JSON.parse(saveData12);
		next = now;
		save12=0;
		localStorage.setItem("save12",'0');
		var reco12 = localStorage.getItem('reco');
		reco=JSON.parse(reco12);
		}

window.next = next;
window.reco = reco;
	  
var trans=function()
{
	if(now.ptr==now.content.length)
	{
		let content_box=document.querySelector(".content-box");
		refresher.clear();
		form(forms[next.type],content_box);
		let link=document.querySelector("link");
		link.setAttribute("href",css[next.type]);
		// if(next.type=="cut")
		// 	alert(next.content);
		now=next;
		let dia,name_b,text,name,dia_box,btn;
		switch(next.type)
		{
			case "single":
				content_box.style.backgroundImage="url("+next.bgi+")";
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
						{
							next=story[now.next[0]];
						}
						trans();
					}
				);
				break;
			case "none":
				content_box.style.backgroundImage="url("+next.bgi+")";
				dia=document.querySelector(".dia");
				dia.innerHTML=next.content[0];
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
				content_box.style.backgroundImage="url("+next.bgi+")";
				let question_box=document.querySelector(".question-box");
				let ques_ans=document.querySelector(".ques-ans");
				text=document.createTextNode(next.content[0]);
				question_box.append(text);
				for(let i=1;i<next.content.length;i++)
				{
					let child=document.createElement("div");
					text=document.createTextNode(next.content[i]);
					ques_ans.appendChild(child);
					child.setAttribute("class","answer-box");
					child.setAttribute("id",i)
					child.append(text);
					child.addEventListener
					(
						"click",
						function()
						{
							let nxt=now.next[i-1];
							/*
								"next":
								next[
									nxt[
										temp[temp_[i,''],[i,''],""],
										[]
										]
									]
								],//下个节点的编号
							*/
							let tag=true;
							//console.log("INs");
							for(let j=0;j<=nxt.length-1;j++)
							{
								let temp=nxt[j];
								tag=true;
								//alert("11111111111111");
								for(let k=0;k<temp.length-1;k++)
								{
									let temp_=temp[k];
									if(reco[temp_[0]]!=temp_[1])
									{
										tag=false;
										break;
									}
								}
								//alert(tag);
								if(tag===true)
								{
									//alert("SDDSDSDS");	
									console.log(temp[temp.length-1]);
									next=story[temp[temp.length-1]];
									reco[now.id]=i;
									break;
								}
							}
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
				next.ptr=next.content.length;
				let video=document.querySelector("video");
				video.addEventListener
				(
					"ended",
					function()
					{
						next=story[now.next[0]];
						//alert(now.next[0]);
						console.log(now.next[0]);
						trans();
					}
				);
				video.muted=true;
				video.autoplay=true;
				console.log("----------------");
				console.log(sources[0].type);
				console.log(sources[0].src);
				console.log(sources[1].type);
				console.log(sources[1].src);
				console.log(video.muted);
				console.log(video.autoplay);
				console.log("++++++++++++++++");
				btn=document.querySelector(".btn");
				btn.innerHTML="跳过";
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
				content_box.style.backgroundImage="url("+next.bgi+")";
				let content=document.querySelector(".content");
				if(now.content.length==1)
				{
					content.innerHTML=next.content[0];
					content.addEventListener
					(
						"click",
						function()
						{
							next=story[now.next[0]];
							trans();
						}
					);	
				}
				else
				{
					content.innerHTML=next.content[1];
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
				}
				next.ptr=next.content.length;
				break;
			case "paper":
				content_box.style.backgroundImage="url("+next.bgi+")";
				let paper_box=document.querySelector(".paper-box");
				paper_box.style.backgroundImage="url("+next.content[0]+")";
				btn=document.querySelector(".button");
				btn.innerHTML=next.content[1];
				btn.addEventListener
				(
					"click",
					function()
					{
						next=story[now.next[0]];
						trans();
					}
				);
				console.log(next.content[0]+"----"+next.content[1]);
				now.ptr=now.content.length;
				break;
			case "minigame":
			 sessionStorage.setItem('miniGameNode', JSON.stringify(now));
			 window.location.href = now.url;
			 break;
		}
	}
	else
	{
		let dia=document.querySelector(".dia");
		if(now.type=="single")
		{
			let name_b=document.querySelector(".name-box");
			let character=document.querySelector(".character");
			dia.innerHTML=now.content[now.ptr][2];
			name_b.innerHTML=now.content[now.ptr][1];
			character.style.backgroundImage="url("+now.chara[now.content[now.ptr][0]]+")";
		}
		else
			dia.innerHTML=now.content[now.ptr];
		now.ptr++;
	}
}

// 在原始网页的脚本中
window.onload = function() {
	// 检查URL中是否有特定的hash来决定是否继续故事流程
	if(window.location.hash === '#continueStory') {
	  // 检查是否有保存的故事节点信息
	  var miniGameNode = sessionStorage.getItem('miniGameNode');
	  if(miniGameNode) {
		// 解析保存的节点信息
		miniGameNode = JSON.parse(miniGameNode);
		// 设置下一个故事节点
		next = miniGameNode;
		// 清除保存的节点信息
		sessionStorage.removeItem('miniGameNode');
		// 继续故事流程
		trans();
	  }
	}
  }
trans();
onload();

