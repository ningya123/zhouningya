window.onresize=function(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
}
document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';	
$(function(){
	$(".logphone").focus(function(){
		$(".logphone").val("");
	});
	$(".logpwd").focus(function(){
		$(".del").css("display","block");
	});
	$(".phn2").focus(function(){
		 $(".pwdtip").html("");
	});
});
/*登录页表单提交*/
function handin(){
	var uname= /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	if($(".logphone").val()==""){	
		$(".logintip").html("请输入手机号");
		$(".logphone").val("");
		return false;
	}else if(uname.test($(".logphone").val())==false){
		$(".logintip").html("请输入正确的手机号格式");
		$(".logphone").val("");
		return false;
	}else if($(".logpwd").val()==""){	
		$(".logpwd").val("");
		$(".logintip").html("请输入密码");
		return false;
	}else{
	    return true;
	}
}
/*找回密码页面*/
function findpwd(){
	var phonenum=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	if($(".phn2").val()==""){
		$(".pwdtip").html("请输入手机号码");
		return false;
	}else if(phonenum.test($(".phn2").val())==false){
		 $(".phn2").val("");
		 $(".pwdtip").html("请输入正确的手机号格式");
		return false;
	}else if($(".code2").val()==""){
	    $(".code2").val("");
	    $(".pwdtip").html("请输入验证码");
		return false;
	}else{
		return true;
	}
}
function resetpwd(){
	if($(".renewpwd").val()==""){
		$(".renewpwd").val("");
		$(".errortip").html("请输入新密码");
		return false;
	}else if($(".reyes").val()==""){
	    $(".reyes").val("");
	    $(".errortip").html("请输入新密码");
		return false;
	}else if($(".reyes").val()!=$(".renewpwd").val()){
		$(".renewpwd").val("");
		$(".reyes").val("");
	    $(".errortip").html("密码输入不一致");
		return false;
	}else{
		return true;
	}
}
/*密码变成*号*/
function newtext(idname,del,pws){
	var i = 0;
    var value="";
   idname.keyup(function (e) {//给所需要处理的文本框处理keyUp事件 
        e = e || window.event;
        if(idname.val()!=""){
	        del.css("display","block");       	
        }else{
        	del.css("display","none");
        }
        del.click(function(){
        	idname.val("");
        	$(this).css("display","none");
        });
        var code = e.keyCode || e.which;
        if ((code >= 96 && code <= 105) || (code >= 65 && code <= 90) || (code >= 48 && code <= 57)) {//可以输入大小写字母、数字（包括小键盘） 
            var userkeydown = $(this).val().substr(i++);
            value = value + userkeydown;
            pws.val(value);
            var reg = "*";
            $(this).val($(this).val().replace(userkeydown, reg));
            
        }else {
            i = $(this).val().length;
            value = value.substr(0, i);
        }
	});
}
/*获得焦点清除内容*/
function input_focus(ele1,ele2){
	ele1.focus(function(){
		ele2.html("");
	});
}













