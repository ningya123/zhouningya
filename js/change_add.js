$(function(){
	$(".change_btn").click(function(){
		if($(".change_add2").val()==""){
			$(".change_add_tip").html("请输入家庭地址");
		}else{
			$(".add_screen").css("display","block");
			$(".add_window").css("display","block");			
			setTimeout(function(){
				$(".add_screen").css("display","none");
				$(".add_window").css("display","none");
			},3000);
		}
	});
	
})
