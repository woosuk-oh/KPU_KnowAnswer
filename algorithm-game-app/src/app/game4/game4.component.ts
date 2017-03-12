import { Component, OnInit } from '@angular/core';

import { Game } from '../game';
import { Game4 } from '../game.data';

@Component({
  selector: 'app-game4',
  templateUrl: './game4.component.html',
  styleUrls: ['./game4.component.css']
})
export class Game4Component implements OnInit {

  game: Game;

  constructor() { }

  ngOnInit() {
    this.game = Game4;
  }

}
