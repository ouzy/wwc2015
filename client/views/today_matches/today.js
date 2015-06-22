Template.today.rendered = function () {
	var match_number = 0;
	for (x = 0; x < 54; x++) {
		addScore(x);
	}
	function addScore(n) {
		var num = n +1;
		if (n < 36) {
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
		else {
			var fixture = $('.fixture#match' + num);
			console.log("num: " + num);
			console.log("n: " + n);
			console.table(matches[n]);
			
			if (matches[n]['status'] =='future'){
				if (matches[n]['home_team']['code'] == "TBD"){
					fixture.find('.team.home').append(matches[n]['home_team']['team_tbd']);	
				}
				else {
					fixture.find('.team.home').append(matches[n]['home_team']['country']);
				}
				if (matches[n]['away_team']['code'] == "TBD"){
					fixture.find('.team.away').append(matches[n]['away_team']['team_tbd']);	
				}
				else {
					fixture.find('.team.away').append(matches[n]['away_team']['country']);
				}
				fixture.find('.team.home').append(" - ");
				fixture.find('.team.away').prepend(" - ");
			}
			else {
				fixture.find('.team.home').append(matches[n]['home_team']['country'] + " ");
				fixture.find('.team.home').append(matches[n]['home_team']['goals']);
				

				fixture.find('.team.away').prepend(matches[n]['away_team']['goals'] + " ");
				fixture.find('.team.away').append(matches[n]['away_team']['country']);
			}
		}
	}
}