

var data = {
	teams: [{	id: 'aus',
						group: 'Group D',
						country: "Australia", 
						game1: 'United States', 
						game2: 'Nigeria', 
						game3: 'Sweden',
						game1_loc: 'Winnipeg',
						game2_loc: 'Winnipeg',
						game3_loc: 'Edmonton'
					},
					{	id: 'bra',
						group: 'Group E',
						country: "Brazil",
						game1: 'South Korea', 
						game2: 'Spain', 
						game3: 'Costa',
						game1_loc: 'Montreal',
						game2_loc: 'Montreal',
						game3_loc: 'Moncton'
					},
					{	
						id: 'cam',
						group: 'Group C',
						country: "Cameroon", 
						game1: 'Ecuador', 
						game2: 'Japan', 
						game3: 'Switzerland',
						game1_loc: 'Vancouver',
						game2_loc: 'Vancouver',
						game3_loc: 'Edmonton'
					},
					{	id: 'can',
						group: 'Group A',
						country: "Canada", 
						game1:'China PR', 
						game2: 'New Zealand', 
						game3: 'Netherlands',
						game1_loc: 'Edmonton',
						game2_loc: 'Edmonton',
						game3_loc: 'Montreal'
					},
					{	
						id: 'chi',
						country: "China PR",
						group: 'Group A', 
						game1: 'Canada', 
						game2:'Netherlands', 
						game3: 'New Zealand',
						game1_loc: 'Edmonton',
						game2_loc: 'Edmonton',
						game3_loc: 'Winnipeg'
					},
					{	id: 'col',
						group: 'Group F',
						country: "Colombia", 
						game1: 'Mexico', 
						game2: 'France', 
						game3: 'England',
						game1_loc: 'Moncton',
						game2_loc: 'Moncton',
						game3_loc: 'Montreal'
					},
					{	id: 'crc',
						group: 'Group E',
						country: "Costa Rica", 
						game1: 'Spain', 
						game2: 'South Korea', 
						game3: 'Brazil',
						game1_loc: 'Montreal',
						game2_loc: 'Montreal',
						game3_loc: 'Moncton'
					},
					{	id: 'ecu',
						group: 'Group C',
						country: "Ecuador", 
						game1: 'Cameroon', 
						game2: 'Switzerland', 
						game3: 'Japan',
						game1_loc: 'Vancouver',
						game2_loc: 'Vancouver',
						game3_loc: 'Winnipeg'
					},
					{	id: 'eng',
						group: 'Group F',
						country: "England", 
						game1: 'France', 
						game2: 'Mexico', 
						game3: 'Colombia',
						game1_loc: 'Moncton',
						game2_loc: 'Moncton',
						game3_loc: 'Montreal'
					},
					{	id: 'fra',
						group: 'Group F',
						country: "France", 
						game1: 'England', 
						game2: 'Colombia', 
						game3: 'Mexico',
						game1_loc: 'Moncton',
						game2_loc: 'Moncton',
						game3_loc: 'Ottawa'
					},
					{	id: 'ger',
						group: 'Group B',
						country: "Germany", 
						game1: 'Ivory Coast', 
						game2: 'Norway', 
						game3:'Thailand',
						game1_loc: 'Ottawa',
						game2_loc: 'Ottawa',
						game3_loc: 'Winnipeg'
					},
					{	id: 'ivc',
						group: 'Group B',
						country: "Ivory Coast", 
						game1: 'Germany', 
						game2: 'Thailand', 
						game3: 'Norway',
						game1_loc: 'Ottawa',
						game2_loc: 'Ottawa',
						game3_loc: 'Moncton'
					},
					{	id: 'jap',
						group: 'Group C',
						country: "Japan", 
						game1: 'Switzerland', 
						game2: 'Cameroon', 
						game3: 'Ecuador',
						game1_loc: 'Vancouver',
						game2_loc: 'Vancouver',
						game3_loc: 'Winnipeg'
					},
					{	id: 'mex',
						group: 'Group F',
						country: "Mexico", 
						game1: 'Colombia', 
						game2: 'England', 
						game3: 'France',
						game1_loc: 'Moncton',
						game2_loc: 'Moncton',
						game3_loc: 'Ottawa'
					},
					{	id: 'ned',
						group: 'Group A',
						country: "Netherlands", 
						game1: 'New Zealand', 
						game2: 'China', 
						game3: 'Canada',
						game1_loc: 'Edmonton',
						game2_loc: 'Edmonton',
						game3_loc: 'Montreal'
					},
					{	id: 'nzl',
						group: 'Group A',
						country: "New Zealand", 
						game1: 'Netherlands', 
						game2: 'Canada', 
						game3: 'China',
						game1_loc: 'Edmonton',
						game2_loc: 'Edmonton',
						game3_loc: 'Winnipeg'
					},
					{	id: 'nig',
						group: 'Group D',
						country: "Nigeria", 
						game1: 'Sweden', 
						game2: 'Australia', 
						game3: 'United States',
						game1_loc: 'Winnipeg',
						game2_loc: 'Winnipeg',
						game3_loc: 'Vancouver'
					},
					{	id: 'nor',
						group: 'Group B',
						country: "Norway", 
						game1: 'Thailand', 
						game2: 'Germany', 
						game3: 'Ivory Coast',
						game1_loc: 'Ottawa',
						game2_loc: 'Ottawa',
						game3_loc: 'Moncton'
					},
					{	id: 'skr',
						group: 'Group E',
						country: "South Korea", 
						game1: 'Brazil', 
						game2: 'Costa Rica', 
						game3: 'Spain',
						game1_loc: 'Montreal',
						game2_loc: 'Montreal',
						game3_loc: 'Ottawa'
					},
					{	id: 'spa',
						group: 'Group E',
						country: "Spain", 
						game1: 'Costa Rica', 
						game2: 'Brazil', 
						game3: 'South Korea',
						game1_loc: 'Montreal',
						game2_loc: 'Montreal',
						game3_loc: 'Ottawa'
					},
					{	id: 'swe',
						group: 'Group D',
						country: "Sweden", 
						game1: 'Nigeria', 
						game2: 'United States', 
						game3: 'Australia',
						game1_loc: 'Winnipeg',
						game2_loc: 'Winnipeg',
						game3_loc: 'Edmonton'
					},
					{	id: 'sui',
						group: 'Group C',
						country: "Switzerland", 
						game1: 'Japan', 
						game2: 'Ecuador', 
						game3: 'Cameroon',
						game1_loc: 'Vancouver',
						game2_loc: 'Vancouver',
						game3_loc: 'Edmonton'
					},
					{	id: 'tld',
						group: 'Group B',
						country: "Thailand", 
						game1: 'Norway', 
						game2: 'Ivory Coast', 
						game3:'Germany',
						game1_loc: 'Ottawa',
						game2_loc: 'Ottawa',
						game3_loc: 'Winnipeg'
					},
					{	id: 'usa',
						group: 'Group D',
						country: "United States", 
						game1: 'Australia', 
						game2: 'Sweden', 
						game3: 'Nigeria',
						game1_loc: 'Winnipeg',
						game2_loc: 'Winnipeg',
						game3_loc: 'Vancouver'
					}],

  stadium: [{location: 'Edmonton'}, {location: 'Moncton'}, {location: 'Montreal'}, {location: 'Ottawa'}, {location: 'Vancouver'}, {location: 'Winnipeg'}]
}

Template.main.helpers({  
  //populate the list of teams
  
});

Template.teamlist.helpers(data); 

Router.configure({
	layoutTemplate: 'main',
})

Router.route('home', {
	path: '/'
});


Router.route('maps', {
	path: '/maps'
});

Router.route('teamlist', {
	path: '/teams'
});

Router.route('about', {
	path: '/about'
});
