import { Component, OnInit } from '@angular/core';

import { Game } from '../game';
import { Game3 } from '../game.data';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.css']
})
export class Game3Component implements OnInit {

  game: Game;

  constructor() { }

  ngOnInit() {
    this.game = Game3;
  }

}
