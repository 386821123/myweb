
$(window).scroll(function(){
  if($(window).scrollTop()>=1100){
		$("#nav_top").show();
	}else{
		$("#nav_top").hide();
	};
	   var c=$(window).scrollTop();
	   if (c>=900){
	   	$("#navcebian").show();
	   }else {
	   	$("#navcebian").hide();
	   }
      if(c>=1000 && c<=2200){
      	$("#roumailink").css({background:"red"});
      }else{
         $("#roumailink").css({background:"#ccc"});
      }
       if(c>=2200 && c<=3200){
      		$("#jiajulink").css({background:"red"});
       }else {
       	    $("#jiajulink").css({background:"#ccc"});
       }
      if(c>=3200 && c<=4200){
      		$("#huwailink").css({background:"red"});
       }else {
       	    $("#huwailink").css({background:"#ccc"});
       }
      if(c>=4200 && c<=5200){
      		$("#xshilink").css({background:"red"});
       }else {
       	    $("#xshilink").css({background:"#ccc"});
       }
     if(c>=5200 && c<=6800){
      		$("#tianmaolink").css({background:"red"});
       }else {
       	    $("#tianmaolink").css({background:"#ccc"});
       }
    if(c>=6800 && c<=7800){
      		$("#meizlink").css({background:"red"});
       }else {
       	    $("#meizlink").css({background:"#ccc"});
       }
     if(c>=7800 && c<=8400){
      		$("#dbu").css({background:"red"});
       }else {
       	    $("#dbu").css({background:"#ccc"});
       }

});

// 字幕轮播

$(function(){
 function lunbo(id,height){
  var ul=$("#textlist");
  var liFirst=$("#textlist").find('li:first');
  $("#textlist").animate({top:height}).animate({"top":0},0,function(){
  var clone=liFirst.clone();
  $("#textlist").append(clone);
  liFirst.remove();
  })
 }
  lunbo('ul','-24px');
 var time=setInterval(lunbo,3000);
 var divmian=document.getElementById("textmenu");
  // 鼠标移入轮播暂停
  divmian.onmouseover=function () {
    clearInterval(time);
  }
  // 鼠标移出轮播开始
  divmian.onmouseout=function(){
    time=setInterval(lunbo,3000)
  }
})