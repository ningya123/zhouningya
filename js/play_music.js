$(function(){
	$(".song_list1 ul li").click(function(){
		if($(this).index()==0){
			$(".tracks0").css("display","blcok");
			$(".tracks1").css("display","none");
			$(this).addClass("song_list_act").siblings().removeClass("song_list_act");
		}else if($(this).index()==1){
			$(".tracks0").css("display","none");
			$(".tracks1").css("display","block");
			$(this).addClass("song_list_act").siblings().removeClass("song_list_act");
		}	
	});
	var play=document.getElementById("play");
	var ado=document.getElementById("audio");
	var range_step=document.getElementById("range_step");
	var bar=document.getElementById("bar");
	var endtime=document.getElementsByClassName("play_endime")[0];
	var startime=document.getElementsByClassName("play_startime")[0];
	var startx,movex;
	var flag=true;
	var timer;
	var offleft;
	$("#range_step").attr("max",range_step.offsetWidth);
	ado.load();
	play.onclick=function(){
		if(flag){
			this.src="../img/study_msg/study_pc1.png";
			ado.play();	   	
			endtime.innerHTML="0"+parseInt(ado.duration/60)+":"+parseInt(ado.duration%60);
			flag=false;
		}else{
		   	this.src="../img/study_msg/study_pc8.png";
			ado.pause();	
			flag=true;
			clearInterval(timer);
		}
	}
	  function timeupdate(){
		   	range_step.style.left=parseInt(bar.offsetWidth/ado.duration*ado.currentTime)+"px";
			if(ado.currentTime%60<10){
			   	startime.innerHTML="0"+parseInt(ado.currentTime/60)+":0"+parseInt(ado.currentTime%60);		
			}else{
			   	startime.innerHTML="0"+parseInt(ado.currentTime/60)+":"+parseInt(ado.currentTime%60);				   		
			}	
			if(range_step.offsetLeft==bar.offsetWidth){
				clearInterval(timer);
			}
			range_step.addEventListener("touchstart",touchStart,false);
			range_step.addEventListener("touchmove",touchMove,false);
			range_step.addEventListener("touchend",touchEnd,false);	
	   }
	   ado.addEventListener("canplay",function(){
	   		alert("加载好啦!");
			timer=setInterval(timeupdate,1000);
	   },false);
		function touchStart(e){
			var ev=e||event;
			ev.preventDefault();
			//ado.removeEventListener("timeupdate",timeupdate,false);
			startx=ev.touches[0].pageX;
			clearInterval(timer);
			offleft=range_step.offsetLeft;
		}
	    function touchMove(e){
	   		var ev=e||event;
	   		ev.preventDefault();
	   		movex=ev.touches[0].pageX-startx;
	   		if(range_step.offsetLeft/bar.offsetWidth*ado.duration%60<10){
	   			startime.innerHTML="0"+parseInt(range_step.offsetLeft/bar.offsetWidth*ado.duration/60)+":0"+parseInt(range_step.offsetLeft/bar.offsetWidth*ado.duration%60);
	   		}else{
		   		startime.innerHTML="0"+parseInt(range_step.offsetLeft/bar.offsetWidth*ado.duration/60)+":"+parseInt(range_step.offsetLeft/bar.offsetWidth*ado.duration%60);	   			
	   		}
	   		if(movex>=bar.offsetWidth){
	   			range_step.style.left=bar.offsetWidth+"px";
	   		}else if(movex<=0){
	   			range_step.style.left=0;
	   		}else{	   			
		   		range_step.style.left=movex+offleft+"px";	   			
	   		}
	    }
	    function touchEnd(e){
	   		var ev=e||event;
	   		ev.preventDefault();
	   		range_step.style.left=movex+offleft+"px";
	   		ado.currentTime=range_step.offsetLeft/bar.offsetWidth*ado.duration;
	   		timer=setInterval(timeupdate,1000);
	    }
});
