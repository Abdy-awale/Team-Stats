const team = {
	_players: [
		{ firstName: 'Abdulsalam', lastName: 'Awale', age: 50 },
		{ firstName: 'Uthman', lastName: 'Hassan', age: 25 },
		{ firstName: 'Hassan', lastName: 'Aseir', age: 30 },
	],
	_games: [
		{ opponant: 'Chelsea', teamPoints: 50, opponantPoints: 20 },
		{ opponant: 'Arsenal', teamPoints: 32, opponantPoints: 28 },
		{ opponant: 'Real Madrid', teamPoints: 60, opponantPoints: 39 },
	],
	get players() {
		return this._players;
	},
	get games() {
		return this._games;
	},
	addPlayer(firstName, lastName, age) {
		let player = {
			firstName: firstName,
			lastName: lastName,
			age: age,
		};
		this.players.push(player);
	},
	addGame(opp, myPts, oppPts) {
		let game = {
			opponant: opp,
			teamPoints: myPts,
			opponantPoints: oppPts,
		};
		this.games.push(game);
	},
};
// Payers invoked
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('lisa', 'leslie', 48);
team.addPlayer('Bugs', 'Bunny', 78);
console.log(team.players);
// Teams invoked
team.addGame('liverpool', 40, 28);
team.addGame('man utd', 10, 48);
team.addGame('barca', 20, 78);
console.log(team.games);
