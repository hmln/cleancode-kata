import { TennisGame } from './TennisGame';


export class TennisGame2 implements TennisGame {
  P1point: number = 0;
  P2point: number = 0;

  P1res: string = '';
  P2res: string = '';
  
  private player1Name: string;
  private player2Name: string;

  private scoreSlogan: string = '';
  private THRESHOLD: number = 4;
  
  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  whenBothLessThanThreshold(): void {
    if (this.P1point === 0)
      this.scoreSlogan = 'Love';
    if (this.P1point === 1)
      this.scoreSlogan = 'Fifteen';
    if (this.P1point === 2)
      this.scoreSlogan = 'Thirty';
    if (this.P1point >= 3) 
        this.scoreSlogan = 'Deuce';
    else {
      this.scoreSlogan += '-All';
    }
  }

  whenP2EqualZero(): void {
    this.P1res = pointToName(this.P1point)
    this.P2res = 'Love';
    this.scoreSlogan = this.P1res + '-' + this.P2res;
  }

  whenP1EqualZero(): void {
    this.P2res = pointToName(this.P2point)
    this.P1res = 'Love';
    this.scoreSlogan = this.P1res + '-' + this.P2res;
  }

  onePlayerLargerThanTheOther(): void {
    this.P1res = pointToName(this.P1point)
    this.P2res = pointToName(this.P2point)
    this.scoreSlogan = this.P1res + '-' + this.P2res;
  }
  whenPlayer1NearlyWin(): void {
    if (this.P2point >= 3) {
      this.scoreSlogan = 'Advantage player1';
    }
  }
  whenPlayer2NearlyWin(): void {
    if (this.P1point >= 3) {
      this.scoreSlogan = 'Advantage player2';
    }
  }
  whenEitherPlayerEqualZero(): void {
    if (this.P1point > 0) {
      this.whenP2EqualZero()
    }
    if (this.P2point > 0) {
      this.whenP1EqualZero()
    }
  }
  
  whenEitherPlayerWon(distanceScore): void {
    if (distanceScore >= 2) {
      this.scoreSlogan = 'Win for player1';
    }
    if (distanceScore <= -2) {
      this.scoreSlogan = 'Win for player2';
    }
  }
  getScore(): string {
    const distanceScore: number = this.P1point - this.P2point;
    const maxScore: number = Math.max(this.P1point, this.P2point)
    const minScore: number = Math.min(this.P1point, this.P2point)
    if (this.P1point === this.P2point) {
      this.whenBothLessThanThreshold()
    }
    if (minScore === 0){
      this.whenEitherPlayerEqualZero()
    }
    
    if (distanceScore > 0){
      if (this.P1point < this.THRESHOLD) {
        this.onePlayerLargerThanTheOther();
      }
      this.whenPlayer1NearlyWin();
    }
    
    if (distanceScore < 0) {
      if (this.P2point < this.THRESHOLD) {
        this.onePlayerLargerThanTheOther();
      }
      this.whenPlayer2NearlyWin();
    }
    
    if (maxScore >= this.THRESHOLD) {
      this.whenEitherPlayerWon(distanceScore)
    }
    return this.scoreSlogan;
  }

  SetP1Score(score: number): void {
    for (let i = 0; i < score; i++) {
      this.P1Score();
    }
  }

  SetP2Score(score: number): void {
    for (let i = 0; i < score; i++) {
      this.P2Score();
    }
  }

  P1Score(): void {
    this.P1point++;
  }

  P2Score(): void {
    this.P2point++;
  }

  wonPoint(player: string): void {
    if (player === 'player1')
      this.P1Score();
    else
      this.P2Score();
  }
}

function pointToName(point) {
  return ['Love', 'Fifteen', 'Thirty', 'Forty'][point]
}