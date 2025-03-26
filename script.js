const game = {
  team1: 'REAL MADRID',
  team2: 'BARCELONA',
  players: [
    [
      'Courtois',
      'Vazquez',
      'Militao',
      'Nacho',
      'Mendy',
      'Casemiro',
      'Valverde',
      'Modrich',
      'Kroos',
      'Vinicius',
      'Benzema',
    ],
    [
      'Stegen',
      'Mingueza',
      'Araujo',
      'Lenglet',
      'Dest',
      'Busquets',
      'Jong',
      'Alba',
      'Messi',
      'Pedri',
      'Dembele',
    ],
  ],
  score: '2:1',
  scored: ['Kroos', 'Benzema', 'Mingueza',],
  date: 'Apr 10th, 2021',
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
};

const [players1, players2] = game.players;
const [goalKeeper1, ...fieldPlayers1] = players1;
const allPlayers = [...players1, ...players2];

const players1Total = [
  ...players1,
  'Marcelo',
  'Isco',
  'Asensio',
  'Diaz',
  'Odriozola',
];

const {
  odds: { team1, draw, team2 },
} = game;

const printGoals = function (...gamePlayers) {
  console.log(gamePlayers);
  console.log(`${gamePlayers.length} goals were scored in the game`);
};

printGoals('Marcelo', 'Isco', 'Asensio', 'Diaz', 'Odriozola');
printGoals(...game.scored);



// 1
 team1 < team2 && console.log(`${game.team1} is more likely to win`);
 team1 > team2 && console.log(`${game.team2} is more likely to win`);

 for (const [index, name] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${name}`);
}


// 2
let oddSum = 0;
let odds = Object.values(game.odds)
for (const odd of odds) {
  oddSum += odd;
}
const average = oddSum / odds.length;
console.log(average);


// 3
for (const [teamName, odd] of Object.entries(game.odds)) {
  const mutableText = teamName === 'draw' ? 'draw' : `victory ${game[teamName]}`;
  console.log(`Odd of ${mutableText}: ${odd}`);
}

// 4
const CoalScorers = {};
for (const player of game.scored) {
  CoalScorers[player] = (CoalScorers[player] || 0) + 1;
  console.log(player); 
}