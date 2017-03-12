import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Game } from './game';
import { GAMES } from './game.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = "알고리즘 게임을 해볼까?";
  items: FirebaseListObservable<any[]>;

  selectedGame: Game;
  games: Game[];

  constructor(private af: AngularFire, private router: Router) {
    this.items = af.database.list('/server/member/mory/keyvalue/separatedKeys');
  }

  ngOnInit(): void {
    this.games = GAMES;
    this.selectedGame = null;
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
    this.playGame();
  }

  private playGame(): void {
    let id = this.selectedGame.id;
    this.router.navigate(['game', id]);
  }
}
