 
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
						game1_time: '19:30',
						game2_time: '17:00',
						game3_time: '20:00',
						game1_date: 'June 8',
						game2_date: 'June 12',
						game3_date: 'June 16',
						game1_goalsFor: 1,
						game1_goalsAgainst: 3,
						game2_goalsFor: 2,
						game2_goalsAgainst: 0,
						game3_goalsFor: 1,
						game3_goalsAgainst: 1,
						matches_played: 3,
						wins: 1,
						draws: 1,
						losses: 1,
						goalsFor: 4,
						goalsAgainst: 4,
						goalDiff: 0,
						points: 4
					},
					{	id: 'bra',
						group: 'Group E',
						country: "Brazil",
						game1: 'South Korea', 
						game2: 'Spain', 
						game3: 'Costa',
						game1_loc: 'Montreal',
						game2_loc: 'Montreal',
						game3_loc: 'Moncton',
						game1_time: '19:00',
						game2_time: '16:00',
						game3_time: '19:00',
						game1_date: 'June 9',
						game2_date: 'June 13',
						game3_date: 'June 17',
						game1_goalsFor: 2,
						game1_goalsAgainst: 0,
						game2_goalsFor: 1,
						game2_goalsAgainst: 0,
						game3_goalsFor: 1,
						game3_goalsAgainst: 0,
						matches_played: 3,
						wins: 3,
						draws: 0,
						losses: 0,
						goalsFor: 4,
						goalsAgainst: 0,
						goalDiff: 4,
						points: 9
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
						game3_loc: 'Edmonton',
						game1_time: '19:00',
						game2_time: '22:00',
						game3_time: '17:00',
						game1_date: 'June 8',
						game2_date: 'June 12',
						game3_date: 'June 16',
						game1_goalsFor: 6,
						game1_goalsAgainst: 0,
						game2_goalsFor: 1,
						game2_goalsAgainst: 2,
						game3_goalsFor: 2,
						game3_goalsAgainst: 1,
						matches_played: 3,
						wins: 2,
						draws: 0,
						losses: 1,
						goalsFor: 9,
						goalsAgainst: 3,
						goalDiff: 6,
						points: 6
					},
					{	id: 'can',
						group: 'Group A',
						country: "Canada", 
						game1:'China PR', 
						game2: 'New Zealand', 
						game3: 'Netherlands',
						game1_loc: 'Edmonton',
						game2_loc: 'Edmonton',
						game3_loc: 'Montreal',
						game1_time: '18:00',
						game2_time: '21:00',
						game3_time: '19:30',
						game1_date: 'June 6',
						game2_date: 'June 11',
						game3_date: 'June 15',
						game1_goalsFor: 1,
						game1_goalsAgainst: 0,
						game2_goalsFor: 0,
						game2_goalsAgainst: 0,
						game3_goalsFor: 1,
						game3_goalsAgainst: 1,
						matches_played: 3,
						wins: 1,
						draws: 2,
						losses: 0,
						goalsFor: 2,
						goalsAgainst: 1,
						goalDiff: 1,
						points: 5
					},
					{	
						id: 'chn',
						country: "China PR",
						group: 'Group A', 
						game1: 'Canada', 
						game2:'Netherlands', 
						game3: 'New Zealand',
						game1_loc: 'Edmonton',
						game2_loc: 'Edmonton',
						game3_loc: 'Winnipeg',
						game1_time: '18:00',
						game2_time: '18:00',
						game3_time: '19:30',
						game1_date: 'June 6',
						game2_date: 'June 11',
						game3_date: 'June 15',
						game1_goalsFor: 0,
						game1_goalsAgainst: 1,
						game2_goalsFor: 1,
						game2_goalsAgainst: 0,
						game3_goalsFor: 2,
						game3_goalsAgainst: 2,
						matches_played: 3,
						wins: 1,
						draws: 1,
						losses: 1,
						goalsFor: 3,
						goalsAgainst: 3,
						goalDiff: 0,
						points: 4
					},
					{	id: 'col',
						group: 'Group F',
						country: "Colombia", 
						game1: 'Mexico', 
						game2: 'France', 
						game3: 'England',
						game1_loc: 'Moncton',
						game2_loc: 'Moncton',
						game3_loc: 'Montreal',
						game1_time: '16:00',
						game2_time: '13:00',
						game3_time: '16:00',
						game1_date: 'June 9',
						game2_date: 'June 13',
						game3_date: 'June 17',
						game1_goalsFor: 1,
						game1_goalsAgainst: 1,
						game2_goalsFor: 2,
						game2_goalsAgainst: 0,
						game3_goalsFor: 1,
						game3_goalsAgainst: 2,
						matches_played: 3,
						wins: 1,
						draws: 1,
						losses: 1,
						goalsFor: 4,
						goalsAgainst: 3,
						goalDiff: 1,
						points: 4
					},
					{	id: 'crc',
						group: 'Group E',
						country: "Costa Rica", 
						game1: 'Spain', 
						game2: 'South Korea', 
						game3: 'Brazil',
						game1_loc: 'Montreal',
						game2_loc: 'Montreal',
						game3_loc: 'Moncton',
						game1_time: '16:00',
						game2_time: '19:00',
						game3_time:'19:00',
						game1_date: 'June 9',
						game2_date: 'June 13',
						game3_date: 'June 17',
						game1_goalsFor: 1,
						game1_goalsAgainst: 1,
						game2_goalsFor: 2,
						game2_goalsAgainst: 2,
						game3_goalsFor: 0,
						game3_goalsAgainst: 1,
						matches_played: 3,
						wins: 0,
						draws: 2,
						losses: 1,
						goalsFor: 3,
						goalsAgainst: 4,
						goalDiff: -1,
						points: 2
					},
					{	id: 'ecu',
						group: 'Group C',
						country: "Ecuador", 
						game1: 'Cameroon', 
						game2: 'Switzerland', 
						game3: 'Japan',
						game1_loc: 'Vancouver',
						game2_loc: 'Vancouver',
						game3_loc: 'Winnipeg',
						game1_time: '19:00',
						game2_time: '19:00',
						game3_time: '17:00',
						game1_date: 'June 8',
						game2_date: 'June 12',
						game3_date: 'June 16',
						game1_goalsFor: 0,
						game1_goalsAgainst: 6,
						game2_goalsFor: 1,
						game2_goalsAgainst: 10,
						game3_goalsFor: 0,
						game3_goalsAgainst: 1,
						matches_played: 3,
						wins: 0,
						draws: 0,
						losses: 3,
						goalsFor: 1,
						goalsAgainst: 17,
						goalDiff: -16,
						points: 0
					},
					{	id: 'eng',
						group: 'Group F',
						country: "England", 
						game1: 'France', 
						game2: 'Mexico', 
						game3: 'Colombia',
						game1_loc: 'Moncton',
						game2_loc: 'Moncton',
						game3_loc: 'Montreal',
						game1_time: '13:00',
						game2_time: '16:00',
						game3_time: '16:00',
						game1_date: 'June 9',
						game2_date: 'June 13',
						game3_date: 'June 17',
						game1_goalsFor: 0,
						game1_goalsAgainst: 1,
						game2_goalsFor: 2,
						game2_goalsAgainst: 1,
						game3_goalsFor: 2,
						game3_goalsAgainst: 1,
						matches_played: 3,
						wins: 2,
						draws: 0,
						losses: 1,
						goalsFor: 4,
						goalsAgainst: 3,
						goalDiff: 1,
						points: 6
					},
					{	id: 'fra',
						group: 'Group F',
						country: "France", 
						game1: 'England', 
						game2: 'Colombia', 
						game3: 'Mexico',
						game1_loc: 'Moncton',
						game2_loc: 'Moncton',
						game3_loc: 'Ottawa',
						game1_time: '13:00',
						game2_time: '13:00',
						game3_time: '16:00',
						game1_date: 'June 9',
						game2_date: 'June 13',
						game3_date: 'June 17',
						game1_goalsFor: 1,
						game1_goalsAgainst: 0,
						game2_goalsFor: 0,
						game2_goalsAgainst: 2,
						game3_goalsFor: 5,
						game3_goalsAgainst: 0,
						matches_played: 3,
						wins: 2,
						draws: 0,
						losses: 1,
						goalsFor: 6,
						goalsAgainst: 2,
						goalDiff: 4,
						points: 6
					},
					{	id: 'ger',
						group: 'Group B',
						country: "Germany", 
						game1: 'Ivory Coast', 
						game2: 'Norway', 
						game3:'Thailand',
						game1_loc: 'Ottawa',
						game2_loc: 'Ottawa',
						game3_loc: 'Winnipeg',
						game1_time: '16:00',
						game2_time: '16:00',
						game3_time: '16:00',
						game1_date: 'June 7',
						game2_date: 'June 11',
						game3_date: 'June 15',
						game1_goalsFor: 10,
						game1_goalsAgainst: 0,
						game2_goalsFor: 1,
						game2_goalsAgainst: 1,
						game3_goalsFor: 4,
						game3_goalsAgainst: 0,
						matches_played: 3,
						wins: 2,
						draws: 1,
						losses: 0,
						goalsFor: 15,
						goalsAgainst: 1,
						goalDiff: 14,
						points: 7
					},
					{	id: 'civ',
						group: 'Group B',
						country: "Ivory Coast", 
						game1: 'Germany', 
						game2: 'Thailand', 
						game3: 'Norway',
						game1_loc: 'Ottawa',
						game2_loc: 'Ottawa',
						game3_loc: 'Moncton',
						game1_time: '16:00',
						game2_time: '19:00',
						game3_time: '16:00',
						game1_date: 'June 7',
						game2_date: 'June 11',
						game3_date: 'June 15',
						game1_goalsFor: 0,
						game1_goalsAgainst: 10,
						game2_goalsFor: 2,
						game2_goalsAgainst: 3,
						game3_goalsFor: 1,
						game3_goalsAgainst: 3,
						matches_played: 3,
						wins: 0,
						draws: 0,
						losses: 3,
						goalsFor: 3,
						goalsAgainst: 16,
						goalDiff: -13,
						points: 0
					},
					{	id: 'jpn',
						group: 'Group C',
						country: "Japan", 
						game1: 'Switzerland', 
						game2: 'Cameroon', 
						game3: 'Ecuador',
						game1_loc: 'Vancouver',
						game2_loc: 'Vancouver',
						game3_loc: 'Winnipeg',
						game1_time: '22:00',
						game2_time: '22:00',
						game3_time: '17:00',
						game1_date: 'June 8',
						game2_date: 'June 12',
						game3_date: 'June 16',
						game1_goalsFor: 0,
						game1_goalsAgainst: 0,
						game2_goalsFor: 0,
						game2_goalsAgainst: 0,
						game3_goalsFor: 0,
						game3_goalsAgainst: 0,
						matches_played: 0,
						wins: 0,
						draws: 0,
						losses: 0,
						goalsFor: 0,
						goalsAgainst: 0,
						goalDiff: 0,
						points: 0
					},
					{	id: 'mex',
						group: 'Group F',
						country: "Mexico", 
						game1: 'Colombia', 
						game2: 'England', 
						game3: 'France',
						game1_loc: 'Moncton',
						game2_loc: 'Moncton',
						game3_loc: 'Ottawa',
						game1_time: '16:00',
						game2_time: '16:00',
						game3_time: '16:00',
						game1_date: 'June 9',
						game2_date: 'June 13',
						game3_date: 'June 17',
						game1_goalsFor: 0,
						game1_goalsAgainst: 0,
						game2_goalsFor: 0,
						game2_goalsAgainst: 0,
						game3_goalsFor: 0,
						game3_goalsAgainst: 0,
						matches_played: 0,
						wins: 0,
						draws: 0,
						losses: 0,
						goalsFor: 0,
						goalsAgainst: 0,
						goalDiff: 0,
						points: 0
					},
					{	id: 'ned',
						group: 'Group A',
						country: "Netherlands", 
						game1: 'New Zealand', 
						game2: 'China', 
						game3: 'Canada',
						game1_loc: 'Edmonton',
						game2_loc: 'Edmonton',
						game3_loc: 'Montreal',
						game1_time: '21:00',
						game2_time: '18:00',
						game3_time: '19:30',
						game1_date: 'June 6',
						game2_date: 'June 11',
						game3_date: 'June 15',
						game1_goalsFor: 0,
						game1_goalsAgainst: 0,
						game2_goalsFor: 0,
						game2_goalsAgainst: 0,
						game3_goalsFor: 0,
						game3_goalsAgainst: 0,
						matches_played: 0,
						wins: 0,
						draws: 0,
						losses: 0,
						goalsFor: 0,
						goalsAgainst: 0,
						goalDiff: 0,
						points: 0
					},
					{	id: 'nzl',
						group: 'Group A',
						country: "New Zealand", 
						game1: 'Netherlands', 
						game2: 'Canada', 
						game3: 'China',
						game1_loc: 'Edmonton',
						game2_loc: 'Edmonton',
						game3_loc: 'Winnipeg',
						game1_time: '21:00',
						game2_time: '18:00',
						game3_time: '19:30',
						game1_date: 'June 6',
						game2_date: 'June 11',
						game3_date: 'June 15',
						game1_goalsFor: 0,
						game1_goalsAgainst: 0,
						game2_goalsFor: 0,
						game2_goalsAgainst: 0,
						game3_goalsFor: 0,
						game3_goalsAgainst: 0,
						matches_played: 0,
						wins: 0,
						draws: 0,
						losses: 0,
						goalsFor: 0,
						goalsAgainst: 0,
						goalDiff: 0,
						points: 0
					},
					{	id: 'nig',
						group: 'Group D',
						country: "Nigeria", 
						game1: 'Sweden', 
						game2: 'Australia', 
						game3: 'United States',
						game1_loc: 'Winnipeg',
						game2_loc: 'Winnipeg',
						game3_loc: 'Vancouver',
						game1_time: '16:00',
						game2_time: '17:00',
						game3_time: '20:00',
						game1_date: 'June 8',
						game2_date: 'June 12',
						game3_date: 'June 16',
						game1_goalsFor: 0,
						game1_goalsAgainst: 0,
						game2_goalsFor: 0,
						game2_goalsAgainst: 0,
						game3_goalsFor: 0,
						game3_goalsAgainst: 0,
						matches_played: 0,
						wins: 0,
						draws: 0,
						losses: 0,
						goalsFor: 0,
						goalsAgainst: 0,
						goalDiff: 0,
						points: 0
					},
					{	id: 'nor',
						group: 'Group B',
						country: "Norway", 
						game1: 'Thailand', 
						game2: 'Germany', 
						game3: 'Ivory Coast',
						game1_loc: 'Ottawa',
						game2_loc: 'Ottawa',
						game3_loc: 'Moncton',
						game1_time: '13:00',
						game2_time: '16:00',
						game3_time: '16:00',
						game1_date: 'June 7',
						game2_date: 'June 11',
						game3_date: 'June 15',
						game1_goalsFor: 0,
						game1_goalsAgainst: 0,
						game2_goalsFor: 0,
						game2_goalsAgainst: 0,
						game3_goalsFor: 0,
						game3_goalsAgainst: 0,
						matches_played: 0,
						wins: 0,
						draws: 0,
						losses: 0,
						goalsFor: 0,
						goalsAgainst: 0,
						goalDiff: 0,
						points: 0
					},
					{	id: 'skr',
						group: 'Group E',
						country: "South Korea", 
						game1: 'Brazil', 
						game2: 'Costa Rica', 
						game3: 'Spain',
						game1_loc: 'Montreal',
						game2_loc: 'Montreal',
						game3_loc: 'Ottawa',
						game1_time: '19:00',
						game2_time: '19:00',
						game3_time: '19:00',
						game1_date: 'June 9',
						game2_date: 'June 13',
						game3_date: 'June 17',
						game1_goalsFor: 0,
						game1_goalsAgainst: 0,
						game2_goalsFor: 0,
						game2_goalsAgainst: 0,
						game3_goalsFor: 0,
						game3_goalsAgainst: 0,
						matches_played: 0,
						wins: 0,
						draws: 0,
						losses: 0,
						goalsFor: 0,
						goalsAgainst: 0,
						goalDiff: 0,
						points: 0
					},
					{	id: 'spa',
						group: 'Group E',
						country: "Spain", 
						game1: 'Costa Rica', 
						game2: 'Brazil', 
						game3: 'South Korea',
						game1_loc: 'Montreal',
						game2_loc: 'Montreal',
						game3_loc: 'Ottawa',
						game1_time: '16:00',
						game2_time: '16:00',
						game3_time: '19:00',
						game1_date: 'June 9',
						game2_date: 'June 13',
						game3_date: 'June 17',
						game1_goalsFor: 0,
						game1_goalsAgainst: 0,
						game2_goalsFor: 0,
						game2_goalsAgainst: 0,
						game3_goalsFor: 0,
						game3_goalsAgainst: 0,
						matches_played: 0,
						wins: 0,
						draws: 0,
						losses: 0,
						goalsFor: 0,
						goalsAgainst: 0,
						goalDiff: 0,
						points: 0
					},
					{	id: 'swe',
						group: 'Group D',
						country: "Sweden", 
						game1: 'Nigeria', 
						game2: 'United States', 
						game3: 'Australia',
						game1_loc: 'Winnipeg',
						game2_loc: 'Winnipeg',
						game3_loc: 'Edmonton',
						game1_time: '16:00',
						game2_time: '20:00',
						game3_time: '20:00',
						game1_date: 'June 8',
						game2_date: 'June 12',
						game3_date: 'June 16',
						game1_goalsFor: 0,
						game1_goalsAgainst: 0,
						game2_goalsFor: 0,
						game2_goalsAgainst: 0,
						game3_goalsFor: 0,
						game3_goalsAgainst: 0,
						matches_played: 0,
						wins: 0,
						draws: 0,
						losses: 0,
						goalsFor: 0,
						goalsAgainst: 0,
						goalDiff: 0,
						points: 0
					},
					{	id: 'sui',
						group: 'Group C',
						country: "Switzerland", 
						game1: 'Japan', 
						game2: 'Ecuador', 
						game3: 'Cameroon',
						game1_loc: 'Vancouver',
						game2_loc: 'Vancouver',
						game3_loc: 'Edmonton',
						game1_time: '22:00',
						game2_time: '19:00',
						game3_time: '17:00',
						game1_date: 'June 8',
						game2_date: 'June 12',
						game3_date: 'June 16',
						game1_goalsFor: 0,
						game1_goalsAgainst: 0,
						game2_goalsFor: 0,
						game2_goalsAgainst: 0,
						game3_goalsFor: 0,
						game3_goalsAgainst: 0,
						matches_played: 0,
						wins: 0,
						draws: 0,
						losses: 0,
						goalsFor: 0,
						goalsAgainst: 0,
						goalDiff: 0,
						points: 0
					},
					{	id: 'tld',
						group: 'Group B',
						country: "Thailand", 
						game1: 'Norway', 
						game2: 'Ivory Coast', 
						game3:'Germany',
						game1_loc: 'Ottawa',
						game2_loc: 'Ottawa',
						game3_loc: 'Winnipeg',
						game1_time: '13:00',
						game2_time: '19:00',
						game3_time: '16:00',
						game1_date: 'June 7',
						game2_date: 'June 11',
						game3_date: 'June 15',
						game1_goalsFor: 0,
						game1_goalsAgainst: 0,
						game2_goalsFor: 0,
						game2_goalsAgainst: 0,
						game3_goalsFor: 0,
						game3_goalsAgainst: 0,
						matches_played: 0,
						wins: 0,
						draws: 0,
						losses: 0,
						goalsFor: 0,
						goalsAgainst: 0,
						goalDiff: 0,
						points: 0
					},
					{	id: 'usa',
						group: 'Group D',
						country: "United States", 
						game1: 'Australia', 
						game2: 'Sweden', 
						game3: 'Nigeria',
						game1_loc: 'Winnipeg',
						game2_loc: 'Winnipeg',
						game3_loc: 'Vancouver',
						game1_time: '19:30',
						game2_time: '20:00',
						game3_time: '20:00',
						game1_date: 'June 8',
						game2_date: 'June 12',
						game3_date: 'June 16',
						game1_goalsFor: 0,
						game1_goalsAgainst: 0,
						game2_goalsFor: 0,
						game2_goalsAgainst: 0,
						game3_goalsFor: 0,
						game3_goalsAgainst: 0,
						matches_played: 0,
						wins: 0,
						draws: 0,
						losses: 0,
						goalsFor: 0,
						goalsAgainst: 0,
						goalDiff: 0,
						points: 0
					}],

  				stadium: [
  					{location: 'Edmonton', id: 1}, 
  					{location: 'Moncton', id: 2}, 
  					{location: 'Montreal', id: 3}, 
  					{location: 'Ottawa', id: 4}, 
  					{location: 'Vancouver', id: 5}, 
  					{location: 'Winnipeg', id: 6}
  				]
};

var match = {
	schedule: [{	
						match_id: 1,
						group: 'Group A',
						home: 'Canada',
						away: 'China',
						home_id: 'can',
						away_id: 'chn',
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
						home: 'Germany',
						away: 'Ivory Coast',
						home_id: 'ger',
						away_id: 'civ',
						location: 'Ottawa',
						location_id: 4,
						stadium: "Lansdowne Stadium",
						time: '16:00', // ET time
						date: "June 7",
						score: ''
					},
					{	
						match_id: 4,
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
						match_id: 5,
						group: 'Group C',
						home: 'Japan',
						away: 'Switzerland',
						home_id: 'jpn',
						away_id: 'sui',
						location: 'Vancouver',
						location_id: 5,
						stadium: "BC Place Stadium",
						time: '20:00', // ET time
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
						match_id: 9,
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
						match_id: 12,
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
						match_id: 13,
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
						match_id: 16,
						group: 'Group B',
						home: 'Ivory Coast',
						away: 'Thailand',
						home_id: 'civ',
						away_id: 'tld',
						location: 'Ottawa',
						location_id: 4,
						stadium: "Lansdowne Stadium",
						time: '19:00', // ET time
						date: "June 11",
						score: ''
					},
					{	
						match_id: 17,
						group: 'Group C',
						home: 'Japan',
						away: 'Cameroon',
						home_id: 'jpn',
						away_id: 'cam',
						location: 'Vancouver',
						location_id: 5,
						stadium: "BC Place Stadium",
						time: '22:00', // ET time
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
						match_id: 21,
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
						match_id: 22,
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
						match_id: 23,
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
						match_id: 24,
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
						match_id: 25,
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
						match_id: 26,
						group: 'Group A',
						home: 'China',
						away: 'New Zealand',
						home_id: 'chn',
						away_id: 'nzl',
						location: 'Winnipeg',
						location_id: 6,
						stadium: "Winnipeg Stadium",
						time: '19:00', // ET time
						date: "June 15",
						score: ''
					},
					{	
						match_id: 27,
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
						match_id: 28,
						group: 'Group B',
						home: 'Ivory Coast',
						away: 'Norway',
						home_id: 'civ',
						away_id: 'nor',
						location: 'Moncton',
						location_id: 2,
						stadium: "Moncton Stadium",
						time: '16:00', // ET time
						date: "June 15",
						score: ''
					},
					{	
						match_id: 29,
						group: 'Group C',
						home: 'Ecuador',
						away: 'Japan',
						home_id: 'ecu',
						away_id: 'jpn',
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
						match_id: 34,
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
					},
					{	
						match_id: 35,
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
						match_id: 36,
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
					}]
};


var groups = {
	group: [{	
					group: 'Group A',
					home: 'Canada',
					away: 'China',
					home_id: 'can',
					away_id: 'chn',
					location: 'Edmonton',
					location_id: 1,
					stadium: "Commonwealth Stadium",
					time: '18:00', // ET time
					date: "June 6",
					score: ''
				}

		]
};

var knockout = {
	match_num: [{	
						match_id: 37,
						group: '',
						home: '',
						away: '',
						home_id: '',
						away_id: '',
						location: 'Edmonton',
						location_id: 1,
						stadium: "Commonwealth Stadium",
						time: '19:30', // ET time
						date: "June 20",
						score: ''
					},
					{	
						match_id: 38,
						group: '',
						home: '',
						away: '',
						home_id: '',
						away_id: '',
						location: 'Edmonton',
						location_id: 1,
						stadium: "Commonwealth Stadium",
						time: '20:00', // ET time
						date: "June 22",
						score: ''
					},
					{	
						match_id: 39,
						group: '',
						home: '',
						away: '',
						home_id: '',
						away_id: '',
						location: 'Ottawa',
						location_id: 1,
						stadium: "Lansdowne Stadium",
						time: '16:00', // ET time
						date: "June 20",
						score: ''
					},
					{	
						match_id: 40,
						group: '',
						home: '',
						away: '',
						home_id: '',
						away_id: '',
						location: 'Montreal',
						location_id: 1,
						stadium: "Olympic Stadium",
						time: '16:00', // ET time
						date: "June 21",
						score: ''
					},
					{	
						match_id: 41,
						group: '',
						home: '',
						away: '',
						home_id: '',
						away_id: '',
						location: 'Moncton',
						location_id: 1,
						stadium: "Moncton Stadium",
						time: '13:00', // ET time
						date: "June 21",
						score: ''
					},
					{	
						match_id: 42,
						group: '',
						home: '',
						away: '',
						home_id: '',
						away_id: '',
						location: 'Edmonton',
						location_id: 1,
						stadium: "Commonwealth Stadium",
						time: '20:00', // ET time
						date: "June 23",
						score: ''
					},
					{	
						match_id: 43,
						group: '',
						home: '',
						away: '',
						home_id: '',
						away_id: '',
						location: 'Ottawa',
						location_id: 1,
						stadium: "Lansdowne Stadium",
						time: '17:00', // ET time
						date: "June 22",
						score: ''
					},
					{	
						match_id: 44,
						group: '',
						home: '',
						away: '',
						home_id: '',
						away_id: '',
						location: 'Vancouver',
						location_id: 1,
						stadium: "BC Place Stadium",
						time: '19:30', // ET time
						date: "June 21",
						score: ''
					},
					{	
						match_id: 45,
						group: '',
						home: '',
						away: '',
						home_id: '',
						away_id: '',
						location: 'Ottawa',
						location_id: 1,
						stadium: "Lansdowne Stadium",
						time: '19:30', // ET time
						date: "June 26",
						score: ''
					},
					{	
						match_id: 46,
						group: '',
						home: '',
						away: '',
						home_id: '',
						away_id: '',
						location: 'Montreal',
						location_id: 1,
						stadium: "Olympic Stadium",
						time: '16:00', // ET time
						date: "June 26",
						score: ''
					},
					{	
						match_id: 47,
						group: '',
						home: '',
						away: '',
						home_id: '',
						away_id: '',
						location: 'Edmonton',
						location_id: 1,
						stadium: "Commonwealth Stadium",
						time: '16:00', // ET time
						date: "June 27",
						score: ''
					},
					{	
						match_id: 48,
						group: '',
						home: '',
						away: '',
						home_id: '',
						away_id: '',
						location: 'Vancouver',
						location_id: 1,
						stadium: "BC Place Stadium",
						time: '19:30', // ET time
						date: "June 27",
						score: ''
					},
					{	
						match_id: 49,
						group: '',
						home: '',
						away: '',
						home_id: '',
						away_id: '',
						location: 'Montreal',
						location_id: 1,
						stadium: "Olympic Stadium",
						time: '19:00', // ET time
						date: "June 30",
						score: ''
					},
					{	
						match_id: 50,
						group: '',
						home: '',
						away: '',
						home_id: '',
						away_id: '',
						location: 'Edmonton',
						location_id: 1,
						stadium: "Commonwealth Stadium",
						time: '19:00', // ET time
						date: "July 1",
						score: ''
					},
					{	
						match_id: 51,
						group: '',
						home: '',
						away: '',
						home_id: '',
						away_id: '',
						location: 'Edmonton',
						location_id: 1,
						stadium: "Commonwealth Stadium",
						time: '16:00', // ET time
						date: "July 4",
						score: ''
					},
					{	
						match_id: 52,
						group: '',
						home: '',
						away: '',
						home_id: '',
						away_id: '',
						location: 'Vancouver',
						location_id: 1,
						stadium: "BC Place Stadium",
						time: '19:00', // ET time
						date: "July 5",
						score: ''
					}

	]
};


Template.main.helpers({  
  //populate the list of teams
  
});



Template.teamlist.helpers(data); 

Template.schedule.helpers(match);

Template.groups.helpers(data);
Template.groups.helpers(
	{
  groupIs: function (group) {
    return this.group === group;
  }
});

Template.today.helpers(match);
Template.today.helpers(knockout);

Template.today.helpers(
	{
  dateIs: function (date) {
  	var d = new Date();
		var game_date = "";
		
		//convert js month number word month
		switch  (d.getMonth()) {
			case 0:
        game_date = 'January';
        break;
	    case 1:
	      game_date = 'February';
	      break;
	    case 2:
	      game_date = 'March';
	      break;
	    case 3:
	      game_date = 'April';
	      break;
	    case 4:
	      game_date = 'May';
	      break;
	    case 5:
	      game_date = 'June';
	      break;
	    case 6:
	      game_date = 'July';
	      break;
	    case 7:
	      game_date = 'August';
	      break;
	    case 7:
	      game_date = 'September';
	      break;  
	    case 9:
	      game_date = 'October';
	      break;
	    case 10:
	      game_date = 'November';
	      break;
	    case 11:
	      game_date = 'December';
	      break;
		}
		game_date += " " + d.getDate();
		
		//console.log(game_date);
		//console.log("month: "+d.getMonth()+ " day: " + d.getDate());
    return this.date === game_date;
  }
});


Router.configure({
	layoutTemplate: 'main',
});

Router.route('home', {
	path: '/'
});

Router.route('today', {
	path: '/today'
});

Router.route('schedule', {
	path: '/schedule'
});

Router.route('update', {
	path: '/update'
});

Router.route('groups', {
	path: '/groups'
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
