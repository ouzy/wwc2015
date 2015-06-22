Template.schedule.rendered = function () {
	var match_number = 0;
	for (x = 0; x < 54; x++) {
		addScore(x);
	}

	
	function addScore(n) {
		var num = n +1;
		if (n < 36) {
			if (matches[n]['status']=='future'){
				$('.team.home#match' + num).append(" - ");
				$('.team.away#match' + num).prepend(" - ");
			}
			else {
				$('.team.home#match' + num).append(" "+matches[n]['home_team']['goals']);
				$('.team.away#match' + num).prepend(matches[n]['away_team']['goals'] + " ");
			}
		}
		else {
			var fixture = $('.fixture#match' + num);
			console.log("num: " + num);
			console.log("n: " + n);
			console.table(matches[n]);
			//console.log(matches[num]['home_team']['country']);
			//console.log(num+" "+matches[n]['home_team']['country']);
			//console.log ("match: " + n + "match num: " + num);
			
					
			
			//
			//fixture.find('.team.away').prepend('.fixture#match' + num);
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