Template.today.rendered = function () {
	var match_number = 0;
	for (x = 0; x < 36; x++) {
		addScore(x);
	}
	function addScore(n) {
		var num = n +1;
		if (matches[n]['status']=='future'){
			$('.flag .home#match' + num +' .score h2').append("-");
			$('.flag .away#match' + num +' .score h2').append("-");
		}
		else {
			$('.flag .home#match' + num +' .score h2').append(matches[n]['home_team']['goals']);
			$('.flag .away#match' + num +' .score h2').append(matches[n]['away_team']['goals']);
			if (matches[n]['status']=='completed'){ 
					$('.flag .match_status#match' + num +' h2').append('FT');
			}
			else {
				$('.flag .match_status#match' + num +' h2').append(matches[n]['status']);
			}
		}
	}
}