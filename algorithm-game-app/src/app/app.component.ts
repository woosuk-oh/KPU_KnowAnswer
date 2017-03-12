import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Game } from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = "알고리즘 게임을 해볼까?";
  items: FirebaseListObservable<any[]>;
  isGameRunning: boolean;
  selectedGame: Game;
  games: Game[];

  showList: boolean;

  constructor(private af: AngularFire, private router: Router) {
    this.items = af.database.list('/server/member/mory/keyvalue/separatedKeys');
    this.isGameRunning = false;
    this.showList = false;
  }

  ngOnInit(): void {
    this.isGameRunning = false;
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
    this.playGame();
  }

  showData(): void {
    this.showList = !this.showList;
  }

  private playGame(): void {
    this.isGameRunning = true;
    let id = this.selectedGame.id;
    this.router.navigate(['game', id]);
  }
}
