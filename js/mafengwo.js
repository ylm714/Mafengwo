$(document).ready(function(){
	// 点击head里的“更多”，显示框
	$("#head .more,#head .drop-bd").mouseover(function(){
		$("#head .drop-bd").css("display","block");
		$("#head .drop-bd").css("z-index","10");
		$("#head .more").css("background-color","#fff2d2");
	});
	$("#head .more,#head .drop-bd").mouseout(function(){
		$("#head .drop-bd").css("display","none");
		$("#head .drop-bd").css("z-index","-10");
		$("#head .more").css("background-color","#fff");

	});


	// hover酒店预订  出现框
	$("nav .hotelA,nav .hotelDetail").mouseover(function(){
		$("nav .navHotel .hotelA").css("border-bottom","4px solid #FF8A00");
		$("nav .hotelDetail").css("display","block");
		$("nav .hotelDetail").css("z-index","10");
	});
	$("nav .hotelA,nav .hotelDetail").mouseout(function(){
		$("nav .navHotel .hotelA").css("border-bottom","4px solid #FFA800");
		$("nav .hotelDetail").css("display","none");
		$("nav .hotelDetail").css("z-index","-10");


	});


	//首页五张照片的切换
	var page=1;
	var page_num=5;
	function slide(){
		var slideLeft=565;
		//首先将li的类名清空
		$("article .showPic .tab ul li").each(function(){
			if ($(this).hasClass("on")) 
			{
				$(this).removeClass("on");
			}
		});

		//如果是最后一张
		if (page==page_num) {
			//大图片滑动
			$("article .showPic .play ul").animate({ left: '0px' }, "slow");
			//左边小三角
			$("article .showPic .tab ul li").eq(0).addClass("on");
			page=1;
		}
		//不是最后一张
		else{
			//大图片滑动
			$("article .showPic .play ul").animate({ left: '-=' + slideLeft }, "slow");
			//左边小三角
			$("article .showPic .tab ul li").eq(page).addClass("on");
			page++;
		}	
	}
	setInterval(slide,2000);//注意后面的参数,每隔2s执行一次slide函数



	//筛选条件内的 显示隐藏功能
	$(".more a").click(
		function(){
			$(".contentDisplay").toggle(100);
		}
	);



	//筛选条件内的  背景的高度变换功能
	$(".more a").toggle(function(){
		$("#select").css("height","186px");
		$("#select .more a").html('收起');
		$("#select .more a").css("background-image","url(img/shut.jpg)");//图片路径为什么直接从img开始
		},
		function(){
			$("#select").css("height","80px");
			$("#select .more a").html('更多筛选条件');
			$("#select .more a").css("background-image","url(img/open.jpg)");
		}
	);



	// 限制详细信息（文档信息  游记）展示中的显示字数
	$(".contentDescrip .desp").each(function(){
		var maxwidth = 60;
		if ($(this).text().length > maxwidth) {
		$(this).text($(this).text().substring(0, maxwidth) + "...");
		}
	});


	//复制显示 详细信息（文档信息  游记） 的li
	$("#contentUl li:last-child").after($("#contentUl").html());

	// 限制旅行家专栏的显示字数
	$("#traveler dd p").each(function(){
		var maxwidth = 60;
		if ($(this).text().length > maxwidth) {
		$(this).text($(this).text().substring(0, maxwidth) );
		}
	});
		


	// 旅行家专栏内的图片切换 
	// 不要忘了双引号
	$("#traveler .blockUl li").click(function(){
		//获取点击的索引号
		var n=$(this).attr("data-id");
		var slideLeft=-n*264;
		//点击li  小块背景色改变
		$("#traveler .blockUl li").each(function(){
			if($(this).hasClass("on"))
			{
				$(this).removeClass("on");
			}	
		});
		$(this).addClass("on");
		$("#traveler .picUl").animate({ left: slideLeft }, "slow");
	});
	


		// 限制攻略中点评的字数
		//用了这个函数后，css失效
		// $("#strategy .review p").each(function(){
		// 	var maxwidth = 55;
		// 	if ($(this).text().length > maxwidth) {
		// 	$(this).text($(this).text().substring(0, maxwidth) );
		// 	}
		// });

});