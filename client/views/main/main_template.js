Template.maps.rendered = function () {
	$('.menu_overlay').addClass('expanded').addClass('first_time');
  $('.menu_toggle .fa').addClass('rotate45');
}

Template.main.events({
	'click .menu_toggle .fa': function(e){
		e.preventDefault();
		$('.menu_overlay').toggleClass('expanded');
    $('.menu_toggle .fa').toggleClass('rotate45');
	},
	'click .menu_overlay.expanded li': function(e){
		$('.menu_overlay').toggleClass('expanded').removeClass('first_time');
    $('.menu_toggle .fa').toggleClass('rotate45');

	}
})