$(function(){
	$('.collapse').on('show.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass().addClass('fa fa-minus-circle');
	});
	
	$('.collapse').on('hide.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass().addClass('fa fa-plus-circle');
	});
	
	$('#myForm').validator({
		feedback: {
			success: 'fa fa-check-circle',
			error: 'fa fa-times-circle'
		}
	});

	$('.form-sel').select2({
		minimumResultsForSearch: Infinity
	});
	
	wow = new WOW(
                      {
                      boxClass:     'wow',
                      animateClass: 'animated',
                      offset:       100,
                      mobile:       true,
                      live:         true
                    }
                    )
                    wow.init();
	
});