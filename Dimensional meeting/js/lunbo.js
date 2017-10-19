//	counter表示轮播到第几张图片的变量
		var counter = 0;
		var len = 5;//表示有多少张图片
		var timer = null;
		setLunbo();
		//时间函数，隔一秒  执行一次  （隔一秒 切换一张图片）
		function setLunbo(){
			timer = setInterval(function(){
				counter++;
				if(counter == len){
					counter = 0;
				}
				//当图片轮播到第一张图片的时候  我们让第一张图片的上一张图片为最后一张图片
				var b_counter = (counter-1)<0?len-1:counter-1;
				document.getElementById('photo'+b_counter).className = "photo";
				document.getElementById('photo'+counter).className = "photo pactive";
				document.getElementById('circle'+b_counter).className = "banner1";
				document.getElementById('circle'+counter).className = "banner1 bactive";
			},3000);

		}
		
		//实现hover效果
		var node_circle_area = document.getElementById("hover_area");
		node_circle_area.onmouseover =function(e){
			var node_id = e.target.id;
			if(node_id.indexOf("circle") != -1){
				window.clearInterval(timer);
				var count_hover =   node_id.replace("circle","");//"circle0".replace("circle","");
				counter = count_hover;
				//获得所有的img
				var img_nodes = document.getElementsByTagName("img");
				for(var i=0,l=img_nodes.length;i<l;i++){
					if(img_nodes[i].className.indexOf("pactive")!=-1){
						img_nodes[i].className = "photo";
					}
				}
				//获得所有li的标签
				var li_nodes = document.getElementsByTagName("li");
				for(var i=0,l=li_nodes.length;i<l;i++){
					if(li_nodes[i].className.indexOf("bactive")!=-1){
						li_nodes[i].className = "banner1";
					}
				}
				document.getElementById("photo"+count_hover).className = "photo pactive";
				document.getElementById('circle'+count_hover).className = "banner1 bactive";
			}

		}
		//鼠标移出
		node_circle_area.onmouseout = function(e){
			var node_id = e.target.id;
			if(node_id.indexOf("circle") != -1){
				setLunbo();
			}
		}