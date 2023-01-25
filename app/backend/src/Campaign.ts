import ICampaing from './interfaces/Campaign';

class Campaign implements ICampaing {
  public name: string;
  public totalPoints: number;
  public totalGames: number;
  public totalVictories = 0;
  public totalDraws = 0;
  public totalLosses = 0;
  public goalsFavor = 0;
  public goalsOwn = 0;
  public goalsBalance: number;
  public efficiency;

  constructor(name: string, goalsFavor: number[], goalsOwn: number[]) {
    this.name = name;

    goalsFavor.forEach((v, i) => {
      if (v > goalsOwn[i]) {
        this.totalVictories += 1;
      } else if (v === goalsOwn[i]) {
        this.totalDraws += 1;
      } else {
        this.totalLosses += 1;
      }
    });

    this.totalPoints = this.totalVictories * 3 + this.totalDraws;
    this.totalGames = this.totalVictories + this.totalDraws + this.totalLosses;
    this.goalsFavor = goalsFavor.reduce((p, c) => p + c);
    this.goalsOwn = goalsOwn.reduce((p, c) => p + c);
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
    this.efficiency = ((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2);
  }

  get campaign() {
    return ({
      name: this.name,
      totalPoints: this.totalPoints,
      totalGames: this.totalGames,
      totalVictories: this.totalVictories,
      totalDraws: this.totalDraws,
      totalLosses: this.totalLosses,
      goalsFavor: this.goalsFavor,
      goalsOwn: this.goalsOwn,
      goalsBalance: this.goalsBalance,
      efficiency: this.efficiency,
    });
  }
}

export default Campaign;
