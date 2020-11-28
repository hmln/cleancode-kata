import { TennisGame } from './TennisGame';
import { throws } from 'assert';


export class TennisGame1 implements TennisGame {
  private player1Score: number = 0;
  private player2Score: number = 0;
  private player1Name: string;
  private player2Name: string;
  private scoreSlogan: string = '';

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.player1Score += 1;
    else
      this.player2Score += 1;
  }

  getSlogenOfEqualScore(): void {
    if (this.player1Score === 0) {
      this.scoreSlogan = 'Love-All';
    }
    if (this.player1Score === 1) {
      this.scoreSlogan = 'Fifteen-All';
    }
    if (this.player1Score === 2) {
      this.scoreSlogan = 'Thirty-All';
    }
    if (this.player1Score > 2) {
      this.scoreSlogan = 'Deuce'
    }
  }
  getSloganScoreGreaterThanEqual4(): void {
    const distanceScore: number = this.player1Score - this.player2Score;
    if (distanceScore === 1) this.scoreSlogan = 'Advantage player1';
    else if (distanceScore === -1) this.scoreSlogan = 'Advantage player2';
    else if (distanceScore >= 2) this.scoreSlogan = 'Win for player1';
    else this.scoreSlogan = 'Win for player2';
  }
  
  getSlogan(): void {
    let tempScore: number = 0;
    const NUMBER_OF_PLAYERS: number = 3;
    for (let player = 1; player < NUMBER_OF_PLAYERS; player++) {
      if (player === 1) tempScore = this.player1Score;
      else { this.scoreSlogan += '-'; tempScore = this.player2Score; }

      if (tempScore === 0) {
        this.scoreSlogan += 'Love';
      }
      if (tempScore === 1) {
        this.scoreSlogan += 'Fifteen';
      }
      if (tempScore === 2) {
        this.scoreSlogan += 'Thirty';
      }
      if (tempScore > 2) {
        this.scoreSlogan += 'Forty';
      }
    }
  }
  getScore(): string {
    const maxScore = Math.max(this.player1Score, this.player2Score);
    const THRESHOLD: number = 4;
    if (this.player1Score === this.player2Score) {
      this.getSlogenOfEqualScore()
    }
    else if (maxScore >= THRESHOLD) {
      this.getSloganScoreGreaterThanEqual4()
    }
    else {
      this.getSlogan()
    }
    return this.scoreSlogan;
  }
}
