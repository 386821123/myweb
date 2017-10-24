window.onload = function(){
	var wrapper = document.querySelector(".wrapper");
	var banner = document.querySelector(".banner");
	var items = banner.children;//代表ul 下面的li
	var indicator = document.querySelector(".indicator");   //获取 ul class="indicator"
	var len = items.length;
	var cur; //当前显示图片的索引
	for(var i=0;i<len;i++){
		indicator.innerHTML += "<li></li>";
	}
	//指示器容器的水平居中
	indicator.style.marginLeft = -indicator.offsetWidth / 2 +"px";
	//第一个li背景色变白
	indicator.firstElementChild.className ="active";
	items[0].className = "active";
	
	for(var i=0; i<len; i++){
		var _this = indicator.children[i];
		_this.index = i;
		_this.addEventListener("mouseenter",function(){
			clearInterval(timer);//鼠标移入指示器内时停止自动轮播
			mEnterFn(this);
		});
        _this.addEventListener("mouseleave",function(){
            timer = setInterval(carousel,3000);//鼠标移出指示器内时开启自动轮播
        });
	}
	
	//鼠标移入暂停轮播
	banner.addEventListener("mouseenter",function(){
		clearInterval(timer);
	})
	
	//鼠标移出开启轮播
	banner.addEventListener("mouseleave",function(){
		timer = setInterval(carousel,3000);
	})
	
	//循环轮播
	var timer = setInterval(carousel,3000);
	
	function mEnterFn(obj){
		//鼠标移入指示器改变背景色
		var  active= indicator.querySelector(".active").className;
        indicator.querySelector(".active").className = active.replace("active","");
		obj.className = "active";
		//对应图片轮播
        active = banner.querySelector(".active").className;
        banner.querySelector(".active").className = active.replace("active","");
		items[obj.index].className += "active";
		cur = obj.index;
	}
	function carousel(){
		cur<len-1?cur++:cur=0;
//		console.log(cur);
		mEnterFn(indicator.children[cur]);
	}
}

function addClass(srcStr,desStr){
	/*如果源字符串为空，则将目标字符串赋值给源字符串*/
	
	/*如果源字符串不为空，则将目标字符串添加到源字符串的末尾*/
}
