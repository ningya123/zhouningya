$(function(){
	newtext($("#txtCustomsCode1"),$("#del1"),$(".logpwd1"));
	newtext($("#txtCustomsCode2"),$("#del2"),$(".renewpwd1"));
	newtext($("#txtCustomsCode3"),$("#del3"),$(".renewpwd2"));
	$("#del1").click(function(){
		$("#txtCustomsCode1").val("");
		$("#del1").css("display","none");
	});
	$("#del2").click(function(){
		$("#txtCustomsCode2").val("");
		$("#del2").css("display","none");
	});
	$("#del3").click(function(){
		$("#txtCustomsCode3").val("");
		$("#del3").css("display","none");
	});
	/*获取验证码倒计时*/
	$(".code3").click(function(){
		var sum=60;
		var timer=setInterval(function(){
			if(sum<0){
				$(".code3").html("重新获取");
				$(".code3").css("background","#868686");
				$(".code3").css("color","#1e1e1e");
				clearInterval(timer);
			}else{
				$(".code3").html("已发送"+sum+"s");
				$(".code3").css("background","#c9c9c9");
				$(".code3").css("color","#888");
				sum--;			
			}
		},1000);
	});
});



















