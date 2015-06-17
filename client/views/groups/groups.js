Template.groups.rendered = function () {
	//sortGroup(0);
	
	//console.log('group_A: '+group_A[0]['team']['points']);
	//console.log(group_A[0]['team']);
	//console.log(group_A[1]['team']);
	//console.log(group_A[2]['team']);
	//console.log(group_A[3]['team']);
	console.log(groups[0]['group']['teams'][0]['team']['points']);
	var group_A = [
		groups[0]['group']['teams'][0]['team'],
		groups[0]['group']['teams'][1]['team'],
		groups[0]['group']['teams'][2]['team'],
		groups[0]['group']['teams'][3]['team']];
	var group_B = [
		groups[1]['group']['teams'][0]['team'],
		groups[1]['group']['teams'][1]['team'],
		groups[1]['group']['teams'][2]['team'],
		groups[1]['group']['teams'][3]['team']];
	var group_C = [
		groups[2]['group']['teams'][0]['team'],
		groups[2]['group']['teams'][1]['team'],
		groups[2]['group']['teams'][2]['team'],
		groups[2]['group']['teams'][3]['team']];
	var group_D = [
		groups[3]['group']['teams'][0]['team'],
		groups[3]['group']['teams'][1]['team'],
		groups[3]['group']['teams'][2]['team'],
		groups[3]['group']['teams'][3]['team']];
	var group_E = [
		groups[4]['group']['teams'][0]['team'],
		groups[4]['group']['teams'][1]['team'],
		groups[4]['group']['teams'][2]['team'],
		groups[4]['group']['teams'][3]['team']];	
	var group_F = [
		groups[5]['group']['teams'][0]['team'],
		groups[5]['group']['teams'][1]['team'],
		groups[5]['group']['teams'][2]['team'],
		groups[5]['group']['teams'][3]['team']];	
	console.table(group_A);
	//group_A.sort(groupSort());
	group_A.sort(function (a, b) {
	  return groupSort(a,b);
	});
	console.table(group_A);

	console.table(group_B);
	group_B.sort(function (a, b) {
	  return groupSort(a,b);
	});
	console.table(group_B);

	console.table(group_C);
	group_C.sort(function (a, b) {
	  return groupSort(a,b);
	});
	console.table(group_C);

	console.table(group_D);
	group_D.sort(function (a, b) {
	  return groupSort(a,b);
	});
	console.table(group_D);

	console.table(group_E);
	group_E.sort(function (a, b) {
	  return groupSort(a,b);
	});
	console.table(group_E);

	console.table(group_F);
	group_F.sort(function (a, b) {
	  return groupSort(a,b);
	});
	console.table(group_F);

	
	function groupSort (a, b) {
	  if (a.points < b.points) {
	    return 1;
	  }
	  if (a.points > b.points) {
	    return -1;
	  }
	  if (a.points == b.points) {
	  	if (a.goal_differential < b.goal_differential) {
		    return 1;
		  }
		  if (a.goal_differential > b.goal_differential) {
		    return -1;
		  }
	  }
	  // a must be equal to b
	  return 0;
	};
	//console.log(groups[0]['group']['teams'][0]['team']['points']);

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
}