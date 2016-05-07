
function checkForm() {
	
	var $name = $('#name');
	var $age = $('#age');
	var mobileRe = /^1\d{10}$/;
	var $hobbies = $('[name=hobbies]');
	var $textarea = $('#textarea');
	if($.trim($name.val()) == '') {
		alert('姓名不能为空')
		return false;
	}
	if($.trim($age.val()) == '') {
		alert('年龄不能为空')
		return false;
	}
	if(isNaN(age.value)) {
		alert('年龄必须为数字')
		return false;
	}
	if(mobile.value == '') {
		alert('手机号不能为空')
		return false;
	}
	if(!mobileRe.test(mobile.value)) {
		alert('手机号格式不正确')
		return false;
	}
	if($.trim($textarea.val()) == '') {
		alert('地址不能为空')
		return false;
	}
	
	if(!checkArr($hobbies)) {
		alert('爱好不能为空')
		return false;
	}
	if(mySel.value == 0) {
		alert('请选择学历')
		return false;
	}
	alert('恭喜你注册成功')
	
	function checkArr(arr) {
		var i=0,len = arr.length;
		for(; i<len; i++) {
			if(arr[i].checked) {
				return true
			}
		}
		return false
	}

};
	
	

