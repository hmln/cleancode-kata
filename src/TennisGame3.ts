import { TennisGame } from './TennisGame';


export class TennisGame3 implements TennisGame {
  private p2: number = 0;
  private p1: number = 0;
  private p1N: string;
  private p2N: string;

  constructor(p1N: string, p2N: string) {
    this.p1N = p1N;
    this.p2N = p2N;
  }

  getScore(): string {
    const maxPoint = Math.max(this.p1, this.p2)
    
    if (this.p1 === this.p2 && this.p1 >= 3) {
        return 'Deuce';
    }
    
    if (maxPoint >= 4) {
      const playerHasMorePoint = this.p1 > this.p2 ? this.p1N : this.p2N;
      const sloganPrefix =  Math.abs(this.p1 - this.p2) === 1 ? 'Advantage' : 'Win for';
      return sloganPrefix + ' ' + playerHasMorePoint; 
    }
    
    const p: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
    const s1 = p[this.p1], s2 = p[this.p2];
    return (s1 === s2) ? s1 + '-All' : s1 + '-' + s2;
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.p1 += 1;
    else
      this.p2 += 1;

  }
}
