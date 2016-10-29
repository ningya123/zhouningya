$(function(){
	newtext($(".oldpwd2"),$(".oldpwd_del"),$(".old_password"));
	newtext($(".newpwd2"),$(".newpwd_del"),$(".new_password"));
	newtext($(".newpwd2_confirm2"),$(".newpwd_del_confirm4"),$(".newpwd2_conf"));
	$(".confirm_yes").click(function(){
		if($(".old_password").val()==""){
			$(".change_tip").html("请输入原密码！");
		}else if($(".new_password").val()==""){
			$(".change_tip").html("请输入新密码！");
		}else if($(".newpwd2_confirm2").val()==""){
			$(".change_tip").html("密码确认不能为空！");
		}else if($(".new_password").val()!=$(".newpwd2_conf").val()){
			$(".change_tip").html("新密码和确认密码必须一致！");
		}else{
			$(".pwd_screen").css("display","block");
			$(".pwd_window").css("display","block");
			setTimeout(function(){
				$(".pwd_screen").css("display","none");
				$(".pwd_window").css("display","none");
			},3000);
		}
	});	
	input_focus($(".oldpwd2"),$(".change_tip"));
	input_focus($(".newpwd2"),$(".change_tip"));
	input_focus($(".newpwd2_confirm2"),$(".change_tip"));
});
