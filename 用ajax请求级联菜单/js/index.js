!function(window,document,$,undefined){
	
	var url = 'http://dohtml5.duapp.com/php/wbc2/getPlace.php?callback=?';
	
	var init = function() {
		initEvent();
		getDate();
	};
	
	var initEvent = function() {
		$('#province').on('change',onProvinceChange);
		$('#city').on('change',onCityChange);
	};
	
	var onProvinceChange = function() {
		
		var val = this.value;
		getDate(val,'city')
		$('#area').html('<option value = "0">请选择</option>');
	};
	var onCityChange = function() {
		
		var val = this.value;
		getDate(val,'area')

	};
	
	var getDate = function(id,renderId) {
		
		var param;
		
		if(id) {
			param = {id:id}
		}
		
		$.get(url,param,function(date) {
			render(date,renderId);
		},'json')
		
	};
	
	var render = function(date,renderId) {
		var opts = [];
		opts.push('<option value = "0">请选择</option>');
		renderId = renderId || 'province';
		$.each(date, function(i,obj) {
			opts.push('<option value = "',obj[renderId + 'ID'],'">',obj[renderId],'</option>')
		});
		$('#' + renderId).html(opts.join(''));
	};
	
	
	init();
	
}(window,document,jQuery);
