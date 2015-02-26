

var data = {
	teams: [{	id: 'aus',
						group: 'Group D',
						country: "Australia", 
						game1: 'United States', 
						game2: 'Nigeria', 
						game3: 'Sweden',
						game1_loc: 'Winnipeg',
						game2_loc: 'Winnipeg',
						game3_loc: 'Edmonton',
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

  				stadium: [{location: 'Edmonton', id: 1}, {location: 'Moncton', id: 2}, {location: 'Montreal', id: 3}, {location: 'Ottawa', id: 4}, {location: 'Vancouver', id: 5}, {location: 'Winnipeg', id: 6}]
};

var match = {
	schedule: [{	
						match_id: 1,
						group: 'Group A',
						home: 'Canada',
						away: 'China',
						home_id: 'can',
						away_id: 'chi',
						location: 'Edmonton',
						location_id: 1,
						stadium: "Commonwealth Stadium",
						time: '18:00', // ET time
						date: "June 6",
						score: ''
					},
					{	
						match_id: 2,
						group: 'Group A',
						home: 'New Zealand',
						away: 'Netherlands',
						home_id: 'nzl',
						away_id: 'ned',
						location: 'Edmonton',
						location_id: 1,
						stadium: "Commonwealth Stadium",
						time: '21:00', // ET time
						date: "June 6",
						score: ''
					},
					{	
						match_id: 3,
						group: 'Group B',
						home: 'Norway',
						away: 'Thailand',
						home_id: 'nor',
						away_id: 'tld',
						location: 'Ottawa',
						location_id: 4,
						stadium: "Lansdowne Stadium",
						time: '13:00', // ET time
						date: "June 7",
						score: ''
					},
					{	
						match_id: 4,
						group: 'Group B',
						home: 'Germany',
						away: 'Ivory Coast',
						home_id: 'ger',
						away_id: 'ivc',
						location: 'Ottawa',
						location_id: 4,
						stadium: "Lansdowne Stadium",
						time: '16:00', // ET time
						date: "June 7",
						score: ''
					},
					{	
						match_id: 5,
						group: 'Group D',
						home: 'Sweden',
						away: 'Nigeria',
						home_id: 'swe',
						away_id: 'nig',
						location: 'Winnipeg',
						location_id: 6,
						stadium: "Winnipeg Stadium",
						time: '16:00', // ET time
						date: "June 8",
						score: ''
					},
					{	
						match_id: 6,
						group: 'Group C',
						home: 'Cameroon',
						away: 'Ecuador',
						home_id: 'cam',
						away_id: 'ecu',
						location: 'Vancouver',
						location_id: 5,
						stadium: "BC Place Stadium",
						time: '19:00', // ET time
						date: "June 8",
						score: ''
					},
					{	
						match_id: 7,
						group: 'Group D',
						home: 'United States',
						away: 'Australia',
						home_id: 'usa',
						away_id: 'aus',
						location: 'Winnipeg',
						location_id: 6,
						stadium: "Winnipeg Stadium",
						time: '19:30', // ET time
						date: "June 8",
						score: ''
					},
					{	
						match_id: 8,
						group: 'Group C',
						home: 'Japan',
						away: 'Switzerland',
						home_id: 'jap',
						away_id: 'sui',
						location: 'Vancouver',
						location_id: 5,
						stadium: "BC Place Stadium",
						time: '20:00', // ET time
						date: "June 8",
						score: ''
					},
					{	
						match_id: 9,
						group: 'Group F',
						home: 'France',
						away: 'England',
						home_id: 'fra',
						away_id: 'eng',
						location: 'Moncton',
						location_id: 2,
						stadium: "Moncton Stadium",
						time: '13:00', // ET time
						date: "June 9",
						score: ''
					},
					{	
						match_id: 10,
						group: 'Group E',
						home: 'Spain',
						away: 'Costa Rica',
						home_id: 'spa',
						away_id: 'crc',
						location: 'Montreal',
						location_id: 3,
						stadium: "Olympic Stadium",
						time: '16:00', // ET time
						date: "June 9",
						score: ''
					},
					{	
						match_id: 11,
						group: 'Group F',
						home: 'Colombia',
						away: 'Mexico',
						home_id: 'col',
						away_id: 'mex',
						location: 'Moncton',
						location_id: 2,
						stadium: "Moncton Stadium",
						time: '16:00', // ET time
						date: "June 9",
						score: ''
					},
					{	
						match_id: 12,
						group: 'Group E',
						home: 'Brazil',
						away: 'South Korea',
						home_id: 'bra',
						away_id: 'skr',
						location: 'Montreal',
						location_id: 3,
						stadium: "Olympic Stadium",
						time: '19:00', // ET time
						date: "June 9",
						score: ''
					},
					{	
						match_id: 13,
						group: 'Group B',
						home: 'Germany',
						away: 'Norway',
						home_id: 'ger',
						away_id: 'nor',
						location: 'Ottawa',
						location_id: 4,
						stadium: "Lansdowne Stadium",
						time: '16:00', // ET time
						date: "June 11",
						score: ''
					},
					{	
						match_id: 14,
						group: 'Group A',
						home: 'China',
						away: 'Netherlands',
						home_id: 'chi',
						away_id: 'ned',
						location: 'Edmonton',
						location_id: 3,
						stadium: "Commonwealth Stadium",
						time: '18:00', // ET time
						date: "June 11",
						score: ''
					},
					{	
						match_id: 15,
						group: 'Group B',
						home: 'Ivory Coast',
						away: 'Thailand',
						home_id: 'ivc',
						away_id: 'tld',
						location: 'Ottawa',
						location_id: 4,
						stadium: "Lansdowne Stadium",
						time: '19:00', // ET time
						date: "June 11",
						score: ''
					},
					{	
						match_id: 16,
						group: 'Group A',
						home: 'Canada',
						away: 'New Zealand',
						home_id: 'can',
						away_id: 'nzl',
						location: 'Edmonton',
						location_id: 3,
						stadium: "Commonwealth Stadium",
						time: '21:00', // ET time
						date: "June 11",
						score: ''
					},
					{	
						match_id: 17,
						group: 'Group D',
						home: 'Australia',
						away: 'Nigeria',
						home_id: 'aus',
						away_id: 'nig',
						location: 'Winnipeg',
						location_id: 6,
						stadium: "Winnipeg Stadium",
						time: '17:00', // ET time
						date: "June 12",
						score: ''
					},
					{	
						match_id: 18,
						group: 'Group C',
						home: 'Switzerland',
						away: 'Ecuador',
						home_id: 'sui',
						away_id: 'ecu',
						location: 'Vancouver',
						location_id: 5,
						stadium: "BC Place Stadium",
						time: '19:00', // ET time
						date: "June 12",
						score: ''
					},
					{	
						match_id: 19,
						group: 'Group D',
						home: 'United States',
						away: 'Sweden',
						home_id: 'usa',
						away_id: 'swe',
						location: 'Winnipeg',
						location_id: 6,
						stadium: "Winnipeg Stadium",
						time: '20:00', // ET time
						date: "June 12",
						score: ''
					},
					{	
						match_id: 20,
						group: 'Group C',
						home: 'Japan',
						away: 'Cameroon',
						home_id: 'jap',
						away_id: 'cam',
						location: 'Vancouver',
						location_id: 5,
						stadium: "BC Place Stadium",
						time: '22:00', // ET time
						date: "June 12",
						score: ''
					},
					{	
						match_id: 21,
						group: 'Group F',
						home: 'France',
						away: 'Colombia',
						home_id: 'fra',
						away_id: 'col',
						location: 'Moncton',
						location_id: 2,
						stadium: "Moncton Stadium",
						time: '13:00', // ET time
						date: "June 13",
						score: ''
					},
					{	
						match_id: 22,
						group: 'Group E',
						home: 'Brazil',
						away: 'Spain',
						home_id: 'bra',
						away_id: 'spa',
						location: 'Montreal',
						location_id: 3,
						stadium: "Olympic Stadium",
						time: '16:00', // ET time
						date: "June 13",
						score: ''
					},
					{	
						match_id: 23,
						group: 'Group F',
						home: 'England',
						away: 'Mexico',
						home_id: 'eng',
						away_id: 'mex',
						location: 'Moncton',
						location_id: 2,
						stadium: "Moncton Stadium",
						time: '16:00', // ET time
						date: "June 13",
						score: ''
					},
					{	
						match_id: 24,
						group: 'Group E',
						home: 'South Korea',
						away: 'Costa Rica',
						home_id: 'skr',
						away_id: 'crc',
						location: 'Montreal',
						location_id: 3,
						stadium: "Olympic Stadium",
						time: '19:00', // ET time
						date: "June 13",
						score: ''
					},
					{	
						match_id: 25,
						group: 'Group B',
						home: 'Thailand',
						away: 'Germany',
						home_id: 'tld',
						away_id: 'ger',
						location: 'Winnipeg',
						location_id: 6,
						stadium: "Winnipeg Stadium",
						time: '16:00', // ET time
						date: "June 15",
						score: ''
					},
					{	
						match_id: 26,
						group: 'Group B',
						home: 'Ivory Coast',
						away: 'Norway',
						home_id: 'ivc',
						away_id: 'nor',
						location: 'Moncton',
						location_id: 2,
						stadium: "Moncton Stadium",
						time: '16:00', // ET time
						date: "June 15",
						score: ''
					},
					{	
						match_id: 27,
						group: 'Group A',
						home: 'Netherlands',
						away: 'Canada',
						home_id: 'ned',
						away_id: 'can',
						location: 'Montreal',
						location_id: 3,
						stadium: "Olympic Stadium",
						time: '19:30', // ET time
						date: "June 15",
						score: ''
					},
					{	
						match_id: 28,
						group: 'Group A',
						home: 'China',
						away: 'New Zealand',
						home_id: 'chi',
						away_id: 'nzl',
						location: 'Winnipeg',
						location_id: 6,
						stadium: "Winnipeg Stadium",
						time: '19:00', // ET time
						date: "June 15",
						score: ''
					},
					{	
						match_id: 29,
						group: 'Group C',
						home: 'Ecuador',
						away: 'Japan',
						home_id: 'ecu',
						away_id: 'jap',
						location: 'Winnipeg',
						location_id: 6,
						stadium: "Winnipeg Stadium",
						time: '17:00', // ET time
						date: "June 16",
						score: ''
					},
					{	
						match_id: 30,
						group: 'Group C',
						home: 'Switzerland',
						away: 'Cameroon',
						home_id: 'sui',
						away_id: 'cam',
						location: 'Edmonton',
						location_id: 1,
						stadium: "Commonwealth Stadium",
						time: '17:00', // ET time
						date: "June 16",
						score: ''
					},
					{	
						match_id: 31,
						group: 'Group D',
						home: 'Nigeria',
						away: 'United States',
						home_id: 'nig',
						away_id: 'usa',
						location: 'Vancouver',
						location_id: 5,
						stadium: "BC Place Stadium",
						time: '20:00', // ET time
						date: "June 16",
						score: ''
					},
					{	
						match_id: 32,
						group: 'Group D',
						home: 'Australia',
						away: 'Sweden',
						home_id: 'aus',
						away_id: 'swe',
						location: 'Edmonton',
						location_id: 1,
						stadium: "Commonwealth Stadium",
						time: '20:00', // ET time
						date: "June 16",
						score: ''
					},
					{	
						match_id: 33,
						group: 'Group F',
						home: 'Mexico',
						away: 'France',
						home_id: 'mex',
						away_id: 'fra',
						location: 'Ottawa',
						location_id: 4,
						stadium: "Lansdowne Stadium",
						time: '16:00', // ET time
						date: "June 17",
						score: ''
					},
					{	
						match_id: 34,
						group: 'Group F',
						home: 'England',
						away: 'Colombia',
						home_id: 'eng',
						away_id: 'col',
						location: 'Montreal',
						location_id: 3,
						stadium: "Olympic Stadium",
						time: '16:00', // ET time
						date: "June 17",
						score: ''
					},
					{	
						match_id: 35,
						group: 'Group E',
						home: 'Costa Rica',
						away: 'Brazil',
						home_id: 'crc',
						away_id: 'bra',
						location: 'Moncton',
						location_id: 2,
						stadium: "Moncton Stadium",
						time: '19:00', // ET time
						date: "June 17",
						score: ''
					},
					{	
						match_id: 36,
						group: 'Group E',
						home: 'South Korea',
						away: 'Spain',
						home_id: 'skr',
						away_id: 'spa',
						location: 'Ottawa',
						location_id: 4,
						stadium: "Lansdowne Stadium",
						time: '19:00', // ET time
						date: "June 17",
						score: ''
					}]
};


Template.main.helpers({  
  //populate the list of teams
  
});



Template.teamlist.helpers(data); 
Template.schedule.helpers(match);

Router.configure({
	layoutTemplate: 'main',
})

Router.route('home', {
	path: '/'
});

Router.route('schedule', {
	path: '/schedule'
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
