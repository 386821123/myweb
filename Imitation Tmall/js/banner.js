

$(function(){
	   var i=0;
  	   var time;
      var slide=function(){
  		if(i==6){
  			i=0;
  		}
  		i++;
  		var src="img/banner"+i+".jpg";
  		$('#list li').css({color:"#CCCCCC"});// 设置每次轮播后li颜色为灰色
  		var s=$("#mian img").attr("src",src);
  		
  		$('#list li:eq('+ (i-1) +')').css({color:"red"});
     }

  	    time=setInterval(slide,2000);
	    $('#list li').hover(function(){
	    	clearInterval(time);
	    	var $id=this.id;
	    	var imgs="img/banner"+$id+".jpg";
            $("#list li").css({color:"#cccccc"});
            $("#mian img").attr("src",imgs);
            $("#"+$id).css({color:"red"});
	    },function(){
	    	i=this.id;
	    	time=setInterval(slide,2000);
	    })
})
     