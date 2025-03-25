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
  scored: ['Kroos', 'Benzema', 'Mingueza'],
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




 team1 < team2 && console.log(`${game.team1} is more likely to win`);
 team1 > team2 && console.log(`${game.team2} is more likely to win`);
