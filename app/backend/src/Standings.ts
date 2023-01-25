import ICampaing from './interfaces/Campaign';

class Standings {
  public _standings: ICampaing[] = [];

  push(campaign: ICampaing): void {
    this._standings.push(campaign);
  }

  sort(): void {
    this._standings = this._standings.sort(
      (a, b) => b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || a.goalsOwn - b.goalsOwn,
    );
  }

  get standings(): ICampaing[] {
    return this._standings;
  }
}

export default Standings;
