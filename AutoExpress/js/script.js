$(document).ready(function() {
	
	$('.slaid').slick({
		arrows:false,
		dots: false,
		slidesToShow: 3,
		responsive:[
		{
			breakpoint:321, 
			settings:{
				slidesToShow: 1,
		
			}
		},
		
		],
		responsive:[
		{
			breakpoint:425, 
			settings:{
				slidesToShow: 1,
		
			}
		},
		
		],
			


	});
});