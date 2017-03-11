import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Game } from './game';

const Games: Game[] = [
  { id: 1, detail: "첫 번째 게임 설명", imageUrl: "../assets/images/1.png" },
  { id: 2, detail: "두 번째 게임 설명", imageUrl: "../assets/images/2.png" },
  { id: 3, detail: "세 번째 게임 설명", imageUrl: "../assets/images/3.png" },
  { id: 4, detail: "네 번째 게임 설명", imageUrl: "../assets/images/4.png" }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "알고리즘 게임을 해볼까?";
  items: FirebaseListObservable<any[]>;

  selectedGame: Game;
  games: Game[];

  constructor(private af: AngularFire, private router: Router) {
    this.items = af.database.list('/server/member/mory/keyvalue/separatedKeys');
    this.games = Games;
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
    this.playGame();
  }

  playGame():void {
    this.router.navigate(['game', this.selectedGame.id]);
  }
}
