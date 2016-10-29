$(function(){
	$(".new_yzm2").click(function(){
		var sum=60;
		var timer=setInterval(function(){
			if(sum<0){
				$(".new_yzm2").html("重新获取");
				clearInterval(timer);
			}else{
				$(".new_yzm2").html("已发送"+sum+"s");
				sum--;			
			}
		},1000);
	});
	newtext($(".pwd1"),$(".pwd_btn1"),$(".pwd2"));
	$(".confirm_bd").click(function(){
		if($(".old_number").val()==""){
			$(".change_phone_tip").html("请输入原号码！");
		}else if($(".pwd2").val()==""){
			$(".change_phone_tip").html("请输入密码！");
		}else if($(".new_phone_number").val()==""){
			$(".change_phone_tip").html("请输入新的手机号码！");
		}else if($(".yzm").val()==""){
			$(".change_phone_tip").html("请输入验证码！");
		}else{
			$(".window_screen").css("display","block");
			$(".new_window").css("display","block");
			setTimeout(function(){
				$(".window_screen").css("display","none");
				$(".new_window").css("display","none");
			},3000);
		}
	});
	input_focus($(".old_number"),$(".change_phone_tip"));
	input_focus($(".pwd2"),$(".change_phone_tip"));
	input_focus($(".new_phone_number"),$(".change_phone_tip"));
	input_focus($(".yzm"),$(".change_phone_tip"));
})
