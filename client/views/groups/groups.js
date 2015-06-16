Template.groups.rendered = function () {
	//sortGroup(0);
	var group_A = groups[0]['group']['teams'];
	//console.log('group_A: '+group_A[0]['team']['points']);
	console.log(group_A[0]['team']);
	console.log(group_A[1]['team']);
	console.log(group_A[2]['team']);
	console.log(group_A[3]['team']);
	//sortGroup(group_A);
	//console.log(groups[0]['group']['teams'][0]['team']['points']);
	function sortGroup(group) {
		//console.table(group);
		//console.log(groups[group]);
		//console.log(groups[group]['group']['teams'][0]['team']['points']);
		//var team_1 = groups[group]['group']['teams'][0]['team']['points'];
		
		
		
		for (i = 0; i < 6; i++) { //select group

			for (x = 0; x < 4; x++) { // select group member

			}
			//console.log(groups[group]['group']['teams'][i]['team']['points']);
			
			//var team_1 = groups[group]['group']['teams'][0]['team']['points'];
			//var team_2 = groups[group]['group']['teams'][1]['team']['points'];
			//var team_3 = groups[group]['group']['teams'][2]['team']['points'];
			//var team_4 = groups[group]['group']['teams'][3]['team']['points'];
		}
	}

	if ($('.groups_table').is('#group_A')) {

	}
	else if ($('.groups_table').is('#group_B')) {

	}
	else if ($('.groups_table').is('#group_C')) {

	}
	else if ($('.groups_table').is('#group_D')) {

	}
	else if ($('.groups_table').is('#group_E')) {

	}
	else if ($('.groups_table').is('#group_F')) {

	}

	function sortTable () {
		
	}
}