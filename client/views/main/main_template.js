Template.main.rendered = function () {
	$('.menu_overlay')
		.addClass('expanded')
		.addClass('first_time');
  $('.menu_toggle .fa')
  	.addClass('rotate45');
  $('.menu_overlay.expanded.first_time > ul')
  	.velocity(
	  	{ 
				translateY:'10%'
			})
		.velocity(
			{ 
				translateY:'0',
				opacity: 1 
			},
			{ 
				display: "block" 
			},  "ease-out"); 
}

Template.main.events({
	'click .menu_toggle': function(e){
		e.preventDefault();
		$('.menu_overlay').toggleClass('expanded');
    $('.menu_toggle .fa').toggleClass('rotate45');
	},
	'click .menu_overlay.expanded li': function(e){
		$('.menu_overlay')
			.toggleClass('expanded')
			.removeClass('first_time');
    $('.menu_toggle .fa')
    	.toggleClass('rotate45');

	}
})