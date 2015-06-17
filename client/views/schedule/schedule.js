Template.schedule.rendered = function () {
	var match_number = 0;
	for (x = 0; x < 36; x++) {
		console.log(x);
		addScore(x);
	}
	
	function addScore(n) {
		var num = n +1;
		if (matches[n]['status']=='future'){
			$('.team.home#match' + num).append(" - ");
			$('.team.away#match' + num).prepend(" - ");
		}
		else {
			$('.team.home#match' + num).append(" "+matches[n]['home_team']['goals']);
			$('.team.away#match' + num).prepend(matches[n]['away_team']['goals'] + " ");
		}
	}
}