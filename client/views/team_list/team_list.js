Template.teamlist.rendered = function() {
	$('.team_name#aus').addClass('active');
	$('.details#aus').hide();
  setTimeout(function() {
  	$('.details#aus').addClass('in-view').velocity(
					{ 
						translateX:'100%'
					})
				.velocity(
  				{ 
  					translateX:'0',
  					opacity: 1 
  				},
  				{ 
  					display: "block" 
  				}); 	
		}, 500);
    setTimeout(function() {
        $('.details#aus' + " .text")
          .velocity(
            { 
              translateX:'100%'
            })
          .velocity(
            { 
              translateX:'0'
            });   
      }, 700);
}


Template.teamlist.events({
	
	'click .team_name': function(e){
		e.preventDefault();
		var team = $(this).attr('id');
  	$('.team_name').removeClass('active');
  	$('.team_name#'+team).addClass('active');

  	$('.details.in-view').removeClass('in-view').velocity(
  			{ opacity: 0, translateX:'-100%' },	
				{ display: "none" }
  		).velocity("reverse");

  	//team info fade in and out
  	setTimeout(function() {
			$('.details#'+team).addClass('in-view')
				.velocity(
					{ 
						translateX:'100%'
					})
				.velocity(
  				{ 
  					translateX:'0',
  					opacity: 1 
  				},
  				{ 
  					display: "block" 
  				}); 	
		}, 200);
    setTimeout(function() {
      $('.details#'+team + " .text")
        .velocity(
          { 
            translateX:'100%'
          })
        .velocity(
          { 
            translateX:'0'
          });   
    }, 300);
	}
})


