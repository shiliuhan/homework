
/*var myDiv = document.getElementById('myDiv');
var myBtn = document.getElementById('myBtn');
var text = document.getElementById('text');
var sel = document.getElementById('sel');
var total,timer;

myBtn.onclick = onBtnClick;

function onBtnClick() {
	var val = text.value,
		selVal = sel.value;
	if(isNaN(text.value) || text.value == '') {
			alert('无效数字');
			text.value = '';
			return;
		} else {
			total = val*selVal;
			text.value = '';
		}
		if(timer) {
			return;
		}
	timer = setInterval(function() {
			Runner();
		}, 1000);
		Runner();
}

function Runner() {
	var h, m, s;
	h = Math.floor(total/3600);
	m = Math.floor((total/60)%60);
	s = Math.floor(total%60);
	h = h>=10?h:'0'+h;
	m = m>=10?m:'0'+m;
	s = s>=10?s:'0'+s;
	myDiv.innerHTML = h +':'+ m +':' +s;
	if(total == 0) {
		clearInterval(timer);
		alert('时间到');
	}
	total--;
}*/


function daojishi() {
	var myDiv = document.getElementById('myDiv');
	var myBtn = document.getElementById('myBtn');
	var myBtn2 = document.getElementById('myBtn2');
	var text = document.getElementById('text');
	var sel = document.getElementById('sel');
	var total,timer;
	myBtn.onclick = function() {
		var iptVal = text.value;
		var selVal = sel.value;
		if(timer) {
			return
		}
		if(total) {
			run();
			time();
		} else {
			if(isNaN(text.value) || text.value <= 0) {
				alert('输入错误');
				text.value = '';
				return
			} else if(selVal == -1) {
					alert('请选择计时单位')
					return
			}
			total = iptVal * selVal;
			text.value = '';
			run();
			time();
		}
	}
	myBtn2.onclick = function() {
		clearInterval(timer);
		timer = 0
	}
	function time() {
		timer = setInterval(function() {
			run()
		},1000);
	}
	function run() {
		var h,m,s;
		h = Math.floor(total/3600);
		m = Math.floor(total/60%60);
		s = Math.floor(total%60);
		myDiv.innerHTML = addZero(h) + ':' +addZero(m) + ':' +addZero(s);
		if(total == 0) {
			alert('时间到');
			clearInterval(timer)
		} else if(total <= 10) {
			myDiv.className = 'red'
		};
		total--;
	}
}
daojishi();
function addZero(a) {
	return a<10 ? '0' + a : a
}








