const teamNames = [
  {
    id: 1,
    teamName: 'Flamengo',
  },
  {
    id: 2,
    teamName: 'Sporting Cristal',
  },
  {
    id: 3,
    teamName: 'Talleres',
  },
  {
    id: 4,
    teamName: 'Universidad Católica',
  },
];

const homeGoalsFavor = [
  { goalsFavor: [3, 3, 2] },
  { goalsFavor: [0, 0, 1] },
  { goalsFavor: [2, 1, 1] },
  { goalsFavor: [2, 0, 2] },
];

const homeGoalsOwn = [
  { goalsOwn: [1, 0, 1] },
  { goalsOwn: [2, 0, 1] },
  { goalsOwn: [2, 0, 0] },
  { goalsOwn: [3, 1, 1] },
];

const awayGoalsFavor = [
  { goalsFavor: [2, 3, 2] },
  { goalsFavor: [1, 0, 1] },
  { goalsFavor: [1, 1, 0] },
  { goalsFavor: [0, 0, 1] },
];

const awayGoalsOwn = [
  { goalsOwn: [2, 2, 0] },
  { goalsOwn: [2, 1, 2] },
  { goalsOwn: [3, 0, 0] },
  { goalsOwn: [3, 1, 1] },
];

const homeStandings = [
  {
    name: 'Flamengo',
    totalPoints: 9,
    totalGames: 3,
    totalVictories: 3,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 8,
    goalsOwn: 2,
    goalsBalance: 6,
    efficiency: '100.00',
  },
  {
    name: 'Talleres',
    totalPoints: 7,
    totalGames: 3,
    totalVictories: 2,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 4,
    goalsOwn: 2,
    goalsBalance: 2,
    efficiency: '77.78',
  },
  {
    name: 'Universidad Católica',
    totalPoints: 3,
    totalGames: 3,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 2,
    goalsFavor: 4,
    goalsOwn: 5,
    goalsBalance: -1,
    efficiency: '33.33',
  },
  {
    name: 'Sporting Cristal',
    totalPoints: 2,
    totalGames: 3,
    totalVictories: 0,
    totalDraws: 2,
    totalLosses: 1,
    goalsFavor: 1,
    goalsOwn: 3,
    goalsBalance: -2,
    efficiency: '22.22',
  },
];

const awayStandings = [
  {
    name: 'Flamengo',
    totalPoints: 7,
    totalGames: 3,
    totalVictories: 2,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 7,
    goalsOwn: 4,
    goalsBalance: 3,
    efficiency: '77.78',
  },
  {
    name: 'Talleres',
    totalPoints: 4,
    totalGames: 3,
    totalVictories: 1,
    totalDraws: 1,
    totalLosses: 1,
    goalsFavor: 2,
    goalsOwn: 3,
    goalsBalance: -1,
    efficiency: '44.44',
  },
  {
    name: 'Universidad Católica',
    totalPoints: 1,
    totalGames: 3,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 2,
    goalsFavor: 1,
    goalsOwn: 5,
    goalsBalance: -4,
    efficiency: '11.11',
  },
  {
    name: 'Sporting Cristal',
    totalPoints: 0,
    totalGames: 3,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 3,
    goalsFavor: 2,
    goalsOwn: 5,
    goalsBalance: -3,
    efficiency: '0.00',
  },
];

const generalStandings = [
  {
    name: 'Flamengo',
    totalPoints: 16,
    totalGames: 6,
    totalVictories: 5,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 15,
    goalsOwn: 6,
    goalsBalance: 9,
    efficiency: '88.89',
  },
  {
    name: 'Talleres',
    totalPoints: 11,
    totalGames: 6,
    totalVictories: 3,
    totalDraws: 2,
    totalLosses: 1,
    goalsFavor: 6,
    goalsOwn: 5,
    goalsBalance: 1,
    efficiency: '61.11',
  },
  {
    name: 'Universidad Católica',
    totalPoints: 4,
    totalGames: 6,
    totalVictories: 1,
    totalDraws: 1,
    totalLosses: 4,
    goalsFavor: 5,
    goalsOwn: 10,
    goalsBalance: -5,
    efficiency: '22.22',
  },
  {
    name: 'Sporting Cristal',
    totalPoints: 2,
    totalGames: 6,
    totalVictories: 0,
    totalDraws: 2,
    totalLosses: 4,
    goalsFavor: 3,
    goalsOwn: 8,
    goalsBalance: -5,
    efficiency: '11.11',
  },
];

export {
  teamNames,
  homeGoalsFavor,
  homeGoalsOwn,
  awayGoalsFavor,
  awayGoalsOwn,
  homeStandings,
  awayStandings,
  generalStandings,
};
