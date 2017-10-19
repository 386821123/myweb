// function check(){
// 	var youhu=document.getElementById("youhu").value;
// 		if(!/^[a-zA-Z0-9_]+$/.test(youhu)){
// 			alert("用户名不合法")；
// 			return false;
// 		}
// }
function check(){
			var username=document.getElementById("username").value;
			if(!/^[a-zA-Z0-9_]+$/.test(username)){
				alert('用户名不合法');
				return false;
			}
			var password=document.getElementById("password").value;
			if(/^[\s\n\t\r]*$/.test(password)){
				alert('密码不能为空');
				return false;
			}
			
			return true;
		}

	
